$(document).ready(function() {
      $(".vamp").click(function() {
        $(".vamp").fadeOut();
        $(".Ques").show();
      });

      $("#submitbutt").click(function() {
        var werewolfAnswer = $("#ans1").val();
        var styleAnswer = $("#answer2").val();

        if (werewolfAnswer === 'werewolf' && styleAnswer.includes('leather')) {
          $("#resultImage").attr("src","https://static.wikia.nocookie.net/the-originals-diaries/images/a/a1/Klaus-0.jpg/revision/latest/thumbnail/width/360/height/360?cb=20191120192651");
          $("#resultImage").attr("alt", "You are Klaus");
        } else {
          
          $("#resultImage").attr("src", "https://static.wikia.nocookie.net/the-originals-diaries/images/a/a1/Klaus-0.jpg/revision/latest/thumbnail/width/360/height/360?cb=20191120192651");
          $("#resultImage").attr("alt", "Klaus");
        }
      });

      $("#restartbutt").click(function() {
        $(".Ques").hide();
        $(".vamp").fadeIn();
        $("#ans1").val("");
        $("#answer2").val("");
        $("#resultImage").attr("src", "");
        $("#resultImage").attr("alt", "");
      });
    });