
$(document).ready(function()
{
 	$("button[id^='buttonId']").click( function()
 	{
 		var number = $(this).val();
 		$("#userInput").val($("#userInput").val() + number);
 			$("#result").click( function()
 			{
 				var myEval=$("#userInput").val();
 				var separate = new Array();
				separate= $("#userInput").val().split("");
    			for(var j=0;j<separate.length;j++)
    			{  
    				if(isNaN(separate[j])&&isNaN(separate[j+1]))
    				{
    					//separate[j]=place(separate[j],separate[j+1]);
    					var a=separate[j]*10+separate[j+1];
    					$("#userInput").val(a);

    				}
    				/*else 
    				{
    					switch(separate[j+1])
					{
						case '!':$("#userOutput").html(fact(separate[j]));
						break;
						case '^':$("#userOutput").html(Math.sqrt(separate[j]));
						break;
						default:
						break;
					}

    				} */	
    							
		    				
    			}  		

   			});
   			
	});
	$("#clear").click( function()
 	{ 
 		$("#userInput").val('');
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
var place=function(num1,num2)
{

	num2=num1*10+num2;
	return num2;	
};
		
	var m=eval($("#userInput").val());
              $("#userOutput").html(m);
              prev    r
              2+2!=2+2
              prev r 	prev
              2+3!=6 2+3!