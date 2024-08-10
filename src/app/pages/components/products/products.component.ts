import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Productos } from '../../../models/Producto';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatButtonModule,MatTableModule,MatIconModule,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  displayedColumns: string[] = ['id', 'nombre', 'precio', 'categoria','acciones'];

  lista:Productos[]=[];

  constructor(private productosSrv:ProductsService){}


  ngOnInit(){

    this.productosSrv.getProducts().subscribe((datos)=>{

      this.lista=datos;

      console.log(...datos);
    })
  }

  verDetalle(){
    alert('aqui en el detalle del producto...');
  }

  crear(){
  
  }
  modificar(producto:Productos){
    alert(producto.nombre)

  
  }
  eliminar(id:number){
    alert(id)
  
  }
  consultar(producto:Productos){
    alert(producto.nombre)
  
  }
}
