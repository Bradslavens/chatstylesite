
$( document).ready( function(){
    $(".answer").on("click", function(){
        var answer = $(this).attr("name");
        $.get("/answer/" + answer, function( data ){
            console.log(data.htmlString);
        });
        // var answer = $(this).attr("name");
        // console.log(htmlString);
    });
});