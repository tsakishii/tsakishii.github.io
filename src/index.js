function actionGithub(){
    window.open(
	"https://github.com/KiwiB0y", "_blank"
    );
}

function actionLinked(){
    window.open(
	"https://www.linkedin.com/in/tshri100v/", "_blank"
    );
}

function normalGit() {
    document.getElementById("github-icon").style.transform = "scale(1.0)";
}

function normalLinked() {		
    document.getElementById("linked-icon").style.transform = "scale(1.0)";
}

function hoverGit() {
    document.getElementById("github-icon").style.transform = "scale(1.6)";
}		

function hoverLinked() {		
    document.getElementById("linked-icon").style.transform = "scale(1.6)";
}
