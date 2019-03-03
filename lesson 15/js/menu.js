$('.menu-icon').on("click", function (event) {
    if (event.target.style.left==="320px"){
    $('.mobile-menu').animate({'left':'-320px'}, "slow");
    $('.menu-icon').animate({'left':'0'}, "slow");
    } else {
    $('.mobile-menu').animate({'left':'0'}, "slow");
    $('.menu-icon').animate({'left':'320'}, "slow");
    }
    
})