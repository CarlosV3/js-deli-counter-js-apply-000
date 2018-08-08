var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  var index = line.indexOf(name);
  var position = index + 1;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!";
  } else {
    var name = line[0];
    line.splice(0, 1);
    return `Currently serving ${name}.`;
  }
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty.";
  } else {
    var lineStatus = [];
    line.forEach(function(person, index) {
      var currentPlace = index + 1;
      var status = ` ${currentPlace}. ${person}`;
      lineStatus.push(status);
    });
    return `The line is currently:${lineStatus}`;
  }
}

//takeANumber(line, "Humzah") => hello humzah you are number1 in line
//takeANumber(line, "joe") => hello humzah you are number2 in line
//nowServing
//takeANumber => hello jim you are number 3 in line 
  var number = 0;
function takeANumber() {
  number++
  return `You are number ${number}`
}

object oriented
Hackerrank.com 
