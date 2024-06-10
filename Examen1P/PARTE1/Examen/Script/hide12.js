$(document).ready(function() {
    $("#Button12").click(function() {
        $("#demo-content12").load("Multimedia/content12.html", function() {
            $("#demo-content12").show(500);
        });
    });

    $("#HButton12").click(function() {
        $("#demo-content12").hide(500);
    });
});
