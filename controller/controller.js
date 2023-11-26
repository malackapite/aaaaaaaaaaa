import AdatSzerviz from "../model/adatszerviz.js"
import Hiba_xd from "../view/hiba_xd.js";
import View from "../view/view.js";
import urlap from "../view/urlap.js";
import Model from "../model/model.js";

class Controller {

    constructor() {
        
        let szuloELEM = $("#lista")
        this.adatSzerviz = new AdatSzerviz()
        
        //mivel a táblázatnak is tudnia kell az inputokról és nem akarjuk, hogy a view kommunikáljon a modellel, ezért az inputokat is átadjuk a viewnak
        this.adatSzerviz.datAll(["http://localhost:8000/api/macskak","../admin/macskaInput.json"], this.megjelenit, this.hiba_xd)
        // this.adatSzerviz.getData("http://localhost:8000/api/macskak", this.megjelenit, this.hiba_xd)
        this.adatSzerviz.getData("../admin/macskaInput.json", this.inputMegjelenit, this.hiba_xd)

        $(window).on("edit", event =>{
            this.adatSzerviz.prosData("http://localhost:8000/api/macskak", this.megjelenit, this.hiba_xd, Model.adatok($("#input > form").children()))
        })
        $(window).on("torol", event => {
            szuloELEM.empty()
            this.adatSzerviz.delTa("http://localhost:8000/api/macskak", this.megjelenit, this.hiba_xd, event.detail)
        })

        $(window).on("kuldes", event => {
            szuloELEM.empty()
            this.adatSzerviz.putinData("http://localhost:8000/api/macskak", this.megjelenit, this.hiba_xd, event.detail)
        })
        
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