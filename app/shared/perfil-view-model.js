var config = require("../../shared/config");
var fetchModule = require("fetch");
var observableModule = require("data/observable");

var datos;


function Perfil(info){

    info = info || {};

    var viewModel = new observableModule.fromObject({
        nombre: info.nombre || "",
        edad: info.edad || "",
        actual: info.actual|| ""
    });

    console.log(viewModel.get("edad"));

    viewModel.signup = function() {
        
        
        return fetchModule.fetch( "http://192.168.100.13:8000/api/perfil", {
            method: "POST",
            body: JSON.stringify({
                nombre: viewModel.get("nombre"),
                edad: viewModel.get("edad"),
                actual: viewModel.get("actual"),
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