import AdatSzerviz from "../model/adatszerviz.js";
import Hiba_xd from "../view/hiba_xd.js";
import Model from "./model.js";
import View from "./view.js";


class Controller {

    constructor() {
        this.adatSzerviz = new AdatSzerviz()
        this.model= new Model()

        console.log(this.model.lista.toString());
        this.adatSzerviz.getData("http://localhost:8000/api/macskak/kivalasztott/"+this.model.lista.toString(), this.megjelenit, this.hiba_xd, this.model.lista)

    }

    megjelenit(lista) {
        console.log(lista);
        new View(lista, $("#kartya"))
    }

    hiba_xd(error) {
        new Hiba_xd(error, $("#kartya"))
    }
}

export default Controller