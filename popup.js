
var txt = document.querySelector('#swe');
var img = document.querySelector('#sbahjimg');

function getCSS(selector){
	var css = selector;
	if((Math.random() < 0.05)){
		css += "{-webkit-appearance:media-mute-button}";
	}else{
		css += "{filter: "+
			"saturate("+Math.floor((Math.random()*7055545))+"%) "+
			"hue-rotate("+Math.floor((Math.random()*360))+"deg) "+
			((Math.random()<0.5)?"invert() ":"")+
		" !important;}";
		// css += "{}";
	}
	if(selector != "body"){
		css += getCSS("body");
	}
	css += `
* {
	font-family: "Comic Sans", "Comic Sans MS", Chalkboard SE", "Comic Neue", comic, sans-serif;
}
@font-face {
	font-family: "Comic Sans";
	src: url("comic-sans.woff");
}
:nth-child(${Math.floor(Math.random()*10)}):hover:after { content: url("${getgeromyurl()}"); }
:nth-child(${Math.floor(Math.random()*10)}):hover:after { content: url("${getgeromyurl()}"); }
`;
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
function getgeromyurl(){return (typeof browser !== "undefined" ? browser : chrome).runtime.getURL(choose([
	"many-images/gerome.jpeg",
	"many-images/gerome-dance.gif",
	"many-images/jerome.jpg",
	"many-images/jerome-spin.gif",
]));}
