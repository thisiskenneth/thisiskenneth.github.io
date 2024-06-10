$(document).ready(function() {
    $("#Button9").click(function() {
        $("#demo-content9").load("NavBar/content9.html", function() {
            $("#demo-content9").show(500);
        });
    });

    $("#HButton9").click(function() {
        $("#demo-content9").hide(500);
    });
});
