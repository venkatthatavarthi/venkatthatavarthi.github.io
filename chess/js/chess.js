var colName = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var currentPosition = {
  "1a": "brook",
  "1b": "bknight",
  "1c": "bbishop",
  "1d": "bking",
  "1e": "bqueen",
  "1f": "bbishop",
  "1g": "bknight",
  "1h": "brook",
  "2a": "bpawn",
  "2b": "bpawn",
  "2c": "bpawn",
  "2d": "bpawn",
  "2e": "bpawn",
  "2f": "bpawn",
  "2g": "bpawn",
  "2h": "bpawn",
  "8a": "wrook",
  "8b": "wknight",
  "8c": "wbishop",
  "8d": "wking",
  "8e": "wqueen",
  "8f": "wbishop",
  "8g": "wknight",
  "8h": "wrook",
  "7a": "wpawn",
  "7b": "wpawn",
  "7c": "wpawn",
  "7d": "wpawn",
  "7e": "wpawn",
  "7f": "wpawn",
  "7g": "wpawn",
  "7h": "wpawn"
};
var fromPosition ='';
var playerPiece = 'b';
var gameHistory = [];

$(document).ready(function() {  
  board();
  setBoard();
  $("td").click(function() {

    //if it is not a fromPosition then continue				
    if (!fromPosition) {
      //if this is the own property of current postion then place the from position
      if (currentPosition.hasOwnProperty(this.className) && currentPosition[this.className].charAt(0) != playerPiece) {
        fromPosition = this.className;
        playerPiece = currentPosition[this.className].charAt(0);
      } else {
        alert("invalid move");
      }
    }
    //position is null go though this
    else {
      //present position pushing on the history		
      var cloned = {};
      $.extend(cloned, currentPosition);
      gameHistory.push(cloned);
      //update the new position with child element and clear frompostion key and html	
      currentPosition[this.className] = currentPosition[fromPosition];
      delete currentPosition[fromPosition];
      $("." + fromPosition).html("");
      $("." + this.className).html("<img src=images/" + currentPosition[this.className] + " />");
      displayPosition(fromPosition, this.className, currentPosition[this.className]);
      fromPosition = '';
    }
  });
  $(":button").click(function() {
    if (gameHistory.length === 0) {
      alert('No moves to undo');
      return;
    }
    // clear pieces on screen

    for (var key in currentPosition) {
      $("." + key).html("");
    }
    // replace currentPosition by gameHistory
    currentPosition = gameHistory[gameHistory.length - 1];
    $('#info tr:last').remove();
    setBoard();
    gameHistory.length--;

  });

});

//display board function
var board = function() {
  for (var i = 1; i <= 8; i++) {
    $("#board").append("<tr>" + "</tr>");
    //get the index of subcol
    for (a in colName) {
    //filtering tr last element and appending
      $("#board tr:last").append("<td class=" + i + colName[a] + ">" + "</td>");
    }
  }
}
//fix pieces
var setBoard = function() {
  for (var key in currentPosition) {
    $("." + key).html("<img src=images/" + currentPosition[key] + " />");
  }
}
//display history
var displayPosition = function(from, to, coin) {
  var player = (coin.charAt(0) === 'w') ? "white" : "black";
  $("#info tbody:last").append("<tr> <td> " + from + " -> " + to + "</td>" + "<td>" + coin + "</td>" + "<td>" + player + "</td>" + "\n" + "</tr>");
}