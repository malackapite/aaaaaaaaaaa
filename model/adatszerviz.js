export default class AdatSzerviz{
    getData(vegpont, callback, hiba_xd){
        return axios.get(vegpont)
            .then(function (response) {
                // handle success
                // console.log("Anongus",response);
                // console.log("Raw Amongus",response.data.nevek);
                // console.log("Role Amongus",response.status);
                // console.log("Ascii Amongus",response.statusText);
                callback(response.data)
            })
            .catch(function (error) {
                // handle error
                hiba_xd(error)
            })
            .finally(function () {
                // always executed
            });
    }

    prosData(url, callback, hiba_xd, data){
        axios.post(url, data)
        .then(response => {
            this.getData(url, callback, hiba_xd)
            console.log("RESP", response);
        })
        .catch(error => {
            console.log("hiba xd:", error);
        })
    }
}

