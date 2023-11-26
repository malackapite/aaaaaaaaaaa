class urlap{
    #lista
    constructor(lista, szuloElem){
        this.#lista=lista
        this.szuloElem=szuloElem
        this.szuloElem.append(`<form action="#" method="get" class="row g-3 needs-validation" novalidate>`)
        this.formElem=this.szuloElem.children("form")
        this.#火艸工女人耳女一糸工一鳥口火()
    }

    #火艸工女人耳女一糸工一鳥口火(){
        let txt=""
        for (const kulcs in this.#lista) {
            if (Object.hasOwnProperty.call(this.#lista, kulcs)) {
                txt+=
                `<div class="col-md-4">
                    ${Array.isArray(this.#lista[kulcs].value)
                        ?this.#groupInput(this.#lista[kulcs], kulcs)
                        :this.#simaInput(this.#lista[kulcs], kulcs)}
                </div>`
            }
        }
        this.formElem.append(txt+`<div class="col-12"><input class="btn btn-primary" type="submit" value="ඞ"></div>`)
        
        this.#validacio()

        console.log($("#input:last"));
        $("input").last().submit(false);
        $(document).on('submit', '#input', event => {
            event.preventDefault();
            this.#edit()
        });

    }

    #edit(){
        window.dispatchEvent(new CustomEvent("edit", {detail:this}))
    }

    static #regex(kulcs){
        let tmp= `${kulcs.attr.required?" required ":""}`

        switch (kulcs.type) {
            case "text": 
                tmp+= `pattern="${kulcs.attr.regex}"`
                break
            case "number", "date":
                tmp+= `
                min="${kulcs.attr.min}"
                max="${kulcs.attr.max}"
                `
                break
            // case "radio":
            //     tmp+= `checked="${kulcs.attr.checked}"`
            //     break
        }
        return tmp
    }

    static attrMeghatarozo(kulcs, name){
        return `type="${kulcs.type}" 
                value="${kulcs.ix===undefined
                    ?kulcs.value
                    :kulcs.value[kulcs.ix]}"
                id="${name+(kulcs.ix===undefined?"":kulcs.ix)}" 
                name="${name}" 
                placeholder="${kulcs.placeholder}" 
                title="${kulcs.title}"
                ${urlap.#regex(kulcs)}`
    }

    #groupInput(kulcs, name){
        let tmp=`<label>${kulcs.name}</label>`
        kulcs.value.forEach((element, ix) => {
            kulcs['ix']=ix
            tmp+=
            `<div class="form-check">
                <input class="form-check-input was-validated" ${urlap.attrMeghatarozo(kulcs, name)}
                    >
                <label class="form-check-label" for="${name+ix}">${element}</label>
                ${
                    ix === kulcs.value.length-1
                    ?
                        kulcs.jo !== undefined
                        ?
                        `<div class="valid-feedback">
                            ${kulcs.jo}
                        </div>`
                        :""
                        
                        +
                        
                        kulcs.rossz !== undefined
                        ?
                        `<div class="invalid-feedback">
                            ${kulcs.rossz}
                        </div>`
                        :""
                    :""
                }

            </div>`
        });
        return tmp
    }

    #simaInput(kulcs, name){
        return `<label class="form-label" for="${name}">${kulcs.name}</label>
        <input class="form-control" ${urlap.attrMeghatarozo(kulcs, name)}
                >
                
        <div class="valid-feedback">
            ${kulcs.jo}
        </div>
        <div class="invalid-feedback">
            ${kulcs.rossz}
        </div>`
    }

    #validacio(){
        // bootstrap validation
        // https://getbootstrap.com/docs/5.0/forms/validation/

        (function () {
            'use strict'
        
            var forms = document.querySelectorAll('.needs-validation')
        
            Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
        
                form.classList.add('was-validated')
                }, false)
            })
        })()
    }
}

export default urlap