
$( document).ready( function(){
    'use strict';

    $(".container").on("click", ".answer", function(event){
        var answer = $(this).html();
        $.get("/answer/" + answer).done( function( data ){
            // data.response is what  we want
            let htmlString = ''
            htmlString += '<div class="row">';
            htmlString += '<div class="one-half column" style="margin-top: 5%">';
            htmlString += data.response;
            htmlString += data.responseInput;
            htmlString += '</div>';
            htmlString += '</div>';

            $(".container").append(htmlString);

            // now scroll down
            let $this = $(event.target)
            let $row = $this.parents('.row')
            let param = $row
            .nextAll()
            .offset()
            .top;

            // stop current and animate
            $('html, body')
                .stop()
                .animate(
                    {
                        scrollTop: param
                    },
                    500
                );
        });
        
    });
});