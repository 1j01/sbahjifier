var {runtime, tabs} = typeof browser !== "undefined" ? browser : chrome;
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
	src: url('${runtime.getURL('comic-sans.woff')}');
	src:
		url('${runtime.getURL('comic-sans.woff')}') format('woff'),
		url('${runtime.getURL('comic-sans.ttf')}') format('truetype');
}
:nth-child(${Math.floor(Math.random() * 10)}):hover:after { content: url("${getgeromyurl()}"); }
:nth-child(${Math.floor(Math.random() * 10)}):hover:after { content: url("${getgeromyurl()}"); }
`;
	return css;
}

var c = getCSS(choose(["body", "div,ul", "span,li,q", "a,b,q,i,td", "ul,a,em,q,p", ":not(img)", "div:first-child,ul"]));

var showError = function (error, context) {
	var errorString = `${error.message || error}`;
	if (errorString.match(/chrome:\/\/|host permission/i)) {
		errorString = "Try a different website!";
	}
	txt.innerHTML = `
	Sorry bro this page thinks its cool but its not dont worry.
	<br>
	<small></small>`;
	txt.querySelector("small").textContent = `${errorString} (error occurred in ${context})`;
	img.src = runtime.getURL('rii.jpg');
};

tabs.insertCSS(null, { code: c }, function () {
	if (runtime.lastError) {
		showError(runtime.lastError, "tabs.insertCSS");
	} else {
		txt.innerText = "SWEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE";
		// inject JS after CSS so that font is loaded for <canvas> usage
		tabs.executeScript(null, { file: "/injected.js" }, function () {
			if (runtime.lastError) {
				showError(runtime.lastError, "tabs.executeScript");
			} else {
				txt.innerText += "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET";
				img.src = runtime.getURL('awyeahbitches.gif');
			}
		});
	}
});

var s = document.createElement("style");
s.textContent = getCSS("body");
document.head.appendChild(s);

//////////////////////////////////////////////////////////////////

function choose(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function getgeromyurl() {
	return runtime.getURL(choose([
		"many-images/gerome.jpeg",
		"many-images/gerome-dance.gif",
		"many-images/jerome.jpg",
		"many-images/jerome-spin.gif",
	]));
}
