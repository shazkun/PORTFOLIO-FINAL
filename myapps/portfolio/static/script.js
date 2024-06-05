$(document).ready(function() {
    var sections = $('.section');
    var windowHeight = $(window).height();

    function checkVisibility() {
        var scrollTop = $(window).scrollTop();
        
        sections.each(function() {
            var position = $(this).offset().top;

            if (position < scrollTop + windowHeight * 0.8 && position + $(this).height() > scrollTop + windowHeight * 0.2) {
                $(this).addClass('visible');
            } else {
                $(this).removeClass('visible');
            }
        });
    }

    // Initial check when the document is ready
    checkVisibility();

    // Check visibility on scroll
    $(window).on('scroll', checkVisibility);
});

function pauseVideos() {
    var videos = document.querySelectorAll('video');
    videos.forEach(function(video) {
        video.pause();
    });
     setTimeout(function() {
        $('#videoCarousel').carousel('pause'); // Pause the carousel
    }, 100);
}

function toggleNavbar() {
    var section2 = document.getElementById('about');
    var navbar = document.querySelector('.navbar-main');

    // Get the position of the second section relative to the top of the viewport
    var section2Position = section2.getBoundingClientRect().top;

    // Toggle the 'hidden' class on the navbar based on the scroll position
    if (section2Position <= 0) {
        navbar.classList.remove('hidden');
    } else {
        navbar.classList.add('hidden');
    }
}



