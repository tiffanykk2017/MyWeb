window.onload = function() {

	var home = document.getElementsByClassName("home")[0];
	var rule = document.getElementsByClassName("home")[1];

	home.onclick = function() {
		if (document.URL.includes("index.html")) {
			document.location = "index.html";
		} else if (confirm("You sure?\nYou may lose all your progress.")) {
			document.location = "index.html";
		}
	}

}