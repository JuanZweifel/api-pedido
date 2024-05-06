class Categoria{
    constructor(id_categoria=0, nombre='',habilitada=true){
        this.id_categoria=id_categoria;
        this.nombre=nombre;
        this.habilitada=habilitada
    }

    getCategoria(){
        const to_Json={
            "id_categoria":this.id_categoria,
            "nombre":this.nombre,
            "habilitada":this.habilitada ? "Habilitada" : "Desabilitada"
        }
        return to_Json
    }
}

module.exports = Categoria;