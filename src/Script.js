$(document).ready(function() {
    // SCROLL EFFECT
    var $win = $(window)
    $win.on('scroll', function() {
        if ($win.scrollTop() >= "400") {
            $(".cursor").addClass('-acitve')
        } else {
            $(".cursor").removeClass('-acitve')
        }
    })

    console.log($('.cursor'))
    $('.cursor').on('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        })
        // END SCROLL EFFECT
});

// by Mirian Menezes