(function () {
  "use strict";
  var jQueryPlugin = (window.jQueryPlugin = function (ident, func) {
    return function (arg) {
      if (this.length > 1) {
        this.each(function () {
          var $this = $(this);

          if (!$this.data(ident)) {
            $this.data(ident, func($this, arg));
          }
        });

        return this;
      } else if (this.length === 1) {
        if (!this.data(ident)) {
          this.data(ident, func(this, arg));
        }

        return this.data(ident);
      }
    };
  });
})();
(function () {
  "use strict";
  function twitterVideoPlayer($root) {
    const element = $root;
    const video = $root.first(".video");
    const video_element = $root.find("[data-video]");
    const video_preview = $root.find(".video-preview");
    const video_top = $root.find(".video-top");
    const video_start_btn = $root.find(".video-start-btn");
    const video_control_btn = $root.find(".video-control-btn");
    const video_control_play = $root.find(".video-control-play");
    const video_control_pause = $root.find(".video-control-pause");
    const video_voice = $root.find(".video-voice");
    const video_voice_btn = $root.find(".video-voice-btn");
    const video_voice_on = $root.find(".video-voice-on");
    const video_voice_off = $root.find(".video-voice-off");
    const full_screen_btn = $root.find(".full-screen-btn");
    const full_screen_open = $root.find(".full-screen-open");
    const full_screen_exit = $root.find(".full-screen-exit");
    const video_voice_slider = $root.find(".video-voice-slider-range");
    const video_voice_rail = $root.find(".video-voice-slider-rail");
    const video_voice_buffer = $root.find(".video-voice-slider-buffer");
    const video_slider = $root.find(".video-slider-container");
    const video_slider_rail = $root.find(".video-slider-rail");
    const video_slider_buffer = $root.find(".video-slider-buffer");
    const video_count_time = $root.find(".video-count-time");
    const video_count_fulltime = $root.find(".video-count-fulltime");
    const video_loading = $root.find(".video-loading");
    const video_reset = $root.find(".video-reset");
    const video_reset_btn = $root.find(".video-reset-btn");
    const video_contextMenu = $root.find(".video-contextMenu");

    var vid = $(video_element).get(0);
    function play() {

      window.scrollTo(0, document.body.scrollHeight);
      document.body.style.overflow = 'hidden';

      $('.entire-page').css({
        background: 'white',
        transition: 'background 3s ease'
      }); 
      $('.noti').css({
        opacity: '0',
        transition: 'opacity 1s ease'
      });       

      vid.play();
      video_control_play.hide();
      video_control_pause.show();
    }
    function pause() {
      vid.pause();
      video_control_pause.hide();
      video_control_play.show();
    }
    function loading() {
      if (vid.readyState === 4) {
        video_loading.hide();
        play();
      } else {
        video_loading.show();
        pause();
      }
    }
    function voiceOn() {
      vid.muted = true;
      $(video_voice_on).hide();
      $(video_voice_off).show();
    }
    function voiceOff() {
      vid.muted = false;
      $(video_voice_on).show();
      $(video_voice_off).hide();
    }
    function Fullscreen(element) {
      if (element.requestFullscreen) element.requestFullscreen();
      else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
      else if (element.webkitRequestFullscreen)
        element.webkitRequestFullscreen();
      else if (element.msRequestFullscreen) element.msRequestFullscreen();
      full_screen_open.hide();
      full_screen_exit.show();
    }
    function exitFullscreen() {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
      full_screen_open.show();
      full_screen_exit.hide();
    }
    function IsFullScreen() {
      var full_screen_element =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement ||
      null;

      if (full_screen_element === null) return false;
      else return true;
    }
    function updateplayer() {
      var percentage = (vid.currentTime / vid.duration) * 100;
      video_slider_rail.css({ width: percentage + "%" });
      video_slider_buffer.css({ left: percentage - 1 + "%" });
      video_count_time.text(getFormatedTime());
      video_count_fulltime.text(getFormatedFullTime());
    }
    function getTimeState() {
      var mouseX = event.pageX - video_slider.offset().left,
      width = video_slider.outerWidth();

      var currentSeconeds = Math.round((mouseX / width) * vid.duration);
      var currentMinutes = Math.floor(currentSeconeds / 60);

      if (currentMinutes > 0) {
        currentSeconeds -= currentMinutes * 60;
      }
      if (currentSeconeds.toString().length === 1) {
        currentSeconeds = "0" + currentSeconeds;
      }
      if (currentMinutes.toString().length === 1) {
        currentMinutes = "0" + currentMinutes;
      }

      return currentMinutes + ":" + currentSeconeds;
    }
    function skip() {
      var mouseX = event.pageX - video_slider.offset().left,
      width = video_slider.outerWidth();
      vid.currentTime = (mouseX / width) * vid.duration;
      updateplayer();
    }
    function getFormatedFullTime() {
      var totalSeconeds = Math.round(vid.duration);
      var totalMinutes = Math.floor(totalSeconeds / 60);
      if (totalMinutes > 0) {
        totalSeconeds -= totalMinutes * 60;
      }
      if (totalSeconeds.toString().length === 1) {
        totalSeconeds = "0" + totalSeconeds;
      }
      if (totalMinutes.toString().length === 1) {
        totalMinutes = "0" + totalMinutes;
      }
      return totalMinutes + ":" + totalSeconeds;
    }
    function getFormatedTime() {
      var seconeds = Math.round(vid.currentTime);
      var minutes = Math.floor(seconeds / 60);

      if (minutes > 0) {
        seconeds -= minutes * 60;
      }
      if (seconeds.toString().length === 1) {
        seconeds = "0" + seconeds;
      }
      if (minutes.toString().length === 1) {
        minutes = "0" + minutes;
      }
      return minutes + ":" + seconeds;
    }

    video_start_btn.click(function () {
      $(video_preview).hide();
      play();
    });
    $(vid).on("progress", function () {
      loading();
    });
    video_control_btn.click(function () {
      if (vid.paused) {
        play();
      } else {
        pause();
      }
      return false;
    });
    video_top.click(function () {
      if (vid.paused) {
        play();
      } else {
        pause();
      }
      return false;
    });
    video_voice_btn.click(function () {
      if (vid.muted === false) {
        voiceOn();
      } else {
        voiceOff();
      }
    });
    full_screen_btn.click(function () {
      if (IsFullScreen()) exitFullscreen();
      else Fullscreen(video[0]);
    });
    video_top.dblclick(function () {
      if (IsFullScreen()) exitFullscreen();
      else Fullscreen(video[0]);
    });
    video_voice_slider.on("input change", function () {
      var range = (localStorage[this.id] = $(this).val());
      video_voice_buffer.css("width", range * 100 + "%");
      vid.volume = range;
      video_voice_slider.attr("value", range);
      if (range == 0) {
        voiceOn();
      } else {
        voiceOff();
      }
    });
    video_voice_slider.each(function () {
      if (typeof localStorage[this.id] !== "undefined") {
        $(this).val(localStorage[this.id]);
      }
    });
    video_voice_slider
    .keyup(function () {
      var range = (localStorage[this.id] = $(this).val());
      video_voice_buffer.css("width", range * 100 + "%");
      vid.volume = range;
      video_voice_slider.attr("value", range);
      if (range == 0) {
        voiceOn();
      } else {
        voiceOff();
      }
    })
    .keyup();
    video_slider.click(function () {
      skip();
    });
    updateplayer();
    video_count_fulltime.text(getFormatedFullTime());

    let verss = $(".reve");


    $('.muchacho').hover(
      function() {
        $('.video').css({
          opacity: '0',
          transition: 'opacity 3s ease'
        });      

        $('.superpuesta-imagen').css({
          opacity: '0',
          transition: 'opacity 3s ease'
        });       

        $('.palmuchacho').css({
          opacity: '0',
          transition: 'opacity 3s ease'
        });  



      },
      function() {
    //     $('.video').css({
    //   opacity: '1',  // Puedes restablecer a los valores originales aquí
    //   transition: 'opacity .5s ease'
    // });
      }
      );



    let componente = $("#mafufada");
    let mostrado = false;
    const numerosDeseados = [3, 6,9];
    const numerosDeseados2 = [5, 8,11];


    $(vid).on("timeupdate", function () {
      updateplayer();

      if (Math.floor(vid.currentTime)===16 ) {
        $('.muchacho').css({
          display:"block"
        });
        verss.addClass("han");

      }

      if (numerosDeseados.includes(Math.floor(vid.currentTime)) && !mostrado) {
        componente.addClass("mostrado");
        console.log("mostrado");

        mostrado = true;
      }

      if (numerosDeseados2.includes(Math.floor(vid.currentTime)) && mostrado) {
        componente.removeClass("mostrado");
        console.log("oculto");

        mostrado = false;
      }
    });



    



    $(video_slider_buffer).on("input change", function () {
      updateplayer();
    });
    $(video_slider_buffer).on("mousemove", function () {
      updateplayer();
    });
    $(video_slider_buffer).on("mouseup", function () {
      updateplayer();
    });
    video_voice.hover(
      function () {
        video_slider.hide();
      },
      function () {
        video_slider.show();
      }
      );
    $(vid).on("ended", function () {
      video_reset.css("display", "flex");
    });
    video_reset_btn.click(function () {
      play();
      video_reset.css("display", "none");
    });
    $(video).on("contextmenu", function (event) {
      event.preventDefault();
      video_contextMenu.show().css({
        top: event.pageY,
        left: event.pageX
      });
    });
    $(window).click(function () {
      video_contextMenu.fadeOut("fast");
    });
  }

  $.fn.twitterVideoPlayer = jQueryPlugin(
    "twitterVideoPlayer",
    twitterVideoPlayer
    );
})();

