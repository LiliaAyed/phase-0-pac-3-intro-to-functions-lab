function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase()
}
function logShout(string) {
    console.log(string.toUpperCase());
  }
function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  function sayHiToHeadphonedRoommate(message) {
    if (message === message.toLowerCase()) {
      return "I can't hear you!";
    } else if (message === message.toUpperCase()) {
      return "YES INDEED!";
    } else if (message === "Let's have dinner together!") {
      return "I would love to!";
    }
  }