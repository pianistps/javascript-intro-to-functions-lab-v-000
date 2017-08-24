function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var s1 = string.toUpperCase()
  console.log(s1)
}

function logWhisper(string) {
  var s2 = string.toLowerCase()
  console.log(s2)
}

function sayHiToGrandma(string) {
  var lowercase = string.toLowerCase()
  var uppercase = string.toUpperCase()
  if(string === lowercase) {
    return "I can't hear you!"
  } else if(string === uppercase) {
    return "YES INDEED!"
  } else {
    return "I love you, too."
  }
}
