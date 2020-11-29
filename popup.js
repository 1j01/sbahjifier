(async ()=> {

window.isPopup = true;

const {runtime, tabs} = typeof browser !== "undefined" ? browser : chrome;
const txt = document.querySelector('#swe');
const img = document.querySelector('#sbahjimg');

function getCSS(selector) {
	let css = "";
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

const c = getCSS(choose(["body", "div,ul", "span,li,q", "a,b,q,i,td", "ul,a,em,q,p", ":not(img)", "div:first-child,ul"]));

const showError = function (error, context) {
	let errorString = `${error.message || error}`;
	if (errorString.match(/chrome:\/\/|about:\/\/|host permission|Cannot access contents of the page|Try a different page/i)) {
		txt.innerHTML = `
		Sorry bro this page thinks its cool but its not dont worry.
		<br>
		<h1>Try a different website!</h1>
		<br>
		<small></small>`;
	} else {
		txt.innerHTML = `
		Something's not working right...
		<br>
		<h1>What's happening?</h1>
		<br>
		<small></small>`;
	}
	if (context) {
		errorString = `${errorString} (${context})`;
	}
	txt.querySelector("small").textContent = errorString;
	img.src = runtime.getURL('rii.jpg');
};

// const tab = await browser.tabs.query({currentWindow: true, active: true})[0];
// if (!tab) {
// 	// "Can't run on" is sentinel
// 	showError(new Error("Can't run on this page."));
// } else if (tab.url.match(/^about:/)) {
// 	// "Can't run on" is sentinel
// 	showError(new Error("Can't run on about: pages"));
// } else {
tabs.insertCSS(null, { code: c }, function () {
	if (runtime.lastError) {
		showError(runtime.lastError, "error occurred in tabs.insertCSS");
	} else {
		txt.innerText = "SWEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE";
		// inject JS after CSS so that font is loaded for <canvas> usage
		tabs.executeScript(null, { file: "/injected.js" }, function (results) {
			if (runtime.lastError) {
				showError(runtime.lastError, "error occurred in tabs.executeScript");
			} else if (results.length === 0) {
				// "Try a different page" is a sentinel string
				showError(new Error("Try a different page! (No frames to inject into here)"));
			} else if (!results.every((result)=> result === "success")) {
				// "Try a different page" is a sentinel string
				showError(new Error("Try a different page!"));
			} else {
				txt.innerText += "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEET";
				img.src = runtime.getURL('awyeahbitches.gif');
			}
		});
	}
});
// }

const style = document.createElement("style");
style.textContent = getCSS("body");
document.head.appendChild(style);

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

})();
