// 1A creamos el modelo
// genero la calse que va a representar a cada uno de los productos
// luego creamos los componentes en la terminal lista y comanda 
export class Producto{
    // le pongo sus propiedades
    nombre:string;
    imgUrl:string;
    cantidad:number;
    constructor(pNombre:string,pimgUrl:string,pCantidad:number){
        this.nombre=pNombre;
        this.imgUrl=pimgUrl;
        this.cantidad=pCantidad;
    }
}