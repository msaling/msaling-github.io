$(function() {
    var waypoints = $('article').first().waypoint(function(direction) {
        if (direction === 'down') {
            $('.onscroll').slideToggle('fast');
        }
        else {
            $('.onscroll').slideToggle('fast');
        }
    }, {
      offset: '25%'
    });
    
    $('.fa-reorder, .mobile-nav .fa-close').click(function(event){
        event.preventDefault();
        $('.mobile-nav').slideToggle();
    });

});