

a=document.querySelectorAll("img");
for(i in a){
	if(Math.random()<0.01){
		a[i].src=getimageurl(a[i].width,a[i].height);
	}
	if(Math.random()<0.01){
		//a[i].style.webkitAppearance="media-mute-button";
		//s=document.createElement("style");s.textContent="*{-webkit-appearance:media-mute-button;}";
	}
}

// add things to the page, mess with some css
a=document.querySelectorAll("*");
for(i in a){
	try{
		if(a[i] && a[i].nodeName && isChillElementType(a[i].nodeName) && a[i] && a[i].style && a[i].insertAdjacentHTML){
			if(Math.random()<0.001){
				a[i].style.backgroundImage="url("+getimageurl()+")";
			}else if(Math.random()<0.01){
				a[i].style.backgroundColor='#'+(Math.random()*0xFFFFFF<<0).toString(16);
				a[i].style.color='#'+(Math.random()*0xFFFFFF<<0).toString(16);
			}
			//TODO: Make number of images varry inversely with the number of elements on the page.
			if(Math.random()<0.002 || ispop){
				a[i].insertAdjacentHTML(choose(['after','before'])+choose(['begin','end']), 
					'<img src="'+getimageurl()+'" class="SBAHJ"'
				+'>');
			}else if(Math.random()<0.005 || ispop){
				a[i].insertAdjacentHTML(choose(['after','before'])+choose(['begin','end']), 
					'<img src="'+getimageurl()+'" class="SBAHJ" '
					+'width="'+Math.random()*600+'" height="'+Math.random()*600+'"'
				+'>');
			}else if(Math.random()<0.1){
				//a[i].style.webkitAppearance="media-mute-button";
			}
		}
	} catch(err){
		//...
	}
}
/*
// add things to the page
a=document.querySelectorAll("div");
for(i in a){
	if(Math.random()<0.02){
		a[i].insertAdjacentHTML('afterend', '<img src='+getimageurl()+'>');
	}else if(Math.random()<0.005){
		a[i].insertAdjacentHTML('afterend', '<img src='+getimageurl()+' width='+Math.random()*100+' height='+Math.random()*100+'>');
	}else if(Math.random()<0.1){
		a[i].style.webkitAppearance="media-mute-button";
	}
}*/

/////////////////////////////////////

var nl=(document.getElementsByClassName("SBAHJ-static-canvas"));
for(i in nl){buttun(nl[i],nl[i].text);}
var nl=(document.querySelectorAll("button,h1,h2,h3,.button,input[type=submit]"));
for(i in nl){buttun(nl[i]);}
/*var nl=(document.getElementsByTagName("button"));
for(i in nl){buttun(nl[i]);}
var nl=(document.getElementsByTagName("h1"));
for(i in nl){buttun(nl[i]);}*/

function buttun(e,text){
    if(!e || !e.style) return;
    text=text||e.innerText||e.value||e.text||e.txt||e.title||e.name||e.className||"bro..........";
    /*if(!e){
        console.log("Nothing here!");
        return;
    }else{
        if(!e.style){
            console.log("Not an element!!");
            return;
        }
    }*/
    //var e=document.getElementById("buttun");
    var canvas=document.createElement("canvas");
    canvas.className="SBAHJ-static-canvas";
    canvas.text=text;
    //canvas.style.border="1px solid #d3d3d3";
    //canvas.style.webkitTransform="scale(2)";
    //alert(getComputedStyle(e).pixelWidth);
    if(Math.random()>0.5)
    	e.style.background="hsl("+Math.floor(Math.random()*360)+", 100%, 50%)";
    //e.style.border="0";
    
    //canvas.width=300+Math.random()*100;
    //canvas.height=30+Math.random()*30;
    //canvas.style.width=(400+Math.random()*400)+"px";
    //canvas.style.height=(130+Math.random()*10)+"px";
    //canvas.width=canvas.offsetWidth+31;
    //canvas.height=canvas.offsetHeight+41;
    //canvas.style.width=getComputedStyle(e).pixelWidth;
    //canvas.style.height=getComputedStyle(e).pixelHeight;
    var s=choose([0.5,1,1,2,2,2,3,1,3,5,1,1,1,1,2,2]);
    canvas.width=parseInt(getComputedStyle(e).pixelWidth)/s;
    canvas.height=parseInt(getComputedStyle(e).pixelHeight)/s;
    canvas.style.width=parseInt(getComputedStyle(e).pixelWidth)*s+"px";
    canvas.style.height=parseInt(getComputedStyle(e).pixelHeight)*s+"px";
    //e.parentNode.appendChild(canvas, e);
    var ctx=canvas.getContext("2d");
    ctx.save();
    
    for(var i=0; i<16; i++){
        var x,y,x1,y1;
        x=Math.random()*50;
        y=Math.random()*50;
        if(Math.random()<0.5){
            x1=x;
            y1=y;
        }else{
            x1=Math.random()*50;
            y1=Math.random()*50;
        }
        
        ctx.fillStyle = "hsl("+Math.floor(Math.random()*360)+", 100%, 50%)";
        ctx.globalCompositeOperation = (Math.random()>0.5)?"xor":((Math.random()>0.5)?"copy":"lighter");
        ctx.fillRect(x,y,canvas.width-x1-x,canvas.height-y1-y);
    }
    
    ctx.restore();
    ctx.font = ((Math.random()<0.5)?"normal ":"bold ")+(15+Math.random()*20)+"pt 'Comic Sans' 'Comic Sans MS'";
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'rgba(0,0,0,255)';
    ctx.textAlign = choose(['center','left','center','left','right']);
    ctx.textBaseline = choose(['middle','middle','middle','middle','middle','middle','ideographic','alphabetic','bottom','top']);
    
    ctx.fillText(text, canvas.width/2+Math.random()*20-10, canvas.height/2+Math.random()*20-10);  
    
    var onclick=e.onclick;
    var href=e.href;
    
    e.parentNode.replaceChild(canvas, e);
    if(onclick){
    	canvas.onclick=onclick;
    }else if(href){
    	canvas.href=href;
    	canvas.onclick=function(){location.href=this.href};
    }
 // it bettor now
}

//////////////////////////////////////////////////////
//////////////////////

// this improvis our smelling and grammer.............. BTRRRRR!!!!!1.?
var uc=false;
findAndReplace(/./ig,function(m){
	return m.toLowerCase();
});

findAndReplace(/[ei]/ig,function(m){
	var c=((Math.random()>0.4)?m:choose("ei"));
	if(m.toUpperCase()===m && uc){return c.toUpperCase();}else{return c;}
});
findAndReplace(/[uo]/ig,function(m){
	var c=((Math.random()>0.4)?m:choose("uo"));
	if(m.toUpperCase()===m && uc){return c.toUpperCase();}else{return c;}
});
findAndReplace(/[aeiou]/ig,function(m){
	var c=((Math.random()>0.001)?m:choose("aeiouooooaeuiy"));
	if(m.toUpperCase()===m && uc){return c.toUpperCase();}else{return c;}
});
findAndReplace(/[b-df-hj-np-tvwxz]/ig,function(m){
	var c=((Math.random()>0.001)?m:choose("wrtpsddffghjklzxcvbnm"));
	if(m.toUpperCase()===m && uc){return c.toUpperCase();}else{return c;}
});
findAndReplace(/[dg]/ig,function(m){
	var c=((Math.random()>0.3)?m:choose("dg"));
	if(m.toUpperCase()===m && uc){return c.toUpperCase();}else{return c;}
});
findAndReplace(/\./ig,function(m){
	return choose([m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m," ","....",".......",".....","..........","......"]);
});
findAndReplace("their|they're|tha're","there");
findAndReplace("'ll","'m");
//findAndReplace(/[b-df-hj-np-tvwxz]/ig,function(m){return ((Math.random()>0.01)?m:choose("wrtpsdfghjklzxcvbnm"))});

