
function likeGenerator() {
	io = 0; // initilizing number liked
	
	// $$ is a Selector by facebook like a jquery $
	$$('a[data-testid="UFI2ReactionLink"]').forEach(
	  function(val){
	    
	    // checking color of liked post ot not
	    if (val.style.color !== "rgb(53, 120, 229)"){
        io++;
 
        // clicking 
        val.click();

       // printing to log
       console.log(String(Date()) + " - " + String(io));

       if (document.querySelector('#boxInfo') == undefined) {
       	boxInfo = $$('<div></div>')
       		.append($$('<div></div>')
       			.attr('id', '')
       			.attr('', '')
       			.attr('', '')
       			)
				boxInfo.innerHTML = 
				'<div id=\'happy\' style=\'background-color:#ddd;font-size:16px;text-align:center;position:fixed;top:40px;right:40px;width:200px;height:100px;border:4px solid black;z-index:9999;padding-top:15px;\'>
				<span>0</span>
				 of ' + happy.length + ' items liked.

				 <div id=\'happyStatus\' style=\'margin-top:30px;\'><a id=\'happyButton\' href=\'#\' style=\'display:block;\' onclick=\'haltFn();\'>Stop it.</a></div></div>'
				document.getElementsByTagName('body')[0].appendChild(boxInfo);
       }

      }
    });	
}

function stopListener(thisis) {
	clearInteval(thisis);
}
// I Love You

liker = setInterval(function(){

	},
	  
	  // interval 10 seconds
	  10000
	);