var liker = null;


function tulis(argument) {
	console.log(argument);
}

function likeGenerator() {
	io = 0; // initilizing number liked

	// $$ is a Selector by firefox like a jquery $
	notliked = $$('a[data-testid="UFI2ReactionLink"]');

	if (document.querySelector('#boxInfo') == undefined) {

		boxInfo = document.createElement('div');
		boxInfo.style = 'background-color:#ddd;font-size:16px;text-align:center;position:fixed;top:40px;right:40px;width:100px;height:60px;border:4px solid black;z-index:9999;padding-top:15px;';
		boxInfo.id = 'boxInfo';

		liked = document.createElement('span');
		liked.innerHTML = 0;
		liked.id = 'liked';

		alllike = document.createElement('span');
		alllike.id = 'alllike';
		alllike.innerHTML = 0;

		buttonNav = document.createElement('button');
		buttonNav.id = 'likecontrol';
		buttonNav.style = 'margin-top:12px;'
		buttonNav.innerHTML = 'state !';
		buttonNav.onclick = function(event){
			changeListener();
		};

		boxInfo.appendChild(liked);
		boxInfo.appendChild(document.createTextNode(' of '));
		boxInfo.appendChild(alllike);
		boxInfo.appendChild(buttonNav);


		document.getElementsByTagName('body')[0].appendChild(boxInfo);
	}	

	counted = 0;
	notliked.forEach(
	  function(val){
	    
	    // checking color of liked post ot not
	    if (val.style.color !== "rgb(53, 120, 229)"){
	    	counted++;
      }
    });	

  alllike = document.querySelector('#alllike');
  alllike.innerHTML = parseInt(alllike.innerHTML) + counted;

	notliked.forEach(
	  function(val){
	    
	    // checking color of liked post ot not
	    if (val.style.color !== "rgb(53, 120, 229)"){
        io++;
 
        // clicking 
        val.click();

       // printing to log

       liked = document.querySelector('#liked');
		   liked.innerHTML = parseInt(liked.innerHTML) + 1;

		   setInterval(function(){
	       tulis(String(Date()) + " - " + String(io));
		   }, 2000)

      }
    });	

	notliked = null;
}

function changeListener() {

	if (liker === null) {
		tulis('creating listener.');

		liker = setInterval(function(){
				likeGenerator();
		    window.scrollBy(0,50);
			},
			  
			  // interval 10 seconds
			  10000
			);		
	} else {
		tulis('removing listener.')
		clearInterval(liker);
	}
}

changeListener();