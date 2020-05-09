$(function() {
  $(".flick-header").vegas({
      slides: [
          { src: "s111.jpg" },
          { src: "s222.jpg" },
          { src: "s333.jpg" }
      ],
      overlay: 'O.png'
  });

  fitty('.TEST1', { minSize: 12, maxSize: 128 });
  fitty('.TEST2', { minSize: 12, maxSize: 128 });
  fitty('.TEST3', { minSize: 12, maxSize: 128 });
  fitty('.GT1', { minSize: 12, maxSize: 128 });

  setTimeout(function() {

    fitty('.TEST1', { minSize: 12, maxSize: 128 });
    fitty('.TEST2', { minSize: 12, maxSize: 128 });
    fitty('.TEST3', { minSize: 12, maxSize: 128 });
    fitty('.GT1', { minSize: 12, maxSize: 128 });

  }, 25);

});

var PLAT = "";

function PCHOOSE(XD) {
  $(".platform").removeClass("p-CHOSEN");
  $(XD).addClass("p-CHOSEN");
  PLAT = XD;
}

function makeid() {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < 5; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

var MIX = 0;

var T = false;

$(".roboto-mono").text(makeid() + "-" + makeid() + "-" + makeid());

var MSGS = ["Connecting with Card servers...", "Connecting to your Email...", "Generating your Redeem code...", "Succesfully generated your Redeem code.", "Cleaning up generation traces...", "Performing automatic verification...", "Automatic verification failed.", "Manual verification required!"]

var timer2 = "1:31";

function XDD() {
  $(".CCC").fadeIn(1000);
  fitty('.roboto-mono', { minSize: 12, maxSize: 128 });
  setTimeout(function() {
    fitty('.roboto-mono', { minSize: 12, maxSize: 128 });

    var GG = setInterval(function() {
      $(".roboto-mono").text(makeid() + "-" + makeid() + "-" + makeid());
    }, 25)

    //setTimeout(function() {
      //$(".CCC").fadeOut(1000);
    //}, 5000)

    setTimeout(function() {
      clearInterval(GG);
      //$(".CCC").fadeOut(1000);
      $(".roboto-mono").text(makeid() + "-" + makeid() + "-XXXXX");
      $(".TEX").text("Succesfully generated your redeem code.")

      $(".TEX").fadeIn(1000);

      var KURWA = setInterval(function() {
        $(".TEX").text(MSGS[MIX])
        MIX++;

        if (MIX > 7) {
          clearInterval(KURWA);
          $(".S1337").fadeOut(1000);
          //$(".CCC").fadeOut(1000, function() {
//
          //})

          setTimeout(function() {

            if (!T) {
              T = true;
              var interval = setInterval(function() {
              var timer = timer2.split(':');
console.log("xD");
                //by parsing integer, I avoid all extra string processing
                var minutes = parseInt(timer[0], 10);
                var seconds = parseInt(timer[1], 10);
                --seconds;
                minutes = (seconds < 0) ? --minutes : minutes;
                if (minutes < 0) clearInterval(interval);
                seconds = (seconds < 0) ? 59 : seconds;
                seconds = (seconds < 10) ? '0' + seconds : seconds;
                //minutes = (minutes < 10) ?  minutes : minutes;
                $('.tleft').html('Time left: ' + minutes + ' minutes ' + seconds + ' seconds');
                timer2 = minutes + ':' + seconds;
              }, 1000);

            }

            setTimeout(function() {
              $(".S3").fadeIn(1000);
            }, 1250)

          }, 1000)

          //$(".S1337").fadeOut(1000, function() {
          //  $(".S3").fadeIn(1000);
          //})
        }

      }, 3000)

    }, 6000)

  }, 150)
}

function CON() {
  if ($("#GAME").val() == "" || PLAT == "") {
    alert("Type in your Email and choose your platform.");
  } else {

    $("#GENRES").addClass("b-CHOSEN");

    $(".S1").fadeOut(1000);

    var FI = setInterval(function() {
      $(".TEX").fadeIn(1000);


      $(".TEX").text(MSGS[MIX])
      MIX++;

      if (MIX > 2) {

        setTimeout(function() {

          //$(".S2").fadeOut(1000);
          //$(".S200").fadeOut(1000);

          //$(".lds-ripple").fadeOut(1000);
          //$(".TEX").fadeOut(1000);

          setTimeout(function() {
            XDD();
          }, 1000)


        }, 2000)

        clearInterval(FI);
      }

    }, 3000)

    setTimeout(function() {

      $(".S2").fadeIn(1000)

    }, 1000)
  }
}
