import { ViewChild, Component, OnInit, OnDestroy, ElementRef, ViewChildren, QueryList } from "@angular/core";
import { RoleService } from "../../service/role.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { RolesInterface } from "../../interface/roles.interface";
import { DisplayDialogs } from "src/app/shared/display-dialogs/display-dialogs";
import { Subscription } from "rxjs";

@Component({
  selector: "app-role-list-component",
  templateUrl: "./role-list-component.component.html",
  styleUrls: ["./role-list-component.component.css"],
})
export class RoleListComponentComponent implements OnInit, OnDestroy {
  subscription?: Subscription;

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChildren('deleteColumn') deleteColumn?: QueryList<ElementRef>;
  @ViewChildren('editColumn') editColumn?: QueryList<ElementRef>;
  roles?: RolesInterface[];
  displayedColumns: string[] = [
    "idRole",
    "name",
    "description",
    "active",
    "edit",
    "delete",
  ];
  dataSource: MatTableDataSource<RolesInterface>;
  constructor(
    private roleService: RoleService,
    public displayDialogs: DisplayDialogs
  ) {
    this.dataSource = new MatTableDataSource<RolesInterface>([]);
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
    this.getAllRoles();
    this.subscription = this.roleService.refresh$.subscribe(() => {
      this.getAllRoles();
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  getAllRoles() {
    this.roleService.getAllRoles().subscribe((data: any) => {
      this.roles = data;
      if (this.roles) {
        this.dataSource.data = this.roles;
      } else {
        this.dataSource.data = [];
      }
      console.log("Data received from the API: ", this.roles);
    });
  }

  public DeleteRole(idRoles: number) {
    this.displayDialogs.deleteRoleConfirmation(idRoles);
  }

  public openUpdateRole(idRoles: number) {
    this.displayDialogs.openUpdateRole(idRoles);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
