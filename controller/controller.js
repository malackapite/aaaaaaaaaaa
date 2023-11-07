import AdatSzerviz from "../model/adatszerviz.js"
import Hiba_xd from "../view/hiba_xd.js";
import View from "../view/view.js";
import urlap from "../view/urlap.js";

class Controller {

    constructor() {
        
        let szuloELEM = $("#lista")
        this.adatSzerviz = new AdatSzerviz()
        
        this.adatSzerviz.getData("http://localhost:8000/api/macskak", this.megjelenit, this.hiba_xd)
        this.adatSzerviz.getData("../macskaInput.json", this.inputMegjelenit, this.hiba_xd)

        $(window).on("edit", event =>{
            console.log($("input").eq(0).val());
            this.adatSzerviz.prosData("http://localhost:8000/api/macskak", this.megjelenit, this.hiba_xd, {"nev":$("input").eq(0).val(), "szul": $("input").eq(1).val()})
        })
        // $(window).on("torol", event => {
        //     szuloELEM.empty()
        //     this.adatSzerviz.getData("../adat.json", this.megjelenit, this.hiba_xd)
        // })

        // $(window).on("check", event => {
        //     szuloELEM.empty()
        //     this.adatSzerviz.getData("../adat.json", this.megjelenit, this.hiba_xd)
        // })

        // $(window).on("megse", event => {
        //     szuloELEM.empty()
        //     this.adatSzerviz.getData("../adat.json", this.megjelenit, this.hiba_xd)
        // })

        // $(window).on("ujadat", event => {
        //     szuloELEM.empty()
        //     this.adatSzerviz.getData("../adat.json", this.megjelenit, this.hiba_xd)
        // })
    }

    megjelenit(lista) {
        new View(lista, $("#lista"))
    }

    inputMegjelenit(lista) {
        new urlap(lista, $("#input"))
    }

    hiba_xd(error) {
        new Hiba_xd(error, $("#lista"))
    }
}

export default Controller