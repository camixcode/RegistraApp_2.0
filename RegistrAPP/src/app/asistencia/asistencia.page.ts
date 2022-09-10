import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  Dia: number;
  Curso: string;
  PorcAsistencia: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {Dia: 1, Curso: 'Hydrogen', PorcAsistencia: 'H'},
  {Dia: 2, Curso: 'Helium', PorcAsistencia: 'He'},
  {Dia: 3, Curso: 'Lithium', PorcAsistencia: 'Li'},
  {Dia: 4, Curso: 'Beryllium', PorcAsistencia: 'Be'},
  {Dia: 5, Curso: 'Boron', PorcAsistencia: 'B'},
  {Dia: 6, Curso: 'Carbon', PorcAsistencia: 'C'},
  {Dia: 7, Curso: 'Nitrogen', PorcAsistencia: 'N'},
  {Dia: 8, Curso: 'Oxygen', PorcAsistencia: 'O'},
  {Dia: 9, Curso: 'Fluorine', PorcAsistencia: 'F'},
  {Dia: 10, Curso: 'Neon', PorcAsistencia: 'Ne'},
];
@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})

export class AsistenciaPage implements OnInit {

  displayedColumns: string[] = ['Dia', 'Curso', 'PorcAsistencia'];
  dataSource = new MatTableDataSource <PeriodicElement> (ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator! : MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit() {
  }

}
function ngAfterViewInit() {
  throw new Error('Function not implemented.');
}

