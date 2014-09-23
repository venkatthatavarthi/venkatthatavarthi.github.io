//var mem=' ';
var prev='';
$(document).ready(function()
{
	$("button[id^='buttonId']").click( function()
	{
		var number = $(this).val();
 		$("#userInput").val($("#userInput").val() + number);
 		prev = ($(this).attr("inputKind") == 'operator') ? '': (prev+number)
 		var mem=$("#userInput").val();
 		var prv=prev.replace("!","");   
 		var srv=prev.replace("sqrt","");
 		 switch(number)
			{
				case '!':var m=fact(prv);
				        var n=mem.replace(prev,m);
				        $("#userInput").val(n);
				        //$("#userInput").val(eval($("#userInput").val()));
				        //prev=n;
				       // prev='';					
				break;
				case 'sqrt'://$("#userInput").val(Math.sqrt(srv));
						$("#userInput").val(prev=Math.sqrt(srv));
						//s$("#userInput").val(eval($("#userInput").val()));
						prev="";
				break;

				default:
				break;
			}
 		$("#results").click( function()
 		{	
		//$("#userOutput").val(eval(#$("#userInput").val()));
		
		$("#userInput").val(eval($("#userInput").val()));
		//$("#userInput").val(eval(number));
        	               		
		});
					


         });
	$("#clear").click( function()
	{ 
		$("#userInput").val('');
		prev='';
	});

});
var fact=function(num)
{
	if(num<=1)
	{
		return 1;
	}
	else
	{
		return num * fact(num-1);
	}
};

