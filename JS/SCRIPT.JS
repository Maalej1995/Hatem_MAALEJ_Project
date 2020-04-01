var video = document.getElementById("myVideo");
var soundBtn = document.getElementById("soundBtn");
var forwardBtn = document.getElementById("forwardBtn");
var bodyDiv = document.getElementById("bodyDiv");

// if (location.href == "./HOME.HTML") {
//   video.play();
//   video.addEventListener("ended", function() {
//     window.location.href = "./ABOUT.HTML";
//   });
// }

if (video != null) {
  video.play();
  if (video.paused) {
    video.play();
  }
  video.addEventListener("ended", function() {
    window.location.href = "./ABOUT.HTML";
  });
}

function sound() {
  if (video.muted) {
    video.muted = false;
    soundBtn.style.backgroundImage = "url(../RES/Unmute.png)";
  } else {
    video.muted = true;
    soundBtn.style.backgroundImage = "url(../RES/Mute.png)";
  }
}

function forward() {
  location.href = "./ABOUT.HTML";
}

var firebaseConfig = {
  apiKey: "AIzaSyAz8466EM_5WQeBmHpOe_7IszrD1mMQH7o",
  authDomain: "web-1-project.firebaseapp.com",
  databaseURL: "https://web-1-project.firebaseio.com",
  projectId: "web-1-project",
  storageBucket: "web-1-project.appspot.com",
  messagingSenderId: "621784689952",
  appId: "1:621784689952:web:d6bb80dcf5cc033439bb45",
  measurementId: "G-79WNS24XGL"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messagesRef = firebase.database().ref("web-1-project");

function saveMessage(name, number, mail, object) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    number: number,
    mail: mail,
    object: object
  });
}

function submitForm() {
  // event.preventDefault();
  var name = document.getElementById("nameInput").value;
  var number = document.getElementById("numberInput").value;
  var mail = document.getElementById("mailInput").value;
  var object = document.getElementById("objectInput").value;
  saveMessage(name, number, mail, object);
}

var elem = document.getElementById("contactForm");
if (elem != null) {
  elem.addEventListener("submit", submitForm);
}

function toggleDiv(divNum) {
  if ($("#div" + divNum).css("right") != "0px") {
    if (divNum == 1) {
      $(".social-media-div").toggleClass("hoverMedia");
    } else {
      $(".social-media-div").removeClass("hoverMedia");
    }
    $(".slide1").animate({ right: "-100%" }, 350);
    $(".identitySpan").css("display", "none");
    if ($("#div" + divNum)) {
      $("#div" + divNum).animate({ right: 0 }, 350);
    }
  } else {
    $(".slide1").animate({ right: "-100%" }, 350);
    $("#div0").animate({ right: 0 }, 350);
    $(".social-media-div").removeClass("hoverMedia");
  }
}

function toggleSpan(divNum) {
  if ($("#span" + divNum).css("display") == "none") {
    $(".identitySpan").css("display", "none");
    if ($("#span" + divNum)) {
      $("#span" + divNum).css("display", "block");
    }
  }
}

$("#Img01").mouseenter(function() {
  $("#btn01").css("display", "block");
});
$("#Img01").mouseleave(function() {
  $("#btn01").css("display", "none");
});
$("#Img02").mouseenter(function() {
  $("#btn02").css("display", "block");
});
$("#Img02").mouseleave(function() {
  $("#btn02").css("display", "none");
});
$("#Img03").mouseenter(function() {
  $("#btn03").css("display", "block");
});
$("#Img03").mouseleave(function() {
  $("#btn03").css("display", "none");
});
$("#btn01").click(function() {
  $(".modal-content-01").modal();
});
$("#btn02").click(function() {
  $(".modal-content-02").modal();
});
$("#btn03").click(function() {
  $(".modal-content-03").modal();
});

function toggleExpSpan(divNum) {
  if ($("#spanExp" + divNum).css("display") == "none") {
    $(".experienceSpan").css("display", "none");
    $(".experienceBtn").css("width", "10%");
    $(".experienceBtn").css("background-color", "transparent");
    if ($("#spanExp" + divNum)) {
      $("#spanExp" + divNum).css("display", "block");
      $("#btnExp" + divNum).css("width", "20%");
      $("#btnExp" + divNum).css("background-color", "wheat");
    }
  }
}
