class Producto {
    constructor(detalle_sucursal, tipo_producto, id_producto=0,precio=0,modelo='',marca='',disponibilidad=false){
        this.id_producto=id_producto;
        this.precio=precio;
        this.modelo=modelo;
        this.marca=marca;
        this.tipo_producto=tipo_producto;
        this.detalle_sucursal=detalle_sucursal;

        this.disponibilidad=disponibilidad;
    }


    getProducto(){
        const to_Json={
            "id_producto":this.id_producto,
            "precio":this.precio,
            "modelo":this.modelo,
            "marca":this.marca,
            "disponibilidad":this.disponibilidad ? "Disponible" : "No disponible",
            "detalle_sucursal":this.detalle_sucursal.getDetalleSucursal(),
            "tipo_producto":this.tipo_producto.getTipo()
        }
        return to_Json
    }

}

module.exports = Producto;