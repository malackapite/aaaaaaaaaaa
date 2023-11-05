import AdatSzerviz from "../model/adatszerviz.js"
import Model from "../model/model.js";
import Hiba_xd from "../view/hiba_xd.js";
import View from "../view/view.js";
import urlap from "../view/urlap.js";

class Controller {

    MODEL
    constructor() {
        
        let szuloELEM = $("#lista")
        this.adatSzerviz = new AdatSzerviz()
        this.adatSzerviz.getData("../adat.json", this.megjelenit, this.hiba_xd)
        this.adatSzerviz.getData("../input.json", this.inputMegjelenit, this.hiba_xd)

        $(window).on("torol", event => {
            szuloELEM.empty()
            this.adatSzerviz.getData("../adat.json", this.megjelenit, this.hiba_xd)
        })

        $(window).on("check", event => {
            szuloELEM.empty()
            this.adatSzerviz.getData("../adat.json", this.megjelenit, this.hiba_xd)
        })

        $(window).on("megse", event => {
            szuloELEM.empty()
            this.adatSzerviz.getData("../adat.json", this.megjelenit, this.hiba_xd)
        })

        $(window).on("ujadat", event => {
            szuloELEM.empty()
            this.adatSzerviz.getData("../adat.json", this.megjelenit, this.hiba_xd)
        })
    }

    megjelenit(lista) {
        // console.log("gaming");
        new View(lista, $("#lista"))
    }

    inputMegjelenit(lista) {
        new urlap(lista, $("#input"))
    }

    hiba_xd(error) {
        // console.log("xd");
        new Hiba_xd(error, $("#lista"))
    }
}

export default Controller