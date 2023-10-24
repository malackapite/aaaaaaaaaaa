class Model {
    #list=[]

    constructor(lista){
        console.log(lista);
        lista.forEach(element => {
            element.kesz=false
        });
        this.#list=lista
    }

    get list(){
        return this.#list;
    }

    torol(nth){
        TODOLIST2.splice(nth, 1)
    }

    check(nth){
        TODOLIST2[nth].kesz=true
    }
    megse(nth){
        TODOLIST2[nth].kesz=false
    }

    adatok(adatok){
        TODOLIST2.push(adatok)
    }
}

export default Model