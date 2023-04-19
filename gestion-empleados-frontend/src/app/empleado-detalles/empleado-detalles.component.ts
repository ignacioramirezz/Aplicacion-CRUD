import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.css']
})
export class EmpleadoDetallesComponent implements OnInit{

  id:number;
  empleado:Empleado;
  
  constructor(private route:ActivatedRoute, private empleadoServicio:ServicioService){};
  
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado();
    this.empleadoServicio.obtenerEmpleadoPorId(this.id).subscribe(dato => {
      this.empleado = dato;
    })
  }
  

}
