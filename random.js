function rand(n) {
	return arguments.length == 1 ? Math.floor(Math.random() * n) : 0;
}
function random(l, r) {
	return arguments.length == 2 ? rand(r - l + 1) + l : 0;
}

var num = document.getElementById("num");

var l = 1,
    r = 48;

function onClick() {
    num.innerHTML = random(l, r);
}