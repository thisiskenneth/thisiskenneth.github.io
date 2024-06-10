$(document).ready(function() {
    $("#Button11").click(function() {
        $("#demo-content11").load("Multimedia/content11.html", function() {
            $("#demo-content11").show(500);
        });
    });

    $("#HButton11").click(function() {
        $("#demo-content11").hide(500);
    });
});
