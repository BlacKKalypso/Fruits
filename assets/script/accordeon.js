$(document).ready(function() {
    $("li").click(function (){
        $(this).siblings().removeClass("active");
        $(this).siblings().find(".info").slideUp( "slow" );
        
        $(this).toggleClass("active");
        $(this).find(".info").slideToggle( "slow" );

    });
});