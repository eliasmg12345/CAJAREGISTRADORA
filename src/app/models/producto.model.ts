// 1A creamos el modelo
// genero la calse que va a representar a cada uno de los productos
// luego creamos los componentes en la terminal lista y comanda 
export class Producto{
    // le pongo sus propiedades
    nombre:string;
    imgUrl:string;
    cantidad:number;

    //B1 haremos que al seleccionar no se apilen los valores en la visualizacion
    //creamos cant y la incializamos con cero
    //vamos a component.ts B2
    cant:number;

    constructor(pNombre:string,pimgUrl:string,pCantidad:number){
        this.nombre=pNombre;
        this.imgUrl=pimgUrl;
        this.cantidad=pCantidad;
        this.cant=0;
    }
}