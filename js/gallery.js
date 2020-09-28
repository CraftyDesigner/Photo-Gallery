function upDate(value){
	console.log(value.alt);

	pan = "Rice Cooker Cinnamon Pancakes"
	ham = "Ham and Cheese Hashbrown Cubes"
	che = "Butter Chicken Mac 'N' Cheese"
	coo = "Cookies and Cream Cheesecake Cookies"

	document.getElementById(value.alt + " tit").style.display = "inline-block";
	document.getElementById(value.alt + " ing").style.display = "inline-block";
	document.getElementById(value.alt + " prep").style.display = "inline-block";
	document.getElementById(value.alt + " vid").style.display = "inline-block";

	if (value.alt == pan){
		document.getElementById(ham + " tit").style.display = "none";
		document.getElementById(ham + " ing").style.display = "none";
		document.getElementById(ham + " prep").style.display = "none";
		document.getElementById(ham + " vid").style.display = "none";

		document.getElementById(che + " tit").style.display = "none";
		document.getElementById(che + " ing").style.display = "none";
		document.getElementById(che + " prep").style.display = "none";
		document.getElementById(che + " vid").style.display = "none";

		document.getElementById(coo + " tit").style.display = "none";
		document.getElementById(coo + " ing").style.display = "none";
		document.getElementById(coo + " prep").style.display = "none";
		document.getElementById(coo + " vid").style.display = "none";
	}

	else if (value.alt == ham){
		document.getElementById(pan + " tit").style.display = "none";
		document.getElementById(pan + " ing").style.display = "none";
		document.getElementById(pan + " prep").style.display = "none";
		document.getElementById(pan + " vid").style.display = "none";

		document.getElementById(che + " tit").style.display = "none";
		document.getElementById(che + " ing").style.display = "none";
		document.getElementById(che + " prep").style.display = "none";
		document.getElementById(che + " vid").style.display = "none";

		document.getElementById(coo + " tit").style.display = "none";
		document.getElementById(coo + " ing").style.display = "none";
		document.getElementById(coo + " prep").style.display = "none";
		document.getElementById(coo + " vid").style.display = "none";
	}
	else if (value.alt == che){
		document.getElementById(pan + " tit").style.display = "none";
		document.getElementById(pan + " ing").style.display = "none";
		document.getElementById(pan + " prep").style.display = "none";
		document.getElementById(pan + " vid").style.display = "none";

		document.getElementById(ham + " tit").style.display = "none";
		document.getElementById(ham + " ing").style.display = "none";
		document.getElementById(ham + " prep").style.display = "none";
		document.getElementById(ham + " vid").style.display = "none";

		document.getElementById(coo + " tit").style.display = "none";
		document.getElementById(coo + " ing").style.display = "none";
		document.getElementById(coo + " prep").style.display = "none";
		document.getElementById(coo + " vid").style.display = "none";
	}
	else if (value.alt == coo){
		document.getElementById(pan + " tit").style.display = "none";
		document.getElementById(pan + " ing").style.display = "none";
		document.getElementById(pan + " prep").style.display = "none";
		document.getElementById(pan + " vid").style.display = "none";

		document.getElementById(ham + " tit").style.display = "none";
		document.getElementById(ham + " ing").style.display = "none";
		document.getElementById(ham + " prep").style.display = "none";
		document.getElementById(ham + " vid").style.display = "none";

		document.getElementById(che + " tit").style.display = "none";
		document.getElementById(che + " ing").style.display = "none";
		document.getElementById(che + " prep").style.display = "none";
		document.getElementById(che + " vid").style.display = "none";
	}
}