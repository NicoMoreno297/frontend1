var config = require("../../shared/config");
var fetchModule = require("fetch");
var observableModule = require("data/observable");

var datos;


function usuario(info){

    info = info || {};

    var viewModel = new observableModule.fromObject({
        mail: info.nombre || "",
        edad: info.password || ""
    });

    console.log(viewModel.get("edad"));

    viewModel.signup = function() {
        
        
        return fetchModule.fetch( config.apiUrl+"usuario", {
            method: "GET",
            body: JSON.stringify({
                nombre: viewModel.get("nombre"),
                password: viewModel.get("password")
            })
        }).then(handleErrors);
    };
    return viewModel;
}


function handleErrors(response) {
    if (!response.ok) {
        console.log(JSON.stringify(response));
        throw Error(response.statusText);
    }
    return response;
}

module.exports = Perfil;