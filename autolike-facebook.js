var liker = null; // initialized liker variable "no doubt"
var delay = 3000; // delay every like clicked
var interval = 10000; // interval to checking and akumulate all like buttons


function logger(argument) {
  console.log(argument);
}

function likeGenerator() {

  // $$ is a Selector by firefox like a jquery $
  notliked = $$('a[data-testid="UFI2ReactionLink"]');

  // checking info box 
  if (document.querySelector('#boxInfo') == undefined) {

    // creating info box if not exists
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

  // i'm not a good coder, here may can be optimized
  counted = 0;
  notliked.forEach(
    function(val){
      
      // checking color of liked post or not
      if (val.style.color !== "rgb(53, 120, 229)"){
        counted++;
      }
    });  

  alllike = document.querySelector('#alllike');
  alllike.innerHTML = parseInt(alllike.innerHTML) + counted;

  // executing list like buttons
  notliked.forEach(
    function(val){
      
      // checking color of liked post or not
      if (val.style.color !== "rgb(53, 120, 229)"){

        // clicking like button
        val.click();

        // set liked counter on info box
        liked = document.querySelector('#liked');
        liked.innerHTML = parseInt(liked.innerHTML) + 1;

        setTimeout(function(){
          // printing to log
         logger(String(Date()) + " - " + String(liked.innerHTML));
       }, delay)

      }
    });  

  // i'm not sure about this
  notliked = null;
}

function changeListener() {

  // checking for liker 
  if (liker === null) {
    logger('creating listener.');

    // creating listener
    liker = setInterval(function(){
        
      // call like generator
      likeGenerator();

      // set auto scrolling
      window.scrollBy(0,50);
    },
        
    interval );    
  } else {

    logger('removing listener.')

    // clear listener liker
    clearInterval(liker);
  }
}

// initializing first time
changeListener();