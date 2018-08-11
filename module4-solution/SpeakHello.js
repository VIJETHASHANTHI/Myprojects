
(function (window) {

var speakWord = "Hello";

helloSpeaker = {};


helloSpeaker.speak = function (names) 
{

  console.log(speakWord + " " + names);
}

window.helloSpeaker = helloSpeaker;


})(window);

