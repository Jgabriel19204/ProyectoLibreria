import { Entity } from "./Core/Entity";

class TblDetalleCompra extends Entity{

    constructor(detallecompra ={})
    {
        super();
        for (const prop in detallecompra) {
            this[prop] = detallecompra[prop];
        }
    }
    ApiMethods = {
        Get: "TblDetalleCompra"  
      }
      iddetallecompra= "";
      idcompra="";
      idarticulo="";
      preciocompra= "";
      cantidadcompra= "";
      descuentocompra= "";
}
export {TblDetalleCompra};