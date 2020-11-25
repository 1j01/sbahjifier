
var txt = document.querySelector('#swe');
var img = document.querySelector('#sbahjimg');

function getCSS(selector) {
	var css = "";
	if ((Math.random() < 0.05)) {
		css += `
${selector} {
	-webkit-appearance: media-mute-button; /* try to trigger render engine bugs :) */
}
`;
	} else {
		css += `
${selector} {
	filter:
		saturate(${Math.floor((Math.random() * 7055))}%)
		hue-rotate(${Math.floor((Math.random() * 360))}deg)
		${((Math.random() < 0.5) ? "invert() " : "")}
		!important;
}
`;
	}
	if (selector != "body") {
		css += getCSS("body");
	}
	css += `
* {
	/* web font comes first so it's loaded for <canvas> usage */
	font-family: "ComicSans", "Comic Sans", "Comic Sans MS", "Chalkboard SE", "Comic Neue", comic, sans-serif !important;
}
@font-face {
	font-family: "ComicSans";
	src: url('${chrome.extension.getURL('comic-sans.woff')}');
	src:
		url('${chrome.extension.getURL('comic-sans.woff')}') format('woff'),
		url('${chrome.extension.getURL('comic-sans.ttf')}') format('truetype');
}
:nth-child(${Math.floor(Math.random() * 10)}):hover:after { content: url("${getgeromyurl()}"); }
:nth-child(${Math.floor(Math.random() * 10)}):hover:after { content: url("${getgeromyurl()}"); }
`;
	return css;
}

var c = getCSS(choose(["body", "div,ul", "span,li,q", "a,b,q,i,td", "ul,a,em,q,p", ":not(img)", "div:first-child,ul"]));

var showError = function (error, bwe) {
	var errorString = `${error.message || error}`;
	if (errorString.match(/chrome:\/\/|host permission/i)) {
		errorString = "Try a different website!";
	}
	txt.innerHTML = `
	Sorry bro this page thinks its cool but its not dont worry.
	${bwe ? "BWEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE" : ""}
	<br>
	<small>${errorString}</small>`;
	img.src = chrome.extension.getURL('rii.jpg');
};

chrome.tabs.insertCSS(null, { code: c }, function () {
	if (chrome.extension.lastError) {
		showError(chrome.extension.lastError, true);
	} else {
		txt.innerText = "SWEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE";
		img.src = chrome.extension.getURL('awyeahbitches.gif');
	}
});

chrome.tabs.executeScript(null, { file: "injected.js" }, function () {
	if (chrome.extension.lastError) {
		showError(chrome.extension.lastError, false);
	} else {
		txt.innerText += "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE";
	}
});

var s = document.createElement("style");
s.textContent = getCSS("body");
document.head.appendChild(s);

//////////////////////////////////////////////////////////////////

function choose(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function getgeromyurl() {
	return (typeof browser !== "undefined" ? browser : chrome).runtime.getURL(choose([
		"many-images/gerome.jpeg",
		"many-images/gerome-dance.gif",
		"many-images/jerome.jpg",
		"many-images/jerome-spin.gif",
	]));
}
