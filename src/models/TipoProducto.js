class TipoProducto{
    constructor(categoria,id_tipo_producto=0, nombre='',habilitada=true){
        this.id_tipo_producto=id_tipo_producto;
        this.nombre=nombre;
        this.categoria=categoria;
        this.habilitada=habilitada
    }

    getTipo(){
        const to_Json={
            "id_tipo_producto":this.id_tipo_producto,
            "nombre":this.nombre,
            "categoria":this.categoria.getCategoria(),
            "habilitada":this.habilitada ? "Habilitada" : "Desabilitada"
        }
        return to_Json
    }
}

module.exports = TipoProducto;