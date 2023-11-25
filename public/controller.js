import AdatSzerviz from "../model/adatszerviz.js";
import Hiba_xd from "../view/hiba_xd.js";
import Model from "./model.js";
import View from "./view.js";


class Controller {

    constructor() {
        this.adatSzerviz = new AdatSzerviz()
        this.model= new Model()

        this.adatSzerviz.getData("http://localhost:8000/api/macskak", this.megjelenit, this.hiba_xd, this.model.lista)
    
        $(window).on("kivalaszt", event =>{
            this.model.add(event.detail)
        })

        $(window).on("torol", event =>{
            this.model.remove(event.detail)
        })
    }

    megjelenit(lista, args) {
        let view = new View(lista, $("#kartya"))
        view.buttonMeghataroz(args[3])
    }

    hiba_xd(error) {
        new Hiba_xd(error, $("#kartya"))
    }
}

export default Controller