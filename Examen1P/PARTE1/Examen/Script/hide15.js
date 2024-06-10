$(document).ready(function() {
    $("#Button15").click(function() {
        $("#demo-content15").load("Multimedia/content15.html", function() {
            $("#demo-content15").show(500);
        });
    });

    $("#HButton15").click(function() {
        $("#demo-content15").hide(500);
    });
});
