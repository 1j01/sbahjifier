(()=> {

const {runtime} = typeof browser !== "undefined" ? browser : chrome;
const filenames = [
	"54nk.gif",
	"boots.jpg",
	"c4irbJrl.jpg",
	"c9flU3f.png",
	"economy-dunk.jpg",
	"EcononyBarack.png",
	"generic-face.png",
	"generic-face.png",
	"generic-face.png",
	"generic-face.png",
	"generic-face.png",
	"generic-face-flashing.gif",
	"gerome.jpeg",
	"gerome-dance.gif",
	"HE-HE-HE.jpg",
	"hug-animation.gif",
	"ibnweG8.jpg",
	"image0.jpeg",
	"image0.png",
	"image2.jpeg",
	"image4.jpeg",
	"image5.jpeg",
	"image6.jpeg",
	"image7.jpeg",
	"image10.jpeg",
	"image11.jpeg",
	"image12.jpeg",
	"image13.jpeg",
	"image14.jpeg",
	"image15.jpeg",
	"image16.jpeg",
	"image18.jpeg",
	"image19.jpeg",
	"image20.jpeg",
	"image21.jpeg",
	"image22.jpeg",
	"images0.jpg",
	"images1.jpg",
	"images3.jpg",
	"images4.jpg",
	"images5.jpg",
	"images6.jpg",
	"images8.jpg",
	"images11.jpg",
	"images15.jpg",
	"images16.jpg",
	"images17.jpg",
	"images18.jpg",
	"images19.jpg",
	"images23.jpg",
	"images24.jpg",
	"images25.jpg",
	"images27.jpg",
	"images30.jpg",
	"images31.jpg",
	"images32.jpg",
	"images33.jpg",
	"images34.jpg",
	"images36.jpg",
	"images37.jpg",
	"images40.jpg",
	"images41.jpg",
	"images42.jpg",
	"images43.jpg",
	"images44.jpg",
	"images45.jpg",
	"images46.jpg",
	"images48.jpg",
	"images50.jpg",
	"images51.jpg",
	"images52.jpg",
	"images54.jpg",
	"images55.jpg",
	"images56.jpg",
	"images57.jpg",
	"images58.jpg",
	"images59.jpg",
	"images60.jpg",
	"images67.jpg",
	"images70.jpg",
	"images71.jpg",
	"images73.jpg",
	"it_keeps_happening.jpg",
	"i-told-you-dog.jpeg",
	"jerome.jpg",
	"jerome-spin.gif",
	"SBAHJ_shirtbanner1.jpg",
	"squirrel.jpg",
	"thanks-giging-are-you-serious.gif",
	"tumblr_mcpvd6iUmo1qlp5ejo3_400.png",
	"whut-if-i-tould-yu-abaout-stairs.jpg",
	"wonk.png",
	"moneytile.gif",
	"moneytile.gif",
	"moneytile.gif",
	"moneytile.gif",
	"moneytile.gif",
	"moneytile.gif",
];

// this improvis our smelling and grammer.............. BETTTRRRRR!!!!!1.?
const uc = false;
const replacements = [
	[/./ig, function (m) {
		return m.toLowerCase();
	}],
	[/[ei](?!\b)/ig, function (m) {
		const c = ((Math.random() > 0.4) ? m : choose("ei"));
		if (m.toUpperCase() === m && uc) { return c.toUpperCase(); } else { return c; }
	}],
	[/[uo]/ig, function (m) {
		const c = ((Math.random() > 0.4) ? m : choose("uo"));
		if (m.toUpperCase() === m && uc) { return c.toUpperCase(); } else { return c; }
	}],
	[/[aeiou]/ig, function (m) {
		const c = ((Math.random() > 0.001) ? m : choose("aeiouooooaeuiy"));
		if (m.toUpperCase() === m && uc) { return c.toUpperCase(); } else { return c; }
	}],
	[/[b-df-hj-np-tvwxz]/ig, function (m) {
		const c = ((Math.random() > 0.001) ? m : choose("wrtpsddffghjklzxcvbnm"));
		if (m.toUpperCase() === m && uc) { return c.toUpperCase(); } else { return c; }
	}],
	[/[dg]/ig, function (m) {
		const c = ((Math.random() > 0.3) ? m : choose("dg"));
		if (m.toUpperCase() === m && uc) { return c.toUpperCase(); } else { return c; }
	}],
	[/\.+/ig, function (m) {
		return choose([m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, " ", "....", ".......", ".....", "..........", "......"]);
	}],
	[/their|they're|there|thare|thair|tha're|the're|thei're|thier/ig, function (m) {
		return choose(["their", "they're", "there", "thare", "thair", "tha're", "the're", "thei're", "thier"]);
	}],
	[/'ll/ig, "'m"],
	// [/[b-df-hj-np-tvwxz]/ig, function (m) { return ((Math.random() > 0.01) ? m : choose("wrtpsdfghjklzxcvbnm")) }],
];

const choose = (arr)=> arr[Math.floor(Math.random() * arr.length)];

function modifyText(text) {
	for (const [regexp, replacer] of replacements) {
		text = text.replace(regexp, replacer);
	}
	return text;
}

function getimageurl() {
	const paths = filenames.map(function (name) {
		return "many-images/" + name;
	});
	const path = choose(paths);
	return runtime.getURL(path);
}

// randomly replace images
for (const img of Array.from(document.querySelectorAll("img"))) {
	if (Math.random() < 0.01) {
		img.src = getimageurl(img.width, img.height);
	}
	if (Math.random() < 0.01) {
		//img.style.webkitAppearance="media-mute-button";
		//s=document.createElement("style");s.textContent="*{-webkit-appearance:media-mute-button;}";
	}
}

// add things to the page, mess with some css
for (const el of Array.from(document.querySelectorAll("*"))) {
	try {
		if (
			el &&
			el.nodeName &&
			el.style &&
			el.insertAdjacentElement &&
			el.nodeName !== "BODY" &&
			el.nodeName !== "HEAD" &&
			el.nodeName !== "HTML" &&
			el.nodeName !== "STYLE" 
		) {
			if (Math.random() < 0.001) {
				el.style.backgroundImage = `url("${getimageurl()}")`;
			} else if (Math.random() < 0.01) {
				el.style.backgroundColor = `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`;
				el.style.color = `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`;
			}
			//TODO: Make number of images vary inversely with the number of elements on the page.
			const img = document.createElement("img");
			img.src = getimageurl();
			img.className = "SBAHJ";
			if (Math.random() < (window.isPopup ? 0 : 0.002)) {
				el.insertAdjacentElement(choose(['after', 'before']) + choose(['begin', 'end']), img);
			} else if (Math.random() < (window.isPopup ? 0 : 0.005)) {
				img.width = Math.random() * 600;
				img.height = Math.random() * 600;
				el.insertAdjacentElement(choose(['after', 'before']) + choose(['begin', 'end']), img);
			} else if (Math.random() < 0.1) {
				//el.style.webkitAppearance="media-mute-button";
			}
		}
	} catch (err) {
		//...
	}
}

/////////////////////////////////////

for (el of Array.from(document.getElementsByClassName("SBAHJ-static-canvas"))) {
	buttun(el, el.getAttribute("aria-label"));
}
for (el of Array.from(document.querySelectorAll("button,h1,h2,h3,.button,input[type=submit]"))) {
	buttun(el);
}

function buttun(e, text) {
	if (!e || !e.style) return;
	text = text || e.innerText || e.value || e.getAttribute("aria-label") || e.title || e.id || e.name || e.className || "bro..........";
	text = modifyText(text);
	// if (!e) {
	//     console.log("Nothing here!");
	//     return;
	// } else {
	//     if (!e.style) {
	//         console.log("Not an element!!");
	//         return;
	//     }
	// }
	const canvas = document.createElement("canvas");
	canvas.className = "SBAHJ-static-canvas";
	canvas.setAttribute("aria-label", text);
	//canvas.style.border="1px solid #d3d3d3";
	//canvas.style.webkitTransform="scale(2)";
	//alert(getComputedStyle(e).pixelWidth);
	if (Math.random() > 0.5) {
		e.style.background = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
	}
	//e.style.border="0";

	//canvas.width=300+Math.random()*100;
	//canvas.height=30+Math.random()*30;
	//canvas.style.width=`${400+Math.random()*400}px`;
	//canvas.style.height=`${130+Math.random()*10}px`;
	//canvas.width=canvas.offsetWidth+31;
	//canvas.height=canvas.offsetHeight+41;
	//canvas.style.width=getComputedStyle(e).pixelWidth;
	//canvas.style.height=getComputedStyle(e).pixelHeight;
	const s = choose([0.5, 1, 1, 2, 2, 2, 3, 1, 3, 5, 1, 1, 1, 1, 2, 2]);
	const w = Math.min(e.offsetWidth, innerWidth * 0.8);
	const h = Math.min(e.offsetHeight, innerHeight / 10);
	// console.log(getComputedStyle(e), getComputedStyle(e).pixelWidth, getComputedStyle(e).width, e.offsetWidth);
	canvas.width = w / s;
	canvas.height = h / s;
	canvas.style.width = `${w * s}px`;
	canvas.style.height = `${h * s}px`;
	//e.parentNode.appendChild(canvas, e);
	const ctx = canvas.getContext("2d");
	ctx.save();

	for (let i = 0; i < 16; i++) {
		let x, y, x1, y1;
		x = Math.random() * 50;
		y = Math.random() * 50;
		if (Math.random() < 0.5) {
			x1 = x;
			y1 = y;
		} else {
			x1 = Math.random() * 50;
			y1 = Math.random() * 50;
		}

		ctx.fillStyle = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
		ctx.globalCompositeOperation = (Math.random() > 0.5) ? "xor" : ((Math.random() > 0.5) ? "copy" : "lighter");
		ctx.fillRect(x, y, canvas.width - x1 - x, canvas.height - y1 - y);
	}

	ctx.restore();
	ctx.font = `${((Math.random() < 0.5) ? "normal" : "bold")} ${15 + Math.random() * 20}pt 'ComicSans'`;
	// ctx.font = `${((Math.random() < 0.5) ? "normal" : "bold")} ${15 + Math.random() * 20}pt 'Comic Sans' 'Comic Sans MS' 'ComicSans' 'Chalkboard SE' 'Comic Neue' 'comic' 'sans-serif'`;
	ctx.lineWidth = 5;
	ctx.strokeStyle = 'rgba(0,0,0,255)';
	ctx.textAlign = choose(['center', 'left', 'center', 'left', 'right']);
	ctx.textBaseline = choose(['middle', 'middle', 'middle', 'middle', 'middle', 'middle', 'ideographic', 'alphabetic', 'bottom', 'top']);

	ctx.fillText(text, canvas.width / 2 + Math.random() * 20 - 10, canvas.height / 2 + Math.random() * 20 - 10);

	const onclick = e.onclick;
	const href = e.href;

	e.parentNode.replaceChild(canvas, e);
	if (onclick) {
		canvas.onclick = onclick;
	} else if (href) {
		canvas.href = href;
		canvas.onclick = function () { location.href = this.href };
	}
	// it bettor now
}

//////////////////////////////////////////////////////
//////////////////////

function modifyTextOnPage(modifyText, searchNode=document.body) {
	const {childNodes} = searchNode;
	let index = childNodes.length;
	const excludes = ['html', 'head', 'style', 'title', 'link', 'meta', 'script', 'object', 'iframe'];
	while (index--) {
		const currentNode = childNodes[index];
		if (
			currentNode.nodeType === 1 &&
			excludes.indexOf(currentNode.nodeName.toLowerCase()) === -1
		) {
			modifyTextOnPage(modifyText, currentNode);
		}
		if (currentNode.nodeType !== 3) {
			continue;
		}
		const text = modifyText(currentNode.data);
		if (text === currentNode.data) {
			continue;
		}
		const parent = currentNode.parentNode;
		const wrap = document.createElement('div');
		const frag = document.createDocumentFragment();
		wrap.textContent = text;
		while (wrap.firstChild) {
			frag.appendChild(wrap.firstChild);
		}
		parent.insertBefore(frag, currentNode);
		parent.removeChild(currentNode);
	}
}

modifyTextOnPage(modifyText);

return "success";

})();
