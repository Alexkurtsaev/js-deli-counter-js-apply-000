var katzDeliLine = [];

function takeANumber(line, name){
  line.push(name);
  var takeReturn = "Welcome, " + name + ". You are number " + line.length + " in line.";
  return takeRturn;
}

function nowServing(line){
  if (line.length === 0){
    var funRet = "There is nobody waiting to be served";
  } else {
    var serveReturn = "Currently serving " + line[0] + ".";
    line.shift();
  }
  return serveReturn;
}

function currentLine (line){
  var funRet ="The line is currently:";
  for (var i = 0; i < line.length; i++){
    var num = i + 1;
    funRet += " " + num + ". " + line[i];
    if (i+1 < line.length){
      funRet += ",";
    }
  }
  return funRet;
}