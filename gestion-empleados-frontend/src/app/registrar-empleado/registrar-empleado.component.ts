import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit{

  empleado : Empleado = new Empleado();
  
  constructor(private empleadoServicio:ServicioService,private router:Router){}

  ngOnInit(): void {
  
  }


  guardarEmpleado(){
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato =>{
      console.log(dato);
      this.irALaListaDeEmpleados()
    },error => console.log(error));
  }


  //ir a la lista 
  irALaListaDeEmpleados(){
    this.router.navigate(['/empleados'])
  }

  onSubmit() : void{
    this.guardarEmpleado();
  }
}
