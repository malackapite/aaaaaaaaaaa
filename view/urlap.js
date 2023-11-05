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
                // console.log(Object.getOwnPropertyNames(this.#lista[kulcs]));
            }
        }
        this.formElem.append(txt+`<div class="col-12"><input class="btn btn-primary" type="submit" value="ඞ"></div>`)
        this.#validacio()
    }

    #regex(kulcs){
        // console.log(Object.getOwnPropertyNames(kulcs));
        let tmp= `${kulcs.attr.required?" required ":""}`

        switch (kulcs.type) {
            case "text": 
                tmp+= `pattern="${kulcs.attr.regex}"`
                break
            case "number":
                tmp+= `
                min="${kulcs.attr.min}"
                max="${kulcs.attr.max}"
                `
                break
            case "radio":
                tmp+= `checked="${kulcs.attr.checked}"`
                break
        }
        return tmp
    }

    #groupInput(kulcs, name){
        let tmp=``
        kulcs.value.forEach((element, ix) => {
            console.log(kulcs);
            tmp+=
            `<div class="form-check">
                <input class="form-check-input was-validated" type="${kulcs.type}" 
                    value="${element}" id="${name+element}" 
                    name="${name}" 
                    placeholder="${kulcs.placeholder}" 
                    title="${kulcs.title}"
                    ${this.#regex(kulcs)}
                    >
                <label class="form-check-label" for="${name+element}">${element}</label>
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
        <input class="form-control" type="${kulcs.type}" 
                value="${kulcs.value}" id="${name}" 
                name="${name}" 
                placeholder="${kulcs.placeholder}" 
                title="${kulcs.title}"
                ${this.#regex(kulcs)}
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