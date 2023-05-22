import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiVentasService } from 'src/app/service/api-ventas.service';

@Component({
  selector: 'app-form-venta',
  templateUrl: './form-venta.component.html',
  styleUrls: ['./form-venta.component.css']
})
export class FormVentaComponent implements OnInit {
  title: string= "Registrar venta"

  ventaForm = new FormGroup({
    id_venta: new FormControl(''),
    fecha_ventas: new FormControl(''),
    monto_ventas: new FormControl('')
  });

  constructor(private api:ApiVentasService, private router: Router) {}

  ngOnInit(): void {
    
  }

  addVenta(): void{
    let venta = {
      id_venta: this.ventaForm.get('id_venta')?.value,
      fecha_ventas: this.ventaForm.get('fecha_ventas')?.value,
      monto_ventas: this.ventaForm.get('monto_ventas')?.value
    }

    this.api.postCrearVenta(venta).subscribe (respuesta => {
      console.log("@@@@@@@ ", respuesta);

      if (respuesta.status === "ok") {
        alert ("Registro exitoso");
        this.router.navigate(['tablaPersona']);
      
      } else {
        alert("Registro fallido")
      }
    });
  }
}
