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
    
    $('.desc-toggle').click(function(e){
        e.preventDefault();
        $(this).find('i').toggleClass('fa-caret-right').toggleClass('fa-caret-down');
        $(this).next().slideToggle();
    });
    
    $('.track-title').click(function(e){
        e.preventDefault();
        $(this).find('i').toggleClass('fa-chevron-down').toggleClass('fa-chevron-up');
        $(this).next().slideToggle();
    });
    
    $('.open-all').click(function(e){
        e.preventDefault();
        $('.open-all, .close-all').toggle();
        $('.track-title .fa').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        $('.track-session').show();
    });
    
    $('.close-all').click(function(e){
        e.preventDefault();
        $('.open-all, .close-all').toggle();
        $('.track-title .fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $('.track-session').hide();
    });

});