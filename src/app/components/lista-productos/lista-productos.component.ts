import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  // A4 
  @Input() titulot:string;
  // A7 generando input productos en este caso generico
  // es decir no voy a poner si es Oficina o Acceso....es decir siempre se va a 
  // trabajar igual  EN ESTE CASO ES UN ARRAY DE TIPO PRODUCTO (no olvidar la importacion)
  // en comphtml ya puedo definir el Input productosO y a este le pasare el array 
  // de Oficina y el array de Acceso

  @Input() productosO:Producto[]; 

  // A12 creamos el evento Output que le llamo productoSeleccionado indicando la 
  // accion que esta emitiendo el output y siempre es de tiopo EventEmitter y decrile que es
  // lo que se va a emitir en este caso va a emitir un producto completo
  @Output() productoSeleccionado:EventEmitter<Producto>;  

  constructor() { 
    // A12 inicializando creando su instancia
    this.productoSeleccionado = new EventEmitter();
    
  }

  ngOnInit(): void {
  }
  // A11 tenemso que tenre en cuenta que los dos componetnes hacen lo mismo
  // el siguiente paso es informar al padre  que componente se ha pasado se usa Output
  onClick(pProducto){
    // A13
    this.productoSeleccionado.emit(pProducto);
  }

}
