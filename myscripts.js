
$( document).ready( function(){
    $(".container").on("click", ".answer", function(){
        var answer = $(this).html();
        $.get("/answer/" + answer).done( function( data ){
            // data.response is what  we want
            htmlString = '<div class="row">';
            htmlString += '<div class="one-half column" style="margin-top: 5%">';
            htmlString += data.response;
            htmlString += data.responseInput;
            htmlString += '</div>';
            htmlString += '</div>';
            console.log(htmlString);
            $(".container").append(htmlString);
        });
        // var answer = $(this).attr("name");
        // console.log(htmlString);
    });
});