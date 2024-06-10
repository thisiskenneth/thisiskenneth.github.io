$(document).ready(function() {
    $("#ShContentButton").click(function() {
        $("#demo-content3").load("GridSystem/content3.html", function() {
            $("#demo-content3").show(500);
        });
    });

    $("#HiContentButton").click(function() {
        $("#demo-content3").hide(500);
    });
});
