class View{
    
    #lista
    constructor(lista, szulElem){
        this.#lista=lista
        this.megjelenit(szulElem)
    }

    megjelenit(szulElem){
        let tmp=""
        this.#lista.forEach(elem => {
            tmp=`<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${Object.values(elem)[1]}</h5>`

            for (const key in elem) {
                if (Object.hasOwnProperty.call(elem, key) && !(
                    key == "id" || key == "created_at" || key == "updated_at" || key == Object.keys(elem)[1] 
                )) {
                    tmp+=`<h6 class="card-subtitle mb-2 text-body-secondary">${key}: ${elem[key]}</h6>`
                }
            }

            tmp+=`</div>
            </div>`
            szulElem.append(tmp)
        });
    }
}

export default View