var p2 = document.getElementById("parte2");

var p1 = document.getElementById("parte1");
const nariz = document.getElementById('nariz');
const muchacho = document.getElementById('muchacho');

muchacho.addEventListener('transitionend', () => {

   $('.muchacho').css({
     top:"5%"
   });

   $('#comotan').css({
     opacity: '1',
   });   


 });

nariz.addEventListener('transitionrun', () => {

  const transformValue = window.getComputedStyle(nariz).getPropertyValue('transform');
  const matrix = new DOMMatrix(transformValue);
  const rotation = Math.round((Math.atan2(matrix.b, matrix.a) * (180 / Math.PI) + 360) % 360);

  if (rotation <= 10) {





    setTimeout(function() {
      var audio = new Audio('xddd.mp3');
    // Reproducir el audio
      audio.volume = 0.7;

      audio.play();

    }, 2000);   
  }
});

nariz.addEventListener('transitionend', () => {
  const transformValue = window.getComputedStyle(nariz).getPropertyValue('transform');
  const matrix = new DOMMatrix(transformValue);
  const rotation = Math.round((Math.atan2(matrix.b, matrix.a) * (180 / Math.PI) + 360) % 360);

  if (rotation >= 200) {

    p1.style.opacity = "0";

    setTimeout(function() {

      document.body.style.backgroundColor = "black";

    }, 3000);   




    setTimeout(function() {

  iniciar(); // Llama a la función iniciar
  p1.style.display = "none";

  p2.style.display = "block";

}, 5000);

     setTimeout(function() {
      var audio = new Audio('You OK_.mp3');
    // Reproducir el audio
      audio.play();

    }, 6000);  

    setTimeout(function() {   

      $('.canvas').css({
        display:"none"
      });
      p2.style.display = "none";
      document.body.style.backgroundColor = "black";

      demon();  
         

    }, 79000);

    setTimeout(function() {   

      $('#demon').css({
        opacity:"1"
      });


iniciarContador();

    }, 81000);


  }
});



$(".video").twitterVideoPlayer();

 