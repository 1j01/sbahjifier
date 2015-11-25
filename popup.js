
var txt = document.querySelector('#swe');
var img = document.querySelector('#sbahjimg');

function getCSS(selector){
	var css = selector;
	if((Math.random() < 0.05)){
		css += "{-webkit-appearance:media-mute-button}";
	}else{
		css += "{-webkit-filter: "+
			"saturate("+Math.floor((Math.random()*7055545))+"%) "+
			"hue-rotate("+Math.floor((Math.random()*360))+"deg) "+
			((Math.random()<0.5)?"invert() ":"")+
		" !important;}";
	}
	if(selector != "body"){
		css += getCSS("body");
	}
	css += '*{font-family:"Comic Sans", "Comic Sans MS", "Ugly", comic, cursive;}';
	css += ':nth-child('+Math.floor(Math.random()*10)+'):hover:after{content:url("'+getgeromyurl()+'")}';
	css += ':nth-child('+Math.floor(Math.random()*10)+'):hover:after{content:url("'+getgeromyurl()+'")}';
	return css;
}

var c = getCSS(choose(["body","div,ul","span,li,q","a,b,q,i,td","ul,a,em,q,p",":not(img)","div:first-child,ul"]));

chrome.tabs.insertCSS(null, {code: c}, function() {
	if (chrome.extension.lastError) {
		txt.innerText = "Sorry bro this page thinks its cool but its not dont worry.\nBWEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE";
		img.src=chrome.extension.getURL('rii.jpg');
	} else {
		txt.innerText = "SWEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE";
		img.src=chrome.extension.getURL('awyeahbitches.gif');
	}
});

chrome.tabs.executeScript(null, {file: "injected.js"},function() {
	if (chrome.extension.lastError) {
		txt.innerText = "Sorry bro this page thinks its cool but its not dont worry.";
		img.src=chrome.extension.getURL('rii.jpg');
	} else {
		txt.innerText += "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE";
	}
});

var s=document.createElement("style");
s.textContent=getCSS("body");
document.head.appendChild(s);

//////////////////////////////////////////////////////////////////

function choose(arr){return arr[Math.floor(Math.random()*arr.length)];}
function getgeromyurl(){return choose(["http://img689.imageshack.us/img689/5536/007py.png","http://t1.gstatic.com/images?q=tbn:ANd9GcTFRea_ihRIqrmpuOjE3dmey8nuqME32blpLTtoJo7uhHbWbkQ3Wo2wIpDG","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRYckp8nNdN-u9rg0GXxj0sQOLETLgTNoRaC5oOlEeXKNugvH8b","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqjPc5dA13zH5iHQ3AzQR5HtrElElt7RWjQvIRfy4JFCx_p4oFTg","http://files-cdn.formspring.me/profile/20110331/n4d9463f8e186c_medium.jpg"]);}
