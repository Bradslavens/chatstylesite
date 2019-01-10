
$( document).ready( function(){
    $(".answer").on("click", function(){
        var answer = $(this).attr("name");
        $.get("/answer/" + answer).done( function( data ){
            // data.response is what  we want
            htmlString = '<div class="row">';
            htmlString += '<div class="one-half column" style="margin-top: 5%">';
            htmlString += data.response;
            htmlString += '</div>';
            htmlString += '</div>';


            $(".container").append(htmlString);
        });
        // var answer = $(this).attr("name");
        // console.log(htmlString);
    });
});