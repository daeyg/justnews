/**
 * Created by DUAL- on 5/17/2016.
 */

$(document).ready(function () {
    $('nav a.mobile_menu').on('click', function () {
        var currentNavHeight = $('nav').height();
        if(currentNavHeight <5){
            var newNavHeight = $('nav > ul').height() + 15;
            $('nav').animate({'height': newNavHeight + 'px'}, 750);


        }else {
            $('nav').animate({'height': '0px'}, 750);
        }


    });
    
});

$(document).ready(function () {
    $("#clickMe").click(function () {
        
        $("img").fadeIn(1000)
        $("#pic_frame").slideToggle("slow");
    })
})

