$(document).ready(function() {
    $("#Button10").click(function() {
        $("#demo-content10").load("Modal/content10.html", function() {
            $("#demo-content10").show(500);
        });
    });

    $("#HButton10").click(function() {
        $("#demo-content10").hide(500);
    });
});
