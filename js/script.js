
/*-------------GOOGLE MAPS-----------------*/

/*function initialize() {

    var myLatlng = new google.maps.LatLng(59.934602, 30.334607);
    var mapOptions = {
        center: new google.maps.LatLng(59.934602, 30.334607),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title:"Ditlogistic"
    });
}

function loadScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAaOWKyamSxMTXclSDFmJ2N4Am20PCTD6I&sensor=FALSE&callback=initialize";
    document.body.appendChild(script);
}

window.onload = loadScript;
*/


$(function() {

    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop: 0}, 1000);
    });

    $('.smoothScroll').click(function(event) {
        event.preventDefault();
        var href=$(this).attr('href');
        var target=$(href);
        var top=target.offset().top;
        $('html,body').animate({
            scrollTop: top
        }, 1000);
    });
});

jQuery(function($) {

      jQuery('#module-video').YTPlayer({
        fitToBackground: true,
        videoId: 'UBDcpbDNxuM',
        pauseOnScroll: false,
        playerVars: {
          modestbranding: 0,
          autoplay: 1,
          controls: 1,
          showinfo: 0,
          branding: 0,
          rel: 0,
          autohide: 0
        }
      });
      
      jQuery('#background-video').YTPlayer({
        fitToBackground: false,
        videoId: 'UBDcpbDNxuM',
        pauseOnScroll: false,
        playerVars: {
          modestbranding: 0,
          autoplay: 1,
          controls: 1,
          showinfo: 0,
          branding: 0,
          rel: 0,
          autohide: 0
        }
      });
    });
      
      