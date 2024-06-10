$(document).ready(function() {
    $("#Button5").click(function() {
        $("#demo-content5").load("Botones/content5.html", function() {
            $("#demo-content5").show(500);
        });
    });

    $("#HButton5").click(function() {
        $("#demo-content5").hide(500);
    });
});
