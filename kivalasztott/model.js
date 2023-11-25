class Model {
    
    #list=[]
    
    constructor(){
        let tmp = localStorage.getItem("IDs").split(",")
        this.#list= tmp[0]=== ""?[]:tmp 
    }

    get lista(){
        return this.#list
    }
}

export default Model