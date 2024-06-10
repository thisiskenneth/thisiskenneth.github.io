$(document).ready(function() {
    $("#Button6").click(function() {
        $("#demo-content6").load("Botones/content6.html", function() {
            $("#demo-content6").show(500);
        });
    });

    $("#HButton6").click(function() {
        $("#demo-content6").hide(500);
    });
});
