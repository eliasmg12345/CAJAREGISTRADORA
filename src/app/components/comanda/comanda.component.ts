import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  //A18 genrando un Input ...no hace falta inicializarlo porque recibe desde afuera
  //es decir ya tengo definido el inpiut ahora simplemente desde el componente.html
  //en la parte de comanda tengo que decir....A19
  @Input() arrProductoss:Producto[];

  constructor() {
  }

  ngOnInit(): void {
  }
  //A22 si me retorna un numero puedo utilizarla en el html sin problemas
  //es mas cuando modifique el array tambien se modificara este metodo
  calculaTotal(){
    //tenemos que recorrer  todos los productos e ir sumando
    let resultado=0;
      for(let p of this.arrProductoss){
        resultado +=  p.cantidad*p.cant;   //B4 aumentamos el *p.cant porque vizualice el total arriba
      } 
      
    return resultado;
  }
  //A24 haremos como las tareas simplemente en el arrProductoss hacemos que 
  //con el splice borre una sola seccion....esperando que todo se acople y acomode
  onClickBorrar(indice){
    //B5 para que borre cant por cant aumentamos el if else
    if(this.arrProductoss[indice].cant===1){
    this.arrProductoss.splice(indice,1);
    }else {
      this.arrProductoss[indice].cant--; 
    }
  }
}
