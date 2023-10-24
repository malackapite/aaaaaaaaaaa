import Sor from "./sor.js";

class View{
    constructor(lista, szulElem){
        this.megjelenit(lista.nevek, szulElem)
    }

    megjelenit(lista, szulElem){
        szulElem.html("<table class='table table-striped-columns'><thead></thead><tbody></tbody></table>")
            this.Kiir(lista, szulElem)
    }

    Kiir(lista, szulElem){
        lista.forEach((elem, ix) => {
            new Sor(elem, szulElem.children("table").eq(0).children("tbody").eq(0), ix)
        }); 
    }
}

export default View