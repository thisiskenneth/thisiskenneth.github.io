$(document).ready(function() {
    $("#Button13").click(function() {
        $("#demo-content13").load("Multimedia/content13.html", function() {
            $("#demo-content13").show(500);
        });
    });

    $("#HButton13").click(function() {
        $("#demo-content13").hide(500);
    });
});
