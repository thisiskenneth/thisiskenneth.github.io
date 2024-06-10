$(document).ready(function() {
    $("#ShoContentButton").click(function() {
        $("#demo-content4").load("Botones/content4.html", function() {
            $("#demo-content4").show(500);
        });
    });

    $("#HidContentButton").click(function() {
        $("#demo-content4").hide(500);
    });
});
