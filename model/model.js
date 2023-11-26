class Model {

    static adatok(inputElemek){
        let tmp={}
        // console.log(inputElemek);
        for (let ix = 0; ix < inputElemek.length-1; ix++){
            console.log(!$(inputElemek[ix]).children('.form-check').toArray().length);
            let elem
            if(!$(inputElemek[ix]).children('.form-check').toArray().length){
                elem=$(inputElemek[ix]).children("input").eq(0)
                tmp[elem.attr("name")] = elem.val()
            }
            else{
                let a=$(inputElemek[ix]).find('.form-check > input:checked').toArray()
                // console.log(a);
                // console.log($(inputElemek[ix]).find('.form-check > input:checked'));
                let xd=[]
                a.forEach(element => {
                    xd.push($(element).val())
                });
                // console.log('a', xd);
                tmp[$(a[0]).attr("name")] = xd.toString()
            }
                //elem=$(inputElemek[ix]).children('.form-check')
            //tmp[elem.attr("name")] = elem.val()
        }
        return tmp
    }
}

export default Model