var arr = ['a','b','c','d','e','f','g','h'];
var piecePosition= {"1a":"brook",
"1b":"bknight",
"1c":"bbishop",
"1d":"bking",
"1e":"bqueen",
"1f":"brook",
"1g":"bknight",
"1h":"bbishop",
"2a":"bpawn",
"2b":"bpawn",
"2c":"bpawn",
"2d":"bpawn",
"2e":"bpawn",
"2f":"bpawn",
"2g":"bpawn",
"2h":"bpawn",
"8a":"wrook",
"8b":"wknight",
"8c":"wbishop",
"8d":"wking",
"8e":"wqueen",
"8f":"wrook",
"8g":"wknight",
"8h":"wbishop",
"7a":"wpawn",
"7b":"wpawn",
"7c":"wpawn",
"7d":"wpawn",
"7e":"wpawn",
"7f":"wpawn",
"7g":"wpawn",
"7h":"wpawn"};
var fromPosition='';
var gameHistory=[];

$(document).ready(function(event){
	board();
	setBoard(piecePosition);	
	$("td").click(function(){				
		var currentPosition=this.className;			
		if(!fromPosition) {
			if(piecePosition.hasOwnProperty(currentPosition)){			
				fromPosition= this.className;	
				var cloned={}
				$.extend(cloned, piecePosition);
				gameHistory.push(cloned);          	 
				displayPosition("from",this.className,''); 
		   }	
		   else {alert("NoCoin");}	
		}
		else {			
			piecePosition[this.className] = piecePosition[fromPosition];
			var cloned1 = piecePosition; 
			$.extend(cloned1, piecePosition);    	
			gameHistory.push(cloned1);          	
			delete piecePosition[fromPosition];
			$("." + fromPosition).html("");
			$("." + this.className).html("<img src=images/" + piecePosition[this.className] + " />");
			fromPosition = '';                      
			var toPosition=this.className;
			displayPosition("row",this.className,piecePosition[this.className]);							           			
			}
	});
	var clicks=gameHistory.length;
	$(":button").click(function(){
		 
		setBoard(gameHistory['']);						
		setBoard(gameHistory[clicks]);
		clicks--; 		
	});
		
});

var board=function(){
	for(var i=1;i<=8;i++){
		$("#board").append("<tr>"+"</tr>");
		for(a in arr){
			$( "#board tr:last" ).append("<td class=" + i + arr[a] + ">"+"</td>");}
	}
}
var setBoard=function(newPieces){	
	for(var key in newPieces){
		$("." + key).html("<img src=images/" + newPieces[key] + " />");
	}
}
var displayPosition=function(pos,position,coin){	
	$("#"+pos).html("'"+position+"'"+coin+"\n");
	if(coin.charAt(0)==='w'){$("#move").html("black"+"\t");}
	else{$("#move").html("white"+"\t");}
}

