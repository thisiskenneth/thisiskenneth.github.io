$(document).ready(function() {
    $("#Button7").click(function() {
        $("#demo-content7").load("Formularios/content7.html", function() {
            $("#demo-content7").show(500);
        });
    });

    $("#HButton7").click(function() {
        $("#demo-content7").hide(500);
    });
});
