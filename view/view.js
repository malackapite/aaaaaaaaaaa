import Sor from "./sor.js";

class View{
    constructor(adatok, szulElem){
        console.log(adatok);
        if(adatok.constructor === Array)
            this.megjelenit(adatok, szulElem)
        else this.megjelenit(adatok.adatok, szulElem, adatok.input)
    }

    megjelenit(lista, szulElem, inputLista){
        console.log(lista);
        szulElem.html("<table class='table table-striped'><thead></thead><tbody></tbody></table>")
        this.fejlec(lista, szulElem)
        this.Kiir(lista, szulElem, inputLista)
    }

    fejlec(lista, szulElem){
        let tmp=""
        for (const key in lista[0]) {
            if (Object.hasOwnProperty.call(lista[0], key)) {
                tmp+=`<th>${key}</th>`
            }
        }
        szulElem.children("table").eq(0).children("thead").eq(0).append("<tr class='table-dark'>"+tmp+"<th>mentés</th><th>módosít</th><th>töröl</th></tr>")
        
    }

    Kiir(lista, szulElem, inputLista){
        lista.forEach((elem, ix) => {
            new Sor(elem, szulElem.children("table").eq(0).children("tbody").eq(0), ix, inputLista)
        }); 
    }
}

export default View