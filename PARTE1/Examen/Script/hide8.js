$(document).ready(function() {
    $("#Button8").click(function() {
        $("#demo-content8").load("Tabla/content8.html", function() {
            $("#demo-content8").show(500);
        });
    });

    $("#HButton8").click(function() {
        $("#demo-content8").hide(500);
    });
});
