import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  listEmpleados: Empleado[]=[
    { legajo:1, nombre:'juan', apellido:'Perez', sexo:'Masculino', salario:25000},
    { legajo:2, nombre:'Mariela', apellido:'Augus', sexo:'Femenino', salario:35000},
    { legajo:3, nombre:'Roberto', apellido:'Lopez', sexo:'Masculino', salario:40000},
    { legajo:4, nombre:'Miguel', apellido:'Aurio', sexo:'Masculino', salario:50000},
    { legajo:5, nombre:'Sebastian', apellido:'Sabiens', sexo:'Masculino', salario:80000},
    { legajo:6, nombre:'Ana', apellido:'Laddy', sexo:'Femenino', salario:75000},
  ]

  radioButtonSeleccionado='Todos';

  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotalEmpleados(): number{
    return this.listEmpleados.length;
  }

  obtenerTotalFemeninos(): number{
    return this.listEmpleados.filter(list => list.sexo === 'Femenino').length
  }


  obtenerTotalMasculinos(): number{
    return this.listEmpleados.filter(list => list.sexo === 'Masculino').length
  }
}
