class Model {
    
    #list=[]
    
    constructor(){
        let tmp = localStorage.getItem("IDs") !== null? localStorage.getItem("IDs").split(","):[]
        this.#list= tmp[0]=== ""?[]:tmp 
    }
    
    add(elem){
        this.#list.push(elem)
        localStorage.setItem("IDs", this.#list.toString())
    }

    remove(elem){
        this.#list = this.#list.filter(item => item != elem)
        console.log(this.#list);
        localStorage.setItem("IDs",  this.#list.toString())
    }

    get lista(){
        return this.#list
    }
}

export default Model