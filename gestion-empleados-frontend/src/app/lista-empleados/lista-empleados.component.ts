import { Component, OnInit } from '@angular/core';
import { Empleado } from './../empleado';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit{

  empleados:Empleado[]; // es public aunque no se haya puesto de forma explicita la palabra reservada


  constructor(private empleadoServicio:ServicioService,private router:Router){}

  ngOnInit(): void {
    this.obtenerEmpleados();
  // esto se dispara cuando se inicializa
  }

  actualizarEmpleado(id:number){
    this.router.navigate(['actualizar-empleado',id]);
  }

  eliminarEmpleado(id:number){
    this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
      console.log(dato);
      this.obtenerEmpleados();
    });
  }

  private obtenerEmpleados(){
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(dato => {
        this.empleados = dato;
    });
  }

  verDetallesDelEmpleado(id:number){
    this.router.navigate(['empleado-detalles',id])
  }
}
