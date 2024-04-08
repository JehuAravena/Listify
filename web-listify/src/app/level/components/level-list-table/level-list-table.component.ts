import { Component, OnInit, ViewChild } from '@angular/core';
import { Level } from '../../interface/level-interface';
import { LevelService } from '../../service/level.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DisplayDialogs } from 'src/app/shared/display-dialogs/display-dialogs';

@Component({
  selector: 'app-level-list-table',
  templateUrl: './level-list-table.component.html',
  styleUrls: ['./level-list-table.component.css']
})
export class LevelListTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  levels?: Level[];
  displayedColumns: string[] = [
    'idLevel', 
    'experience',
    'name'
  ];
  dataSource: MatTableDataSource<Level>;

  constructor(private levelService: LevelService,
              public displayDialogs: DisplayDialogs) {
    this.dataSource = new MatTableDataSource<Level>([]);
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
    this.levelService.getAllLevels().subscribe((data: any) => {
      this.levels = data;
      if (this.levels) {
        this.dataSource.data = this.levels;
      } else {
        this.dataSource.data = [];
      }
      console.log("Data received from the API: ", this.levels);
    })
  }

  applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	
		if (this.dataSource.paginator) {
		  this.dataSource.paginator.firstPage();
		}
	}
}
