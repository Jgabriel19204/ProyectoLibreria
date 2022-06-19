import { Entity } from "./Core/Entity";

class TblCompra extends Entity{

    constructor(compra ={})
    {
        super();
        for (const prop in compra) {
            this[prop] = compra[prop];
        }
    }
    ApiMethods = {
        Get: "TblCompra"  
      }
      idcompra= "";
      fechacompra="";
      idusuario="";
      subtotalcompra= "";
      iva= "";
      descuentocompra= "";
      totalcompra= "";
      idproveedor= "";


}
export {TblCompra};