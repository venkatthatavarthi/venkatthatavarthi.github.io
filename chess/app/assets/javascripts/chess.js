var colName = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

var fromPosition ='';

var gameHistory = [];
var piece;
$(document).ready(function() {  
  
  board();
  setBoard();
  $(".edit_board").hide();
  $("td").click(function() {

    //if it is not a fromPosition then continue       
    if (!fromPosition) {
      //if this is the own property of current postion then place the from position
      if (currentPosition.hasOwnProperty(this.className) && currentPosition[this.className].charAt(0) != playerPiece) {
        fromPosition = this.className;
        $("#board_current_player").val(currentPosition[this.className].charAt(0));

      } 
      else {
       
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
      $("." + this.className).html("<img src=/images/" + currentPosition[this.className] + " />");
      $("#board_piece_position").val(JSON.stringify(currentPosition));
      $(".edit_board").submit();

      piece=currentPosition;
      displayPosition(fromPosition, this.className, currentPosition[this.className]);
      fromPosition = '';
    }

  });
  $("#play").click(function() {
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
    $("." + key).html("<img src=/images/" + currentPosition[key] + " />");
  }
}
//display history
var displayPosition = function(from, to, coin) {
  var player = (coin.charAt(0) === 'w') ? "white" : "black";
  $("#info tbody:last").append("<tr> <td> " + from + " -> " + to + "</td>" + "<td>" + coin + "</td>" + "<td>" + player + "</td>" + "\n" + "</tr>");
}