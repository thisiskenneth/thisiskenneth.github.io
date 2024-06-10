$(document).ready(function() {
    $("#SContentButton").click(function() {
        $("#demo-content2").load("GridSystem/content2.html", function() {
            $("#demo-content2").show(500);
        });
    });

    $("#HContentButton").click(function() {
        $("#demo-content2").hide(500);
    });
});
