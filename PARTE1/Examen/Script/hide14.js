$(document).ready(function() {
    $("#Button14").click(function() {
        $("#demo-content14").load("Multimedia/content14.html", function() {
            $("#demo-content14").show(500);
        });
    });

    $("#HButton14").click(function() {
        $("#demo-content14").hide(500);
    });
});
