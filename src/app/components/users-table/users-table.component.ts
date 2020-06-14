import {AfterViewInit, Component, OnInit,} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {TableUsers} from '../../interfaces/users-table.interface';
import {UsersService} from '../../services/users/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})

export class UsersTableComponent implements AfterViewInit, OnInit {
  tableUsers: TableUsers[] = [];
  dataSource = new MatTableDataSource(this.tableUsers);

  constructor(
    private usersService: UsersService
  ) {
  }

  displayedColumns: string[] = ['id', 'name', 'username', 'city', 'website', 'actions'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // filtrowanie tablicy IAddresApi

    this.dataSource.filterPredicate = (data: any, filter) => {
      const dataStr = JSON.stringify(data).toLowerCase();
      return dataStr.indexOf(filter) !== -1;
    };
  }

  removeUser(item) {
    const index = this.dataSource.data.indexOf(item);
    this.dataSource.data.splice(index, 1);
    this.dataSource._updateChangeSubscription();
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe((users) => {
      this.tableUsers = users;
      console.log(this.tableUsers);
      this.dataSource.data = this.tableUsers;
    });
  }

  ngAfterViewInit() {
  }
}
