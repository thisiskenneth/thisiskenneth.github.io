$(document).ready(function() {
    $("#showContentButton").click(function() {
        $("#demo-content").load("GridSystem/content.html", function() {
            $("#demo-content").show(500);
        });
    });

    $("#hideContentButton").click(function() {
        $("#demo-content").hide(500);
    });
});
