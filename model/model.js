class Model {

    static adatok(inputElemek){
        let tmp={}
        console.log(inputElemek);
        for (let ix = 0; ix < inputElemek.length-1; ix++){
            let elem=$(inputElemek[ix]).children("input").eq(0)
            tmp[elem.attr("id")] = elem.val()
        }
        return tmp
    }
}

export default Model