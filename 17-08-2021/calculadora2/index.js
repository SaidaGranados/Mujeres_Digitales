      

var temporal = "";
var concatenar = function(valor){
    temporal = temporal + valor
    console.log(temporal)            
    document.getElementById('resultado').value = temporal
}

var borrar = function(){
    temporal = ""
    document.getElementById('resultado').value = ""
}

var evaluar = function(){
    temporal = eval(temporal)
    document.getElementById('resultado').value =  temporal
}



