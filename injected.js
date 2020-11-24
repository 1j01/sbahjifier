

a = Array.from(document.querySelectorAll("img"));
for (i in a) {
    if (Math.random() < 0.01) {
        a[i].src = getimageurl(a[i].width, a[i].height);
    }
    if (Math.random() < 0.01) {
        //a[i].style.webkitAppearance="media-mute-button";
        //s=document.createElement("style");s.textContent="*{-webkit-appearance:media-mute-button;}";
    }
}

// add things to the page, mess with some css
a = Array.from(document.querySelectorAll("*"));
for (i in a) {
    try {
        if (a[i] && a[i].nodeName && isChillElementType(a[i].nodeName) && a[i] && a[i].style && a[i].insertAdjacentHTML) {
            if (Math.random() < 0.001) {
                a[i].style.backgroundImage = `url("${getimageurl()}")`;
            } else if (Math.random() < 0.01) {
                a[i].style.backgroundColor = `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`;
                a[i].style.color = `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`;
            }
            //TODO: Make number of images vary inversely with the number of elements on the page.
            if (Math.random() < 0.002 || ispop) {
                a[i].insertAdjacentHTML(choose(['after', 'before']) + choose(['begin', 'end']),
                    `<img
                        src="${getimageurl()}"
                        class="SBAHJ"
                    >`);
            } else if (Math.random() < 0.005 || ispop) {
                a[i].insertAdjacentHTML(choose(['after', 'before']) + choose(['begin', 'end']),
                    `<img
                        src="${getimageurl()}"
                        class="SBAHJ"
                        width="${Math.random() * 600}"
                        height="${Math.random() * 600}"'
                    >`);
            } else if (Math.random() < 0.1) {
                //a[i].style.webkitAppearance="media-mute-button";
            }
        }
    } catch (err) {
        //...
    }
}

// // add things to the page
// a = Array.from(document.querySelectorAll("div"));
// for (i in a) {
//     if (Math.random() < 0.02) {
//         a[i].insertAdjacentHTML('afterend', `<img src=${getimageurl()}>`);
//     } else if (Math.random() < 0.005) {
//         a[i].insertAdjacentHTML('afterend', `<img src=${getimageurl()} width=${Math.random() * 100} height=${Math.random() * 100}>`);
//     } else if (Math.random() < 0.1) {
//         a[i].style.webkitAppearance = "media-mute-button";
//     }
// }

/////////////////////////////////////

var els = Array.from(document.getElementsByClassName("SBAHJ-static-canvas"));
for (i in els) { buttun(els[i], els[i].text); }
var els = Array.from(document.querySelectorAll("button,h1,h2,h3,.button,input[type=submit]"));
for (i in els) { buttun(els[i]); }
// var els = Array.from(document.getElementsByTagName("button"));
// for (i in els) { buttun(els[i]); }
// var els = Array.from(document.getElementsByTagName("h1"));
// for (i in els) { buttun(els[i]); }

