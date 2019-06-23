
function puts(object) {
  console.log(object);
}

function getVideoList() {
  var links = document.querySelectorAll('a');
  var videos = "3g2|3gp|3gp2|3gpp|amr|amv|asf|avi|bdmv|bik|d2v|divx|drc|dsa|dsm|dss|dsv|evo|f4v|flc|fli|flic|flv|hdmov|ifo|ivf|m1v|m2p|m2t|m2ts|m2v|m4b|m4p|m4v|mkv|mp2v|mp4|mp4v|mpe|mpeg|mpg|mpls|mpv2|mpv4|mov|mts|ogm|ogv|pss|pva|qt|ram|ratdvd|rm|rmm|rmvb|roq|rpm|smil|smk|swf|tp|tpr|ts|vob|vp6|webm|wm|wmp|wmv".split("|");
  var result = [];

  for(i = 0 ; i < links.length;i++) {
    var link = String(links[i]);
    if(videos.indexOf(link.split(".").pop()) >= 0 && link !== undefined ) {
      result.push(link);
    }
  }
  return result;
}

var result = getVideoList();

var check_button = document.createElement('div');
check_button.innerHTML = result.length;
check_button.className = 'btn btn-primary btn-block act-btn';
check_button.onclick = function(event) { puts(result.join("\n"));};
document.body.appendChild(check_button);


function dirList() {
  var dirs = document.body.querySelectorAll('tabel');
  puts(dirs);
}

var execute_button = document.createElement('div');
execute_button.innerHTML = "E";
execute_button.className = 'btn btn-primary btn-block act-btn btn-2';
execute_button.onclick = function(event) { puts(result.join("\n"));};
document.body.appendChild(execute_button);


