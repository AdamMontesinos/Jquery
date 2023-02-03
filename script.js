let projectes;
let i=3;

//1. Crea una funció que llegeixi tots els projectes de l'arxiu data/projectes.json
$.get("data/data.json", function(data){
    alert("Data: " + data);
    console.log(data.projectes);

    projectes = data.projectes;
    mostrarProjecte();
});

//2. Fes una funció que mostri la informació a la pantalla
function mostrarProjecte(){
    console.log(projectes[i].img);
    $("#projecteContainer img").attr("src", projectes[i].img);
    if(projectes[i].position=="center"){
        let fwidth = calcWidth(projectes[i].mida);
        $("#projecteContainer img").css("width", fwidth + "%");
    }

    $(":root").css({
        "--colorFons": projectes[i].colorFons,
        "--colorLletres":
          projectes[i].colorFons === "#ffffff" ? "#000000" : "#ffffff",
      });
}

//Funció per calcular l'amplada en el cas que la posició sigui center
function calcWidth(width){
    let partimos = width.split("/");
    let division = partimos[0] / partimos[1];
    let fwidth = division * 100;
    console.log(fwidth);
    return fwidth;
}