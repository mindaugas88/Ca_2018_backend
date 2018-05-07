


$("#registre").click(function(){
    let vardas = $("#vardas").val();
    let pavarde = $("#pavarde").val();
    let maistas = $("#maistas").val();


    $("table tbody").append("<tr><td>" + vardas + "</td></tr>" + "<tr><td>" + pavarde + "</td></tr>" + "<tr><td>" + maistas + "</td></tr>");
    console.log(vardas);
});