function buttun(e, text) {
    if (!e || !e.style) return;
    text = text || e.innerText || e.value || e.text || e.txt || e.title || e.name || e.className || "bro..........";
    // if (!e) {
    //     console.log("Nothing here!");
    //     return;
    // } else {
    //     if (!e.style) {
    //         console.log("Not an element!!");
    //         return;
    //     }
    // }
    //var e=document.getElementById("buttun");
    var canvas = document.createElement("canvas");
    canvas.className = "SBAHJ-static-canvas";
    canvas.text = text;
    //canvas.style.border="1px solid #d3d3d3";
    //canvas.style.webkitTransform="scale(2)";
    //alert(getComputedStyle(e).pixelWidth);
    if (Math.random() > 0.5)
        e.style.background = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
    //e.style.border="0";

    //canvas.width=300+Math.random()*100;
    //canvas.height=30+Math.random()*30;
    //canvas.style.width=`${400+Math.random()*400}px`;
    //canvas.style.height=`${130+Math.random()*10}px`;
    //canvas.width=canvas.offsetWidth+31;
    //canvas.height=canvas.offsetHeight+41;
    //canvas.style.width=getComputedStyle(e).pixelWidth;
    //canvas.style.height=getComputedStyle(e).pixelHeight;
    var s = choose([0.5, 1, 1, 2, 2, 2, 3, 1, 3, 5, 1, 1, 1, 1, 2, 2]);
    canvas.width = parseInt(getComputedStyle(e).pixelWidth) / s;
    canvas.height = parseInt(getComputedStyle(e).pixelHeight) / s;
    canvas.style.width = `${parseInt(getComputedStyle(e).pixelWidth) * s}px`;
    canvas.style.height = `${parseInt(getComputedStyle(e).pixelHeight) * s}px`;
    //e.parentNode.appendChild(canvas, e);
    var ctx = canvas.getContext("2d");
    ctx.save();

    for (var i = 0; i < 16; i++) {
        var x, y, x1, y1;
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
    ctx.font = `${((Math.random() < 0.5) ? "normal" : "bold")} ${15 + Math.random() * 20}pt 'Comic Sans' 'Comic Sans MS' 'ComicSans' 'Chalkboard SE' 'Comic Neue' 'comic' 'sans-serif'`;
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'rgba(0,0,0,255)';
    ctx.textAlign = choose(['center', 'left', 'center', 'left', 'right']);
    ctx.textBaseline = choose(['middle', 'middle', 'middle', 'middle', 'middle', 'middle', 'ideographic', 'alphabetic', 'bottom', 'top']);

    ctx.fillText(text, canvas.width / 2 + Math.random() * 20 - 10, canvas.height / 2 + Math.random() * 20 - 10);

    var onclick = e.onclick;
    var href = e.href;

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

// this improvis our smelling and grammer.............. BTRRRRR!!!!!1.?
var uc = false;
findAndReplace(/./ig, function (m) {
    return m.toLowerCase();
});

findAndReplace(/[ei]/ig, function (m) {
    var c = ((Math.random() > 0.4) ? m : choose("ei"));
    if (m.toUpperCase() === m && uc) { return c.toUpperCase(); } else { return c; }
});
findAndReplace(/[uo]/ig, function (m) {
    var c = ((Math.random() > 0.4) ? m : choose("uo"));
    if (m.toUpperCase() === m && uc) { return c.toUpperCase(); } else { return c; }
});
findAndReplace(/[aeiou]/ig, function (m) {
    var c = ((Math.random() > 0.001) ? m : choose("aeiouooooaeuiy"));
    if (m.toUpperCase() === m && uc) { return c.toUpperCase(); } else { return c; }
});
findAndReplace(/[b-df-hj-np-tvwxz]/ig, function (m) {
    var c = ((Math.random() > 0.001) ? m : choose("wrtpsddffghjklzxcvbnm"));
    if (m.toUpperCase() === m && uc) { return c.toUpperCase(); } else { return c; }
});
findAndReplace(/[dg]/ig, function (m) {
    var c = ((Math.random() > 0.3) ? m : choose("dg"));
    if (m.toUpperCase() === m && uc) { return c.toUpperCase(); } else { return c; }
});
findAndReplace(/\.+/ig, function (m) {
    return choose([m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, " ", "....", ".......", ".....", "..........", "......"]);
});
findAndReplace("their|they're|tha're", "there");
findAndReplace("'ll", "'m");
//findAndReplace(/[b-df-hj-np-tvwxz]/ig,function(m){return ((Math.random()>0.01)?m:choose("wrtpsdfghjklzxcvbnm"))});

function isChillElementType(tagName) {
    return tagName !== "BODY"
        && tagName !== "HEAD"
        && tagName !== "HTML"
        && tagName !== "STYLE";
}
function findAndReplace(searchText, replacement, searchNode) {
    if (!searchText || typeof replacement === 'undefined') {
        return;
    }
    var regex = typeof searchText === 'string' ?
        new RegExp(searchText, 'g') : searchText,
        childNodes = (searchNode || document.body).childNodes,
        cnLength = childNodes.length,
        excludes = 'html,head,style,title,link,meta,script,object,iframe';
    while (cnLength--) {
        var currentNode = childNodes[cnLength];
        if (currentNode.nodeType === 1 &&
            (excludes + ',').indexOf(currentNode.nodeName.toLowerCase() + ',') === -1) {
            arguments.callee(searchText, replacement, currentNode);
        }
        if (currentNode.nodeType !== 3 || !regex.test(currentNode.data)) {
            continue;
        }
        var parent = currentNode.parentNode,
            frag = (function () {
                var html = currentNode.data.replace(regex, replacement),
                    wrap = document.createElement('div'),
                    frag = document.createDocumentFragment();
                wrap.innerHTML = html;
                while (wrap.firstChild) {
                    frag.appendChild(wrap.firstChild);
                }
                return frag;
            })();
        parent.insertBefore(frag, currentNode);
        parent.removeChild(currentNode);
    }
}

function choose(arr) { return arr[Math.floor(Math.random() * arr.length)]; }


var filenames = [
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
function getimageurl() {
    var paths = filenames.map(function (name) {
        return "many-images/" + name;
    });
    var path = choose(paths);
    return (typeof browser !== "undefined" ? browser : chrome).runtime.getURL(path);
}

/*
// makme speld BTRRRRR!!!!!1
findAndReplace(/t/ig, "f");
if (Math.random() < 0.1) {
    findAndReplace(/[a|e]/i, "u");
} else if (Math.random() < 0.1) {
    findAndReplace(/[e|i]/i, "o");
} else if (Math.random() < 0.1) {
    findAndReplace(/[a|e]/i, "o");
} else if (Math.random() < 0.1) {
    findAndReplace(/[j|o|u|w]/i, "y");
} else if (Math.random() < 0.5) {
    findAndReplace(/[v|b|n|m]/i, "l");
} else {
    findAndReplace(/[g|h]/i, "q");
}
if (Math.random() < 0.001) {
    findAndReplace(/ /g, "");
    findAndReplace(/\w/g, "SWEEEEEEEEEEEEEEEEE");
}
if (Math.random() < 0.1) {
    findAndReplace(/\s/g, "");
}
function findAndReplace(searchText, replacement, searchNode) {
    if (!searchText || typeof replacement === 'undefined') {
        // Throw error here if you want...
        return;
    }
    var regex = typeof searchText === 'string' ?
        new RegExp(searchText, 'g') : searchText,
        childNodes = (searchNode || document.body).childNodes,
        cnLength = childNodes.length,
        excludes = 'html,head,style,title,link,meta,script,object,iframe';
    while (cnLength--) {
        var currentNode = childNodes[cnLength];
        if (currentNode.nodeType === 1 &&
            (excludes + ',').indexOf(currentNode.nodeName.toLowerCase() + ',') === -1) {
            arguments.callee(searchText, replacement, currentNode);
        }
        if (currentNode.nodeType !== 3 || !regex.test(currentNode.data)) {
            continue;
        }
        var parent = currentNode.parentNode,
            frag = (function () {
                var html = currentNode.data.replace(regex, replacement),
                    wrap = document.createElement('div'),
                    frag = document.createDocumentFragment();
                wrap.innerHTML = html;
                while (wrap.firstChild) {
                    frag.appendChild(wrap.firstChild);
                }
                return frag;
            })();
        parent.insertBefore(frag, currentNode);
        parent.removeChild(currentNode);
    }
}

*/

