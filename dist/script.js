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

	    localStorage.setItem("AvisoInicial", "ok");

	document.body.style.background="#0D0D0D";
document.getElementById("explicacion").hidden = false;
document.getElementById("evento").hidden = true;

}





