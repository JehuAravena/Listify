import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { User } from "../../interface/user";
import { UserService } from "../../service/user.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { DisplayDialogs } from "src/app/shared/display-dialogs/display-dialogs";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user-main-table",
  templateUrl: "./user-main-table.component.html",
  styleUrls: ["./user-main-table.component.css"],
})
export class UserMainTableComponent implements OnInit, OnDestroy {
  subscription?: Subscription;

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChildren('editColumn') editColumn?: QueryList<ElementRef>;
  
  users?: User[];
  displayedColumns: string[] = [
    "idUser",
    "name",
    "lastname",
    "nickname",
    "email",
    "password",
    "experience",
    "level",
    "idRole",
    "active",
    "edit",
    "delete",
  ];
  dataSource: MatTableDataSource<User>;

  constructor(
    private userService: UserService,
    public displayDialogs: DisplayDialogs
  ) {
    this.dataSource = new MatTableDataSource<User>([]);
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    this.editColumn?.toArray().forEach((element, index) => {
      const tdElement = element.nativeElement;
      tdElement.id = `edit-column-td-${index}`;
    });
  }

  ngOnInit(): void {
    this.getAllUsers();
    this.subscription = this.userService.refresh$.subscribe(() => {
      this.getAllUsers();
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((data: any) => {
      this.users = data;
      if (this.users) {
        this.dataSource.data = this.users;
      } else {
        this.dataSource.data = [];
      }
      console.log("Data received from the API: ", this.users);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public updateUser(idUser: number) {
    this.displayDialogs.openUpdateUser(idUser);
  }

  public deleteUser(idUser: number) {
    this.displayDialogs.deleteUserConfirmation(idUser);
  }
}
