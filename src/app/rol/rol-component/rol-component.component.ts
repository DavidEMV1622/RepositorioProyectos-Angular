import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/model/dataRol';

@Component({
  selector: 'app-rol-component',
  templateUrl: './rol-component.component.html',
  styleUrls: ['./rol-component.component.css']
})
export class RolComponentComponent implements OnInit{

  //7.4) Guardar los datos de "Roles" en la variable "listRoles"
  listRoles = Roles;
  ngOnInit(): void {

  }

}
