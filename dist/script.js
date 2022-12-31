var chain = $("#chains")[0];
$(".img-wrapper").mouseenter(function() {
	chain.currentTime = 0;
	chain.play();
});



document.getElementById("okButton").addEventListener(
	"click",
	() => {

		document.body.style.background="#D92323"

		document.getElementById("explicacion").hidden = true;
		document.getElementById("evento").hidden = false;
	},
	false
	);


if (window.localStorage.getItem('AvisoInicial') == undefined
	) {
	document.body.style.background="#0D0D0D";
document.getElementById("explicacion").hidden = false;
document.getElementById("evento").hidden = true;

}



window.addEventListener("load", () => {
  // (A) TEST FETCH HEADER REQUEST TO GOOGLE ADSENSE
  let test = new Request(
  	"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    // "https://static.ads-twitter.com/uwt.js",
    { method: "HEAD", mode: "no-cors" }
    );

  // (B) FIRE THE REQEST
  fetch(test ).then((res) => {

  	alert("Sin");
    //alert("ADS ALLOWED");
}).catch((err) => {
	alert("Con");

document.body.style.background="#0D0D0D";
document.getElementById("explicacion").hidden = false;
document.getElementById("evento").hidden = true;

});
});