function isChillElementType(tagName){
	return tagName!=="BODY"
	    && tagName!=="HEAD"
	    && tagName!=="HTML"
	    && tagName!=="STYLE";
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
        if (currentNode.nodeType !== 3 || !regex.test(currentNode.data) ) {
            continue;
        }
        var parent = currentNode.parentNode,
            frag = (function(){
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

function choose(arr){return arr[Math.floor(Math.random()*arr.length)];}
//TODO: get HD images? Only sometimes. The thumbnailing can be "nicely crappy" sometimes.
function getimageurl(){
	var imgurls=["https://www.google.com/logos/2012/bram-stoker-2012-res.png","https://lh5.googleusercontent.com/-vdvzA2X0oXQ/AAAAAAAAAAI/AAAAAAAAAAA/zrXhQgG274s/s27-c/photo.jpg","https://lh5.googleusercontent.com/-vdvzA2X0oXQ/AAAAAAAAAAI/AAAAAAAAAAA/zrXhQgG274s/s27-c/photo.jpg","http://www.mspaintadventures.com/sweetbroandhellajeff/moneytile.gif","https://www.google.com/images/nav_logo114.png","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQHP1yt1Cdo7qhdMj12mX3DRdo8fAkQAC1I3CrsFYXFr2-_qUkrsGheePah","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFzJDQIkc62Ubv3GSEQgFsyyXCLRUkGDFWxs61FrGT34Aq_R3Uw","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT_FTKw4X-9UrTwN-HpzbTQrGHfEq7IuTAfi-8zyf82T_S7TkyIQYNfxcui","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLcywwElxoGQfccfZWAoXFkkiPu8Jbl0hXRgnamvYAkSZPY84izAdo1udi","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSNZSznMJhp_vdqiAkvVcCRg08bdc8FuG4TEypZIPbJcWlTjqGK","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSoeFGCF_8FfDWE1JRpxMwCwARyoB0Qy2medGpy_y_9uyUQ-7bpJQ","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTu5dM9IByQFNroniRnBhu5Lb9yE2LT8k6guxJdx4PMGhzOto0whugzZ3ox","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT9Dq6FhKDBymtc0X3-avKg6_ewsHNHHPDe7m0Z-AK30OQUK9ADzQEH2qXe","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQiRqTDfLuqI99PDFVj3dmSymLqiRbulyr8JFaxPLvVN3ZH1kNQUZh3I92a","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5CAPFbQnFStpT2DROI_vq967hltUYZswvuXdgOSdATgFTJ7lji397OycX","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTTU19s47Ml1P45Rvcr6fxQ_MhX9YOcJ8kVcuM9Freik19pxwgAbAdF6F0","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQHZPdXkIHrX2iR-SjEH_3KFqnQQX-PiAzyfe9x_uydjvSgcALh","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSNwaTOfaEQltz7gSP2TllrBhQlMdgFHq4-_l5WbZW-wsPOwtegTiUxCY4","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTORiE001FiK3ETV3IgjGyibP0HSGeXsWhlZWK2b4S7XkO-RMtP","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQhwFbg5uf4LknxWVUtODa6y6GCc2vxOg6gcvz0Pfwx5vT0uNeo","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQB-YQpAaMCHkZolAhKMdceE4bOIxvZ2_ltOZ3hfryg08fMGYUj","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTjIhtDplIhAs639Ethe9sYD1ZgfB7g4BOFjv_AjqjVyWydpQGpFw","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9tpqUGkie7CYp26o2iDbeN0aAeHhjayf6LgaGET7M067suy8t-XJi3Hc","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQFRlTkH_KFqAZqKgu0Xfb0EtqwsEA1SDg4fxPAscEaLbn_QXRC","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgsjcpcQp_yTlxKwp9nK31KvQPR-ayL34w_ooExwQR3TPKM7N9","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT0G4p2oGD5zJLoEmZnWRqHfeG4BKaUN66hkCOGp_0DpnGSemShQzjoP8k9","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQIuPFHWmn9cEEuUOvTofv5yyx0-Qk67cnIXrhHLf4q3ZNSCHbpK3220Mh","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGT_-oeB4DzPizV7-clhpQcsS84FDq_9nItRg0KgMZ6z7x-fUoYf7ZZ78","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSyLHO6rAfsF4opzljK57al8Yw_jzmEUjnVdbmgMg7DDsvmXynXo-89XLJg","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRZ8U5PdZPbMqgLlzuVtHKlfp5-pG24Gw324JsT-F1C6dg06fbyLi4Y4lw","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR_iEQmRoKEmAsCPCKvmxToHamoIqwb0tpRGarpP4SiMOJK3Sn97RrVS0gL","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTts07W1wuoHriK9rzT7vHrFhgOYlyUiHFXHnL_CxUeOo8ijoisXA","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrTTtHJKw6Rm-SsAljQorP2uwnUs2K3LjjwPJCtNq2zA7HOUPQgKoqPow","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQczrI0rMthBt64C-hSC3dNr0N3AHuvFA_Hj4W_7TyuC2kymcxwrg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4dE3tjmykD2iRO4LFMyLTcuebC7kZwYSbZ7G_Ad32GxMIFHOx","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTFdhHW6dC5x1dSLFniwFL8Eq_7k1mW0pVziJvnVmpvVc1gxxtvAPzNLix4","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTXjUQiuFQMT0AAK_EqVGVgrnnG-daSdojMNr6LmC4VpjyR1VnnMwZ1Uf-4","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ5Cu8waUGYngR6ncUK01bQvF5KGKg24zaWjgjVRuz31ipoyV7V","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQiV9rbC87vSHf6y3P6RpPAhZXIAmiFiTPW0YFYXNKdMyxucqRG","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIx55yaXKor70w7D2DsYqxCwWq1KKpdegfB2ShuXtiPKSh3K9sJQ","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS-5MyhDj7R6ePCUYxtpRkLqmR0Nc3Y3uaQN5RG-AGAN1Egq7Zh6u1GYr6w","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTmx62mC6m9n-zxH6UMu5zYCJlsqi3vPNqwIwQEe2h2dJlys7-aFA","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2wNSWpA5ctFzY9lJSNVOhKddGdx0uyXS3qj1bvG3Ss4k3jU40","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQe99vNnKhV5x_len83dMwnbm1NB28HcexHbVLrLXVwWmQplp5K","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSR_FIy0Z72aS8pxtQAt2xhUgZ94-jI6RWLolXv5KBdfCy8Y0JECA","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQiezog0v7y1auOaZyQtI3Mj4S_SM0V2HjlMDEN-VXBaC2FiPLJjw","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT8Nvx4WABN-HqA56ErjNU8MDhgyg9tL_6QW33CUM65FNaf2A4EhOZQ5JR7","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQnn9jZlQ_Uy9Q09QazCCm2lYFkyad6iwl-rzK1i_IdrGMFL9Fb","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3RrJh3W_4st2l1q4lH427tqPfPDYc1ZR_r0LDlRrnrPWvkiP5Hg","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR01SrJLu-xngj49Fs3cSa1xAd59W5V8dcDzEmsf5Ovk_ICK8UD","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRi0lrQN5cnLo8BKCRdke-CgZSbBfY1ffMy4GBWiYdlivWZT1p9mg","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRbGvuLcIU8dCky7ha1jIefVWM0XIkw5ZXuN4eDFEBSqOXilStkvCq1Xtpe","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOezbGxKpHQNrS4FFdTfc48JCN-9DY37bbIAZpZF5tLr_UmsiG","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKMfoljU4Hxxv2gvjacGu5bilTSEBhhYDt0YXwRj2qLTsrv1PKpzqXpcs","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTsyZbWD8EZgtkE-X-t4k8wl0HISRBhlPaj_ydIDadUYLMuKTC1","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKfEAeTVD5rJxZ85-av_5U59yKP_PW8CSu1xvB6p-ITeYaIoY4_WHnrRaOjg","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQuXC5z-U4MTwp44fWpyDupgAmPsfxeoVAYAvMgVPCn6EyFnleJdw","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ84i-UhSPqjYQKWuAAytYhAY8LB-kIp6HrTC-BTBgQ9VM9TxCF","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRW5du-dqukcbplWyFw5Qq4rIS7ia3Zouv9tVXg9pgKC-KQNusPqa-pQlUK","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-8uYd_jCHxhWpXPTsvItceat7WUF-KF7iXZTFoN3yOOBktcC0dQ","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZFgDW94azqmLFi4B2T4YPvfom9PxEemRHPJEubA8eBS7jRr6rZytO2Bf7","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdVg2lZtT7KOMqlKIPac3z64dcqLUjKcHybLHoHvtMpTQAIQzg","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUkAfrgV-WqBY4E397OxckCyzze-7LDcOr2WDai0SlQK95NJ_6CQ","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS40HN_tTrdek0jAmzFNWGwXZNNbgaxAz3FA058yOC6zYJHCQ3g","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsVcIPOAHvoFlOdIosHyHc_76nVuldP4lQaknwF-5CHH_iknJO44ZNrRQ","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQI1YsT8Pj7IcVBv_hmkR4cCWk8-kycTYkpeXB2bp7JBN-j5Zdu","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT1YYWBQdOWouyNDJ-FB2IYJKAIIHiEhFkTM9bXfw76rHqa6bNW","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ4ituUUFRgOnsRCxGgWtr8EczKnnd29O9pg6UT4vpT32p16OiVng","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRHga7iviWhtIcjbXv9HgZgBRElNnsKbAWU_sY30C-vyTd0EdHL","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSJiJ15sFI84MEJpLUbD-IHx3VDwViXbBDxVVW16BAdUYyHHPOR","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQuI831hIq8zsuK07BdEMUOebCvWjo1x7QlnwpncS8PgqKrUnRVAw","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTpQvOsFa5G-Ap5PNgy1iYSKG2Pt0437j2q9YJYW8xg79oYyll6ZrZMgNk","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmslQ1MYHCW26uvEfL9VTDdcDwe4E2J7fE7d2B3GJ3zUoCQI-j","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcReoglJox096d3plHsjFlNtpH74eAQJ8x-SpRLVKpcX2iS7e74g","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7YCIZoi9HsaheUt-UeZlz3G--xRolgtAejJYLtaqxVHmNHuiDk6q3qhQG","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJWZRiwARCETGDMAWSMekTr_6OM_uCRS4SQnsl6iTWT6G43bNWg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiPgF0pCFJH7T110Qt3wdaZw0A0hkaYMptZ2dq6pOo5RZm9_AHFl1CqiZi","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRLj7E-lApsYE7Yi-95F8NM1c_bptm0xBtk6BSu__PT1g0Lvfvqw","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSJ_TpKB7oT0AVIj7bpLtosS_4YRT4O9xvIlSt9tcCHwMnQ7ZTR","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQEf_scadPjID6Hr_AwhhLTlPUEOVgyYl_jiXZ_0Ovh9d-9q4369jzdyCQq","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMAg6YNtYlvXTE1QGfu0oiRFboDHLloDsZkKGDtQe73xLZwmxnf3jVQWE","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ2s-7lHYVy90OmIHa3LM-ot6csfyOVETSO6BDHfQ3wiHccqr_04Q","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPkzpHTYH12wcMPzav5N39RfnyR2HU0NEGjCp3EMLW3RtPSbzY","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS1PEhVsVyu4f_LVJn85h-iBbwnKomWvcPS5Lw2HI1tqGgnKWj5LANeYhN1","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS9tCsIZ515zXF7U2EpnrHqXkJBDJz0uAJ--ZtXpX7-hV0nlxKt","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVT7DCHWmCjsSoTMHMQuVa6TLgrg7ely7C0jux0LVzlYf4Gum3yQ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzG_5yd3k51G0XYWAopK2F7rVIZuZjnUt-KefUwBW3W95MbFP2","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTGGE2_on5cvLnpGSfh5SO6aXVuLKuwXjHOERFWQwjigrZf01CU","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShsoICVuDOdK1TbKfHLGLqU5RetfnvvsMf8PHfg13skQhZ13zOhvmpPByd","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRgUZeyp2Jb4JycH-rzToZ5oYpD3BM-Z5nGAjwwLo_z-IZc1WTc_w","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTjl0MeJX8Rqs7ZToByEJzWcUU9SSeA9Z-EDXzey4am0rKONVGTQA","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSzJOX44jRyjempwmSJ_s06a5PX4SUtx5yOpKQph9MGApnCc5VhlQ","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLpZz1T-psaLTRdM-x4ms3nwfLcS_SHhv3pYoLhMpLVmup3CbL80nwEQg","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTX2HluAKSTQULhq7-t1mrfeEwHUXCZuDItfsuAKsHtsTP1kJxP6U4MUnsa","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSqntNuoCzPCk9FWWx1JfS2NvDvAqCMJzv6t1HzQ5H4pISXhzLF","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTeB6kt2QlTR5yBahRP2MMYkRmvLNEEiZZb7ebPEb1AGEnGSL6Q","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIu2BAl_BeGoOhbXTlN61wDm4tUpcEtcJiiShVct5f2TFHXaEGoM82_kk","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2ygXrEbmU-OYkZfh5I3uply2fX8Bgn4wPiA1-jBVC0DdDzX1","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9MrDkM3TyqOePeHeSGprC9lU37UGcvizmqc4GLi9YnWrucCuUCGm5K3WfTA","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSBeePXWu7DqRx3HVyvKse2HLf45i2KPetls4Vcga_tdvStOzCtKg","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-hsb3uWsFW2jNODwdKWy7ECaxJD_8L_8AcZ9xYnNEiqcJcMqR2Q","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHmgV_sZXls8VgNbZuT-5QSQkzXnvithGiKH1mPzywk6AtvlNp","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQEza3saNE527CHGinPmCqqEZRlcTMXIaLeLNDVTyFfsPyhjprV8g","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZz2Mv2qzYA7V1cW57ggc3a4hA6NiFD5aZtg7jbHxnXrti_5v","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSXENpbbizzp5nUkEBh8_RXF2o3M1UP4oOuuxHFclB5VblkC6q14-M_Hjdi","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSiAvtkQIrKPn8Ceas-LbDlsVihuGflMuPQUL-ImgN-qmS1AwctWg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbT3MSFtzRnpEgpHwHVpIII6u0lNaMpsgmelaOPTsuUzjPM4LP7A","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTOb3yJYxOGJ5zI_OpcgcOb5Qk3yd4NWLkafGYfJI4mzg3P-VwXU_6QCW-","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNcQPIlFaQEhZlE66EpmmZo2rFiG6wSFbFyOrFXgFUugxkm0DBxA","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDSzhFWn_Vj6hQdqWa6-TWjFe1kx8qHyqvRzFDAKK5_4dGZbui1Wdkb2k","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSawPcAlEvTENe8mJ-og38nlQcgXRIpTx4K7G4ZyzGlQpAcB-xawA","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR7XEm6H9_2NwX9djQ-pSESvTqdxYhUP416p1qX7O3M4x77bkLC","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTqrzP_jdxuFpUjRzvCarbnfN3NgjP0tIexUAB-FBNhaMOwAyxDRA","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQoKqYTQ12bCkk7vBiWSocIpq5CwXtKmWEJ6pNRDd_yfqjtZYIY0aGDu8c","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR3DfQ4fvvOb4jREHZnuS1B74puu-fEsGR1vGVfkcPc6Z4XQyY7Bw","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRMzoYDBMDoUmjuhEhJ5194CxKrQhebRovYHMhzbe7kY0RONKzt","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTCk8MvkmlLONphpKlx8zsl4B8oePEqmnGC6Y2XEa0-lIpDqREq","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSF4GBy7W0BYieuaJ0kaXohrQfbWBQDecjL-wqGJggVRv6pigfL","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR9DTx_O4swTzrk4pJx0uzNOPh5EArSiU_mReUCij5ky6Ew2NJv","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTrcuibahW-k2fTgBvqE89JbeIcpg2qJ9svNhHLcg4-LYmDHRP_Flu5ge-SrQ","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQfChZu_tqHS_dnkbJypJjKCfSxxk582yNwaBGh2KvPCyMeb0VVNiZpScuG","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQsbbuup8yuSZELr5yt3aDXEl9MjBs3FfnsQluRvAVftCnsiNcMK3xbZP7d","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSZCkAmAVnoTm3-O3DnAbBI0PfdfxtTq1pXfEN8PWfAoTq6FI6iRo267Z7ZTQ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGewKTMNMubDtlqx_yw9Fz2Uj8O4Yq8qCcsnB0NER-x8aNXK_EQeboSNk","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhDXFJIR2C0DKBwQ1spxWT5kXpKCNadeXnxqfrFDSHPntQ9k3hcg","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQtLnmmIsq1P0w9Ab2WQWe0siPpVmb_6C2SO1yS46bvP4xEpI93Nz6jF2Y","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSj_81H6N0MbU9MMnDrkx4Gaiyq4O9wmBC1uP-VprobXUIiSKGf","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSmj-1mUXokAF7P940U5OsOosIMDEY1rYf7vnl6WeSnNjz5fGu18A","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ9yv2MBS-BILhHWdv9NKlqR5SGjRG5i7o9N9siwy8vm2x4EooNKA","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHYphrE8bQvjVGvP_CrgVZN_VgZe-_Qrp0WiNp4_1iU5kOH5XLwdN0aVjX","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkBEKC6Q6msduXYiDz0Qo9AyRJ0f7kIpvD9jegthsSQnDrdx7eJQ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMdd1l6cegJ_7HIv73B1SLafCdOh0ihoZMb5lDtCSqxC1Iv5-Ig","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwzB_FCYnqsqUgt07PykyyrwlZ5MbSfQ89g1sGqILeIsdYOMU4xA","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSX8BskeFlUdne6_UTkBFSe2mdVPR-j0NRMp6tk2c_DRcD-aMxbyw","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQbbHCYkecYAgxRT0akrORYBhmyTd9mKatyJkfBq_qGDTXjv_lerDKkU3xW","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGZ3d6Chum3ZXheNltpgnURgLTjeTE-eTye4RTPUI2WyJHf8YbjrKtwjg","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgAFaRuU-fTo-mRYDZAQn9JQPC96eLhvc67mxtnG2PbYegNjPR9A","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuU0dYqpQFnB5rv71oZFIpndlSrjyGHRYMVEAqi2EVkZjsoYyf","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2fG6Z8ZTv_DuuqV5lVaA9UOacBea5E4bYYJDqoeEMNSsoZ7MONQ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQna2BmCtB_p-MFJG63OpVks58OeXuBQoQarTrQxkyrrcZN4ZnYLw","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwi6snW1_olByPdrYMX1KDC0iOXzRenby9cRY7IDiLPMMLHJV7HA","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7VElAZhPtxYqg7qgqQtQjbjaZzK8b3Nq53TrqWQLuAgLrLnNay-o7afM","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTh0jDdMn5-XD9GAHOquP8C9fSWHyCF3FYikc55dyt04CMfkRy6nDpsYbJf","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7l3ho-WJtNv2hWICLOOhymHmIU7lNOst0EJfyOwcdG5tZ1zSAfA","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTHSJGyVe6FCUkvlDD27I39MWvYzfIEy0B4-zfgPYPypSDjcfGkyYOpPUw","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQiySqxiYnsjwlLeG29F_64tI7Xf1OkqQhWvFZE17at7qg04LQK","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSU9gy8ain23k5Ceze_F-JksENt4DYf40vjlJXT7axJK-w6Op580BKk_rab","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSx6nDrWm4jw5GVqT37jNDhd5w-7t3m2gFlNAu9n1l6Xr1Dh5vRVCunl14","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSaezanz_lITrAQhhQmVkrJtd_teK9J2krGGg4E7RgLk_AlfzyU6g","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTyMNGFYDyZ67juzFwYrSAHONuqljjdbtbA1SJzcehTnJcsKbkj4Q","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQJYv0arbjrKoYYgNCzhDjRSpKeO3iHUGdu0LWm6jGYTxNPaIL-L5hYugk","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTuSnoK5sHIHEDY5fHs4pOEVdnIosASAj1JvLq0ngnnm_NDMDEL","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcScNwL50m1TOSTMymWcZgrFPGMP3h_xTdIO86sIGt9svfgXhv05GfYPlXSL","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSENwhQZvmnFmkBkXGGvZ_Xvq5SaZsl7E072Z8FUYKsr85zv2x9ZA","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTGqjV5azmCF-OIIFuKYDVwNEs-C2qtVngjAYvEqQDZB7bmcKLbBQ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdk41HV5livyvkTAgjUt7Wi6JQUHpXSx731gM0USzDWhhZJe9APG0I1AA","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlIxHYPvrvnegllom_ufVds33RVYLhLXSNBeXvMG3x0aOj2waMkg","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT52rRYPbzjoq34Nz55pZwNMaOVxyge88DqV-rtXTxEG2QLfQNgzg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMNb6YugEYde_egm_cPNL3wrck19o-FMkmQuklXJEe8PhUIS9unxT0Qgkv","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQYhu8NXYAta1F5NgKIAfsoQM2BI096r8m-ldgtmjJIeOHVfaMz","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRKKh1_aVN14LGkszMg8ihYOYqGoN8PLzcH2L5alMNI3bGtPMdm6g","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRU5tGNKq47D5OeM1FLgnd3CZUn1_33QszeJRu_hVPMs4w4SC0t5A","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTPgUG6SfSf7SlrDJiUQlSuIluxifNc_s7R8bsC-BzsT0L5AsKF","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTOGVPOuhVnRRx4gNP75oG6XItE9x79fmVI3QoaEl3okP2JYVO6","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZOtYuFfzDhFsimQZrASPckeR9fIDeYhkFgyLO97hOT-VjqH9J","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSqh074rBvUNMDhtKwryjkJSmiPwwdW6r_HRH0xpyyvxyRbYVgcGQ","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSx-t08oap3KphwxXbpMcT25a87YYGCqTqwXBpVSGQw2xPjBRcktw","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ8KB38YbSs19W1mH6v4Yf2B5du_GX7dp2-wIKvlBy8Td89MZAiiQ","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZrSRxPU01Vg46NV1l2uI2biRZln4fZtzwGIpN7Jn406HKpyR0oa6mH3UP","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRzQdPTfU5Ghsdz4486ZFSp86aL-Q4mjR3QifY7YQlL6Bpa2Dmtsg","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQCaudkkr88EU6c61Mpyf39orh1M3pGz1_InosvQvxY0yOhoPvV2L6Fb0rC","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTytcCCziajEDhUz8zNrV8471T_54YRKS9oqjraxmYVn-xsj8zV3w","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF4_TMLzHJx-2_CCJezvflPqu32OLDRNsPljYWxBg_0s9NzGMo7w","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRX05HTXTJXoUoHmw6Tk63SXG26bzQDLdf6CGZ17cqepulS3ic_aw","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTI8b6K-fYctYo9Asbm20qLrb65j7cH-g1iJAHF1FZX4HBv0Ek1XOKpq7tY","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTV61VHHUaa3zxX20SfD0n0JWIYx3n4W-idITBq2VL7Oo1JvkcFHw","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTD2wwB5QuyqVZCw1r4wfzO1DxMHje898N6KOqLiFsQYX6gLzfmug","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlxzqNb4oKAJRkuqlOhpE7T5Js9UB3V6u8UY_XzBg3kNYTHBmi0g","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmESH_AxIfs_hUMceWxp0Bpp_RJLzq1jcPGL-rx6UmcAchG6ODnUedRJ0","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ358IVVv3Agi4Snsp64pXyvc6bm_DOsvu1_2bOOuJb-uEgTCMW","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRC_kLsAd3e46zmDV58TxPhdFwIlhybV2_RQQtiKRxPQGIgwbn1YweiAAyl","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRlTK3JKitbk3cb_xlBcMBoezoxN-0W0ewcMa6yOr8B2NL01Cb2HA","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSRSBCExyLegF_0o3NNmW4rHTjpa_3Vbfe4hD0blRzSSvEdJBCt3d8eRSV","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW8CviIMzZY-6_GFONpWrrFucHsFU2TWAoqXfConMBVk-AH3uy","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRQetxQqsKzufXucPSfir9-w-CfXhspzb4t51UU8Jh5vBNJ83BW","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR43Di-jNdBRmtu0kvYZku4uDGsbbm0IFnwLgluqoeVskfUwKqx-A","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSWzIvYAbZ3pxJWryc2R_eb4rYKOVZ7HnAT5cQBiz6vvBgAIT9q2A","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQKMJydSFUR9zMXFkU3MdK2MSys8wYiGpo50l701D76yZYkc5XuQ7-iAI_","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRCWe1sBQv97AEQ781ODxx4fl-8BFymESToj35sbVzH39wJiHx3","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSnYyFsffA9_F3i0Iyx8nksR0cRRIxB0HO4WVawpLFdD4Q6lNkshwAKJs9-","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDdN0eqoqmYb0rmBCmuUQkIdIfNqXwm1xy3Rwg1-xQEfShrrkRXS2acHQ","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQTOoOQ63o8SaGAL9vSr7pnJlKLW7iaK1W0CuzCs-2InDlGUfwQ0mhGLHMu","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-XhUenefibocd0cMOc3uYtWWimiNJO8qecWPPoyHt585CEWIXQ","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZlA86ZkzV8ss4RGRrHAAUraar0v_Nve2OKhPRp-vjVD5gG3Cg1w","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQcUnasEmQh2d_pvEMycZwuw875nrD8w9pUM-lkSn8yetJsoDsmtg","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSyKsaJ6AXl-yeg2SWvbej3oGtlz9nWlNY4rz0eH62BC_nspGvKBTj_voSu","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTe7A1ZjXY1t54o8jX6mYNE857Yp5EkDbuhVUNbq9wx9LY1cp_aeg","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQMyW0F-HeuSfE-Dq1JQriat49hJCOq4a0NoS_97SywGwD9b9zZFQ","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTVZQSMrhul03L3uFAIBlD8-f2azDwW9LFS-Hom-yZP1j3Bl7uUSg","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT4lD51cjs_IhLIl2_0OmNmckvWDMKHOpByNuszoNgcp_xPsIst","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQnVScMMALu0kZ2fhjgByzRJADbSeIJVKloiz7V3PYYYsNcmyOliQ","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQEWuvIPqURJ8n6_1dv5M7uBLthxQfm0FhfXxqLbsDphEROcFJs","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oaVBnk0uuYr6h_I6xEJUFAZB9DTYDXPpZdemeQK8W_88aXBdHg","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9NNdn71Ia0I7B-1CnQ2mhmGUb2iTT16M8QRVcAANYwsU5L1Mm","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMzVN7u9nmYXg4DPhBsWuVtM91mnTruoHwTBuC8X26u6W6LKqn","https://www.google.com/images/loading.gif","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9HIK-caramKuk5r72wJhP60t2bOZx_VIHTLv1KTptBrBxfG2pujy7Z5wv","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTApsna2sUAxaIUAcydG_xdMt5HjkmnbcK-9zkEWAkSJBj9R8UVwg","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQgvVsL1G34vOOTXTs07Tpx_GvxWsiA2b1L2-2FbDoWKj4cM51J","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSh3H97c-EVcJnrOnewO-FOBbEEseZJsyksl-6laYG7qtQpiMnRWgLDFCMQsA","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRktvFpgXvm_-Qv28TvBF09S4-v0g7TcPpMbMg4ndsh_to-gXMUdA","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT2XzSAH6gPymyBM2Pyr1MFteYTTXkPG6wBtOu7wI6DyJZSdndoYg","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSWfSuBLbnm4ixwa5vVplqBOLFZVCsDErsxG1nHvVvp334wcocVA","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0pNAY7QcUOhcz15FckfFqotOoyphtR87biVP2k8uBC6BWriENw","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRJpUovFhNVbTfdrx5gKLQ3Mqid8r6cdno4LRAZELgLWBk0QG9BpGC3NTk","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdiTwRcMWYDxkqyS8wZ4hTb_Fg5dM6MNsAwt-FSCRWOK30sqe2PQ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT249Ash-kmbn78Z7sKVIJqQM5IFolaNk8wQZnhG_RgepJ_Kab6","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4egGnrE94ogY1IpB83G2qM92hUveCWDSbzFJGpu0-srkUE28y","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRm0sBfbHns1QuncpZrpi8mVuFvVZ9fFgnHBNIGRWCmtAt-TqHdgQ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzNgHMznNw5mKuRWfysX7fxrn-bl6nDTw6o3QjJdagc7OOYe5TLzwcxBs","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSSEHehcJRH6IQy9RzJ031gQZgib_M2v-LFfj427USfE04NQKwAjX5nSdcI","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLrtZtRJLClVFwtIC_hIUPlINVoSY4xUzfSN9-7Ls2isOgnlJDb56Likc","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQ-HFkZN-vw9pNg0KoW4gBSM_tZ3NrCAwTIxBP6IFMfFmoAfnt1eaFeyA","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUnGuWFAQeu2epn66Y0zF98iCE_-D6bBkq0UjBcvO6CpJTFAPf8gY53HY","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTe-X-MWKznQ9UxyyMVf-Va-Y0fSuvGGPt0BX9y4BzTVLN-Zlcxkvrj-zU","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTCfhpkbSOfbC-0AfC4sW314g4SkvRAeRpjBvhdSSaU-_W5OjjQBY4dXGf2","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTppUifRoRqX54I9zQZjabk7JbnNYyT-56Q4eEsKiBIsIHcoeWO","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5b-biV-QeHznGIM9WFfxh6NJCrlthUCnbFULDESXxTZFljOpYLxXNJ0Q","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSiS3dP-0XdPr97hUVnp_l8PmFmekXECePDEJfdxfzHXeAmdoTQ","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSD7SHrlVByE9myX9dHiFJhF2Za_BSsMTYSGqKSCnEUHTcuPyczi17zigzx","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY00nuznKZ5wZUBDlkYfGkOQPurSvzZM72nLFJOTFM9M2VHffy88xyqq0","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEqDYUJj47nzBEIuQfFzB-bJAMeMKXzfH_-cKUcpj5IKuqXUfx","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuYb7Gy7OLf-lYXc6lD84VuuFV4K-MsWhpVvNO8snxeJOT14VctzAnCFYr","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLVawl0zrJB5nQkEQ841w0zPjYHqRBDw6jWG-xeYZWW7uuKkiKv6bo5TY","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6sUE-WmXMLuS-XSY2aNCx33KgSOD5D_nrhip9v7warHOhryA","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRfmBOgz3FtPK_rCTGDq6ELWLT57MbB4dRmGWuwkMOYtNhsvs0n","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_hHJa1F3tBpzmax3zD8km0aGt3l2ok-6v8nS1Bb7-FsUyqWa4","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQvcKqYmgE1JraFGJkXCPVj22w6WUSezHjWeBOZRoZbahGGip9RfvRViqk","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7WBTEkB-VXJPuFMjQeEo1--gFKa359BmL6TCGF9JR2gwXUl9N","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTVZJjBBqQj1hTEnkLFpKUzqqAkUef87crJLP4rI0JK80fgsML0RdM33sua","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSVaU0gwkPfITEC8-qht1qe4EMKad7fZIo4AyQvOTVtPipw4p23Yw","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqkCtLZeEcMzjN4yK75QVrq5QVAVDc_tJ7GMQKo_fPAtT2SRvQa54-L1q","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT2XNXxuvQGX8Y9tOuyJwq5pyMgk3Q0dxzyiUiWFlHHOAb4EQvOuxjiF3c","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS-t52bv2makANIoZyMYYcityz4dYWKl0zhsCa4yV3vKXFVXazIEw","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRRYOTKylrkdrcn9WZ3GvnGMKcYZMxpAv59FRAQntSrQmmDaRj7","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6HEyPlIfd_lUAWQ0O-APBjlwkVa6JxjoufEloWAsLI7Y80aFzXg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP42RRdY9H_ztBxqG2Ld8OjeZYVi2w8iHBlHA69MfahhbgblHzVw","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRpG5Vj5vPkt9iGFqUd-kxzTGZfvxJpGWsJJmSc7cufS_P-zhZk","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDSBwxSyb5IwJ0D_uwW0tfTElMT0sQJrBw3jGuu6AzOrLWm-QrEg","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSLqP0ZG09vxIe_a2FAoveBGwy4RY9aXhk0QlaB-XFaDKABEB1rBw","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIZYKksN7rxbM4j-IGJ9YrpF5F9OoldburG0RD96rcYpg9YCH0Rwk-LG4","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT6gorgasj6n93RLsXL62jLT_61nfjHG9IBYg551C-VCuQwd2NKjuUQxlRw","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRlf0UEsMY7LhrL8ZVbP0647_r04b9LArbjpn9tIItITOD3causoQ","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXFtFhcjdd7jIOTNtTtsYX9Ghvrk2PK422esI2T4p9f8VGbt0t","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7_Rhmvv5lj9ZIkHZXGgyDdikQr3AWV_vf8AFZJX5nZRWOz0dsrXF55_5wQ","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRXtqBf-zjCZtRVRQ1NVMTRZIfJ-0QdLgn4jA5X3AX-oFYCSrWeeg","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTOMugjI2oECS8Ohbgf27ZlnhRPldmVVzwszy-2dZN7Rtc0txKg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwo33doR3wx-t1fKIWZZhP-FznfeXH4aNBdjDv5Wcl8YVYILskyA","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQahITHSpusOKHpatwbscqZFckof6iqxIST4ArSI2e64NNk8KHqIuRT7hE","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTBqlkwlEgG9AIo33FY-r45YrTq9qsEpiQtstQAB304nWpkJpVd2A","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTVD8Jmf5e5cZmSsrb4j9hDlYnC-Ve6tSVHztIFLbAtFLmmovR4jg","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSm23grhylj5bxfoczcV422huj3BCfGcpAtrSxLBrtcC5PaOKO5BIb7l553","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQXICVFgejT7CEtOh3RXTFbZB0Hbb_J-zvhHFGzHH87UyxVCA2Krg","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT72GAWusH51yFbQs0PSVYbb8h3-biKfgJMUFwmIKc8n0U_xHD3eA","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT14sLzK9pb5nY8nwjQJxhhDqEvBXLOGlD8jOzrH6JUl-kHEF2QSc2mGLdyFA","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSz9lhf0jGmRRtmt8bI3KkzlWWNghWajcnRTBffXQzlVLeD6g9F","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHA8qbuno2bIKh78vWcTmm4ZFX5NgzwbfioFxZ6JJi2SK2hTE_-w","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wS-hcZn2RF5y1OZwk251El2iFzWEKBffFkHCyGL3e-VKmbaL","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRkA1S3v3fnD9QUWMDgUgravQyTmEo_vuXFVyxyCpHG3VC0Ccx2TA","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQZ_Z1f08a-Uo8zzTyFTO1AhQUlt7Hzz4723X-n6cAaHQrVK_Hruw","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRwwD8k2GYN_os1qpagoDluKxG_adHQ1cOM0ark59xSjPf1Cd9ohw","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRU7ivOaTFx5siJ7woIKoD3uYsTkwVyVjG6MzSM6SS3ucLbKK2q_tZZKwU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmAI2tXh-nzLiduxGNYBhIQFQUgQu1-aXY5DL-7erbT60Q0UNcHw","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSiCKqPYU9omd-8aiSfeWibS98phNrwLJevlh30xY3cFw9pZfGNFydr2Nk","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkXnLSxPkYwmmFDXu2bfhhKQS85ktxdFPtXKWJ-O_ZzQpSpcpryXMH04sC","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSahpoapzKQmaDpfcdrloztJdaju74A2VEFagWVDz6ED5FLMymoew","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRH4IBJeopYkUNP3LnY2vcsi6p8CfBnmSWDk-PSPprYh_xrQnF0LKpZP7a5","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSFlW-qR0tL-EJoSDfJbbqEQ4J7YXqfQI5Mq1qcx8twA0UQVcAw","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3N2fvNzCK54G9ywV-tVO6SpnqRQYW5iJ193birp-M4e5Ke1dR","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQhqeKPagrK05B56jyL3NWwt2uQOAldU6OmmzLsSr1OhMMjGpUGsg","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT16sFl9JdrGMgK7TMY5MIKki-5Yx-vrBSbYNUYqt1fctjm2FBt7zBJW4s","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQAPcOWbuCl4JQI1QgaDv1LqYsYzHRh2wg21q0fJKEe92z2XTdsulc2R1g","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQUBoqVc3j_9akulaEA40i3-nCeG-8H6gFF5hp0zvwcFXS3DhdVp5kVj48","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTEQEQFS3IuMq2j2EpYepubPzNx5SpawQ_jITQ1cNUVrPL56IeQ","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRv7mfdyABkhOpaAlTUYiOcspC47B1CpPQqHmoDxh0Uc6qsrsRqUpI840U_","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTCgBhWj1QS1xstuvzkEaNI9H0oQ1g0mcghnX_g-lo6ucNnEcd8Gg","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS6oYZNV9H7UGGTsyytWWPawk2En4gVGq5Gu3ng0X5jnSKY51eY","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXlji8crFaWBqkDvbnPzwPHw2dcCmnA0JEvEXf4hBWugOKhn5","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLLyBHqihlPXbPF3dBhnQrZs6j--hkvia4hjFPpc8jTD0P67OX2Q","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkL8oN_-X1xPpeI0duI1yHuhwW2RipV2xduQ12pPE9GGkUDU8_2q7EUXu","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRtkpxW2uEGfNFUlr8m-YXpzqWzyjk0AC2MfJ1-aOf876Py_hzE","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcThjlNHcZqW1vgElaVnKBsG45_VO_EtO9ra3m2BwZPxifkz-z6aPNZNORU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSia3zcb27O5G0x_gyAK6HVQV10_RccqOqeOOMohQRLpB79SZR93w","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTK2bJoQ_5zaB458DhLLL9U0-J0Z9i99c7EExMoK9vY_5R3p7rs6Q","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVBw_GEtrulTAGIKzhBPRjwaC056sXzm_08yinqzXmFGMKyaR_","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQFJ8XXjhR5btljAs9PWHSIkgUx9nECC1V0mWuf-0qrgjdDlkSY","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNN89zJ8GHY3ZUzLX1EquMcuL0PDfBnc1xp70aafRhmlrDEDGWi-Kt5thDOQ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGdKFzazgdHUJRvfaGJqgq0tsKhXSIRhKd58fcg9yV2UCjOTMWoA","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq25XmEw3gHdyurVjZBN_lpT21zGPIsHLSAfKd3dcASAYdgsuC","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRzGaeo3NCsDcfWHG6rKh6Nzh6jjs64m5teb1YXfDpigteRiXdALk5ET5g","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBrDPK5JhNhtf0wx0LMPoQCARByd5gmhrm9u1puKD-as5XVXDIwg","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLro4qzHZWjIWEW2_VP1lVSMuLY0gfc175gE13Rz4W_bluZeQT6Q","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQW0FHTyQXiM3XzU3cf-KGdSFIE4iNRR0HYzKIe6gW5CvxFwcbW6J5A-LQ","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcReGm9w1BcCYFiY_yO5GlrzRGF4Igxn9IDGwjEbs7M98XYu3hLc8w","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQtiJwAncSMIk1Jrk3CfYBFX34yeJ8W0UMyjQDtKz9xiKVBBEXJQ","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS259WldL-Ceylsk6IhFh7qDtOsjOiUgKkAhvuPjpqE61WAXnrH","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTY7J3w8s5azWiVLDVznfQ50Y0aWPAxF-eLHMjaZHpKTp0NzbZrWA","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwUK0cPQ3WXWPnAvYhe7X-AGVAMD9yBheUUVdhru-lrIdzM6oM","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSJZk2YuWZgpRfxDyy0WQ9ksFBCNzoJOhmyemtk6Z-5lK9vR5nh","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_MtLL9-2SYVj-5GSROnQ9qj7v_UMzZy_KFDA6eSJ9obfccC66","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS7T2NAgVe7E85vT6u-l6S64KwQ-dmehRWfIIw7GGTv0C5CMH2lO0zEIS4oFw","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSouWkt6gXDGrRaY5CoW6yVlFHS9n4roBnHoc4YCDL1oKen6eGKsA","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTrv2rtAySch4NlQUYi4-HJvqaTf7svEJZpsx1V0l6E0cYDHxvFhD08Za0","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiERq3wlKuXekm46qo0CsSK-k6-dHQ3m_O7peuqKwuYHOF-r8Wiw","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiERq3wlKuXekm46qo0CsSK-k6-dHQ3m_O7peuqKwuYHOF-r8Wiw","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR7JYzEi6ggH_VBsHaqRQpDje2K0fecYTSfyHXERL-e1ewS-V4cP3fmNo4n","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg9ibD2xRUPK6ckmBBgaJcIYwj4rpODPuINAeaju5yMBQvWiG","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSbVDXUL0tyxAI8RPJhjJH2sF5N8a5fw62c_B3ws4F3d2K6eiLXFA","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRv90sKsDBmskeDg2OtdCq2Xpt96Wyd1pHkHf6tAMF7kON9cuvw","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1-LUk_XUuWigZGXS4p9wXz_LgOU06g3Vd50_kMABXqmfzg5PqSw","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRWqaT4nLqK6mYuWQQPy9GC1yPa_1tLaH18p012K49-J5K0BMjr","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8C6cjx6AMcX_nsUXWPjyDU1Yjiaw4px1IRxILBFSaasTyziy-yFeXmoE","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ6TXWfftv8Z8zg1JbzGruqxtdYt6anOM2uCI5uodgn8jm5m4H_ijO264Ls","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQeuFWfxQ2QdOy6CzPlwc7L_tpYD5E7EODdKPHoo91MZlg2UXs8","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSM20vbvmcLkjCoPAira5Mzkcbgw_ocmURtgPq_utOsW8EXgLCP","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRaWm0Tby2sJukCvPfn6KW2X0Gc__LZ1TsbzEGdwZhNL__0v105","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTvxEpo3gOZUMPt6PnrALA9Y3Z-G_kl6HeW7DRHm5wDoVnvVDoQJA","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS7-7qFJiMbElw2tm0ItFshftoOSaElPAy4Sn2oysWUn_6zJfiRUAHKYVY","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5mk6-Jwdsb5N_nXKGHPxaTXRg1-b1rjV-IhzZSvyXHxxvVdL70burEx82","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRKVPbg8ywglbqTLVd2AiiiUjYJVHffnxwjW6OepCDLXUPJiDIOwN8W_Tnh","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRdHaoUWZWpmdt96Hv0ywFLwXwYAYLZSZSOynZC0COgKkQ1wo2103PYbGQ","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSAt48G9t5iUwM1Ks0ndU43EDqZZq5OhVsTAqYcFABqEHpbquQq24YjRHY","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMKFff0HDcUHTdCEBulGLvde60Fo57dt8SQmQaYDfQjFuSab1Vxw","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8eYumZXuAgD0zWcDWkcr5VLN-YOR8fQpiimG-rwD3XiMxCbo9HA","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSIs11E5BHmnY7ycXnlFEN7uOzL9FOUoFNCikqaUwOSWFPZv3aemw","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRo3X4mPU_5lC_54i9mUYWJsoC-r_JFtifC307pWrDEPXEVJwRr","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRsx7E3qSQ3doV_6AP-ScZxqNwhOYrt5fcBBgmQC5vVF1jf8g72","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6u5co6zT0Yuz8uoPvZhjTputG_CbpujFvPzjm5ySNdOWm06XBFA","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMmo5sanu4kFG2RUwprkbC34kk4D06zS2I0N0iRZFyj1oiZFu0","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRLQ5FskYstQOBg5gQ6dANsp649Tz-lVrtnVaRsfihmuKjCu3Y","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQtGu-2twkUw_N3nAoOjm-6aHjCzlWPWiPIUZH5wdDhWogGjv2sd6DsZyo","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcThvUPPPZtVy10AxUuGuFiMABCyNg302NQnmx6XyoFqNRHxzV4P","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyxts0AF6LOoAIRPK_iuui_hDqHGSoi-eQ_atfO-I7lJ-w2EjQeOFcPSoE_A","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmkQ9P6LkRHsIc0XlNLUpwZBoO8D2uQPWFIQspKjaUAbdd8Eqmw","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLWGBtbZHFmbr5GPtqt4YGHAhidToL-a_R0AkIFoGIwAKFwyDBo3kQdPcD","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZA9AC9CgMoPFEN2pM9xAFxwkq002NEIqt3MIrhJG7NUmcXsRv","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSw5gCKlY847zIt0QBq26swEEpwPFbkxxPouG5Pd6eV9lcpFQhQe70fOEI","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRLYMU_gOlYXhCoUIjwJmwqUpfU2dgqY967dEm4tkkmV06HH9Bt5mE2NZJx","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxoyfZU-LF_3-i83jcvWQASTafISH_bS8tSShEOcEkr6Tj84_FUfrHwBs","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT6U6wATBPw6OYTxkTrxun26GlBFG1ekOY00ehlFEjCRzYm0DhWvA","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdnyYLT-8RPvVol6E6O0S2T9lOYezfJdHD0-j2KTQePcjd8Fyk","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQz9wcUFHy7DAmfwASZ8HJTy4NdOaZ7bAlMsxsJVj3WM7zweebfNw","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRiLq34aeGKOMqA81XU5RwfwY2hHjjPpSjIRNXnoW_ExHLDGaVF3ZwRnx4","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSWSk5qO9FVvS9NYlRIOUcg96biz_loh-fVm7hvfrD6LL7hE65m","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6XY760plMKVBmSyN48-xcOmVLRjrKVL85z4rQvmh1WnPA7-f_iRJ54jxg","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSFA7v5dOQx1CLNXnT-oShNHPptI8CPXNIACW-l4kmjd-I1dHu","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT8wk16axRRKC4vN_43DU1mu7FMzrXCuv9jAChaioP5S_1kuR0sow","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR6Bpoev5tRghGKkODvOssWE09_BBHZuFsT5j65aqBFNCLIDNip","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRUklqqq5uUvRhzolNyNFNso9hSJ_DB3btmVbsSMJjI9KYzfzhygw","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRlw7OgY3HcE_LydDw5uckqeLyueqijGXok7FlpY_7nP9BDky3quA","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR46DH0Gsdrko3ArE5ssch--5SwewH6ZvP9DeRHRZBUhBX0-4Gl","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxkmuZvgzkbB3G8L5fUFYPEt7fWCyDytBYRI4XxkpyoZq1OwRABg","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT120reXIfYkDEcB2pea-mDL_JfayyWo2QFg13WwOEqB6Wv-UJn3Id61WY","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSQUaDNsy7jnG2kw-g5VlMX5BvAi5WrOJlxODXySsXBADKiUkB6Uw4dMKs","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcShq5VUXYjDwu_1Fy0NUSe-zyNo9y59pecRNof9Lqt42g0Fjedr","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgvOMKGKup5cKm5y_IdJzlPnkMQW5qDoCZZHgC1hBP9ExeiOW7IXTDPdEB","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxF82EN34N8k4bzW1J9z30IbpKR2ZMisKWnSfsUK06una8ieIQfInQubB","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTsuQV_CnfyKGRme77NR-xGhaNmzCakcEEtssrY8KAHWPt0G5DCL0V_Ug","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSvtpjTM1pVT5xLzZd9-AyWaeiGbsUIyi1XFZgO7ZVmOhaNA3Iadw","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZ1m3oxlA0rDFNg95JrEyPXchY3ltltg0yN4m85AT03MLbM2eV","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR-T0M0s27hPM1XU_1ksG1tSg4Ar7UxSDWc00lovv7mSDjcJPHog1XEnRVC","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcGyZgrap2f1vmeLdRT2ZD-zqdEdH772QWMBu7HT-vCYvKCMofWkp-iPe","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSB93R4X5QkpRgMG83lGEvQRNiBEJDmAvJFm0I2KeCW9f3XkXXD","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGjTOunTxNoSIN-WUTP3Ob9S8MoyDiaSOvAL5UI-JZZ-CdYikxg","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ8zSp3ApsnFLsYxm8QNAl7DfjS5ApXTv3PE00Hx64Ywo8c2I9c6A","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS-POYwZ-87SsnvCbN2KM5S-dTZKuNcDDGMw4C9HwwsZ832XCrk","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRjyuBfpCXE-hiho0eBVY1802192e5RVdpptgeSN1X6E4DuA9N0qw","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcStzHMtyFoiiLsc6_MVvhRfPhZ5Skx7eG0LS9HS3ikLN_0L7rZ41A","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSFgPci3aI7N-7Pu6DKTtc2wkJwLkUUcVMwDrFeV86BYkxzuvqi","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_mLlIkTUP4Ae1zIl0t0WbvX7cKSLodLht_nSRwW9WMfyuEDvmbjr2IUM","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhwNrdN1Kv1VjWrLup8OOwZjvgofkkmpGi9xZpgW2H4hMWvUUtg","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPe2h7X03zoMoxanv3hfXM7mIMLxRrG7FbOk4gqP2YUjmB1oja","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ5E7B52SKTC6OSuIDRpMijGl29TxrGavTa3PBEkCfgtDq6DInjmw","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSTDdaL4V3MZ5G2RyLAfEOfjdlDBOb8mcwPU_zYKRjXcM9OaJja","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS8JiH6XPNiuel0VcoYX1dTcHzqwNSjBIRNOTWSNkzlokcR3eA","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTTTpyrBJaPMkwivo3ecSXKj_PQrO-N51mm8qdm8dlP1H20pLyWdQ","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTxHiKhEnQRasQgnOItMe7o19dcTWDtN3GKn6hl7GIJjuiCkBXMXr3iwXc","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSh_15WQstScWfvH50XXvSk3KcDpWpSU-naBcypIHd9hWPinta0AQ","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ69W8tAJfLXjB-i6h9hyiHdUiH3nblrsUSCVgsPzygwu-nnW6C","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQTMEgR-8tj1AIN7Vb27k0eUg3l9X0VEZdiuRFEiouvZHR_br3z","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThXm2xj_ZOSLSxpAgL6VykY9K9EgAzKjG7uD2BF0i8VfMM_x2u","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVhXp-8sX06768srHLGC4rnwNqRFDEV5svLVZk0xYu51M4ek-","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRenrBxyi5OwbPKNMGRzmIj7lxHf9ML-pLt_lvT_w_rqDcEhXyy0w","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR5-C7et-E-zbkOjgpRVMI3eQ54ZFlNOJ_7H9rwykTrhhUWHma_","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ1OWBQYMobYW4EVMyYtlEpr50C_bk_zIjXQbrK4sDwBV12x7kL","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRFX7WuVJKAJIyZEt6XF3AW9g8TIouJu18X8eh-bgKuXm-kxPxt","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTPWudGCIutW-vL54Z6dkUDKMxXstXEPHAKsp9q9i6tZ7iE9vOCPA","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZYtAYxMbDMCPhh75rj-oely-2Ihj6b6FLBcoGAJOjutfFb-ti","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCPDEZW_nfBYmSb0yAr0xA7vdeGdXwIvfmxVDBJV0Dli5tPljE","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTqZ_rM3WrW9f8x2-Dgp-jdRhZg89WbTCrYU8me_rJblEnRBTMu","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTAbpOm1ZX1Tkf7eYdk4GJ7LieEnxdpC992WcvtyaszgLTHFOCSZTKrRR0","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSLn002DV9_OUNXiElJL2Pm7EVbzlaps_kx_oyMnwSysHUI0l_L","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQsQ3vcrotMVfv3YvTf9PzVCcJApd4kIhV85tp0phWj0f2BdFQ_","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQBWR7yoEebcrFee5M3vPmMTbnSaNDa3sNl-5lAtJ5BIpLXE9fz","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRffqDZfuENZrq0ME1bOSpvwoRsPV4Jg1xIOhzijXkBppoWIA2mbw","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_XR7e7vWo6IOy39Q_v-GWuHOblg9cNKJYx83inBmzGFihybGz","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmmT3FB_bMvF074F5E4wJ-8BAXP2kgKWzPLNMXzimS6ZJB5tC","http://www.mspaintadventures.com/sweetbroandhellajeff/moneytile.gif","http://www.mspaintadventures.com/sweetbroandhellajeff/moneytile.gif","http://www.mspaintadventures.com/sweetbroandhellajeff/moneytile.gif","http://www.mspaintadventures.com/sweetbroandhellajeff/moneytile.gif","http://www.mspaintadventures.com/sweetbroandhellajeff/moneytile.gif"];
	return imgurls[Math.floor(Math.random()*imgurls.length)];
}

/*
// makme speld BTRRRRR!!!!!1
findAndReplace(/t/ig,"f");
if(Math.random()<0.1){
	findAndReplace(/[a|e]/i,"u");
}else if(Math.random()<0.1){
	findAndReplace(/[e|i]/i,"o");
}else if(Math.random()<0.1){
	findAndReplace(/[a|e]/i,"o");
}else if(Math.random()<0.1){
	findAndReplace(/[j|o|u|w]/i,"y");
}else if(Math.random()<0.5){
	findAndReplace(/[v|b|n|m]/i,"l");
}else{
	findAndReplace(/[g|h]/i,"q");
}
if(Math.random()<0.001){
	findAndReplace(/ /g,"");
	findAndReplace(/\w/g,"SWEEEEEEEEEEEEEEEEE");
}
if(Math.random()<0.1){
	findAndReplace(/\s/g,"");
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
        if (currentNode.nodeType !== 3 || !regex.test(currentNode.data) ) {
            continue;
        }
        var parent = currentNode.parentNode,
            frag = (function(){
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

