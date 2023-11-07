import Sor from "./sor.js";

class View{
    constructor(lista, szulElem){
        this.megjelenit(lista, szulElem)
    }

    megjelenit(lista, szulElem){
        szulElem.html("<table class='table table-striped'><thead></thead><tbody></tbody></table>")
        this.fejlec(lista, szulElem)
        this.Kiir(lista, szulElem)
    }

    fejlec(lista, szulElem){
        let tmp=""
        for (const key in lista[0]) {
            if (Object.hasOwnProperty.call(lista[0], key)) {
                tmp+=`<th>${key}</th>`
            }
        }
        szulElem.children("table").eq(0).children("thead").eq(0).append("<tr class='table-dark'>"+tmp+"<th>kijelöl</th><th>mégse</th><th>töröl</th></tr>")
        
    }

    Kiir(lista, szulElem){
        lista.forEach((elem, ix) => {
            new Sor(elem, szulElem.children("table").eq(0).children("tbody").eq(0), ix)
        }); 
    }
}

export default View