import { Entity } from "./Core/Entity";

class TblArticulos extends Entity   {
	constructor(articulo = {}){
		super();
		for (const prop in articulo) {
			this[prop] = articulo[prop];
		}
	}
	ApiMethods = {
        Get: "TblArticulos"  
      }
	idarticulo = "";
	nombrearticulo = "";
	descripcionarticulo = "";
	idcategoria = "";
	idmarca = "";

	//   TblBloqueCurso ={
	//   	val: [],
	//    	get: async()=> {
	//  		if (this.IdCurso != "") {
	//   			const Bloques = new TblBloqueCurso();
	//   			return await Bloques.GetByProps("IdCurso", this.IdCurso); 
	//   		} else{
	//   			return this.TblBloqueCurso.val
	//   		}
	//   	},
	//   	set:(newValue)=> {
	//   		this.val = newValue;
	//   	}
	//   }


	//  Get = async (param) => {
	//  	const Articulos = await import("../APIDatabase/TblArticulo.json");
	//  	const ArticuloFilt = Articulos.default.filter((c) =>
	//  		c.nombrearticulo.toUpperCase().includes(param.toUpperCase())
	// 	);
	// return ArticuloFilt.map((c) => new TblArticulos(c));
	//  }
}
export { TblArticulos };
