var lock = false;
var open = false;
var count = 1;

function load() {
	var images = document.getElementsByTagName("img");
	var sources = [
	"img/buta.jpg",
	"img/buta.jpg",
	"img/hebi.jpg",
	"img/hebi.jpg",
	"img/kitsune.jpg",
	"img/kitsune.jpg",
	"img/saru.jpg",
	"img/saru.jpg",
	"img/uma.jpg",
	"img/uma.jpg",
	"img/zou.jpg",
	"img/zou.jpg"
	];
	for (var i in images) {
		(function () {
			var rand = Math.floor(Math.random() * sources.length);
			var src = sources.splice(rand, 1);
			images[i].onclick = function() {
				if (lock) {
					return;
				}
				lock = true;
				rotateY(this, src[0], 0);
			}
		})();
	}
}

function rotateY (img, src, i) {
	if (i > 180) {
		if (open) {
			if (img.src !== open.src) {
				count++;
				document.getElementById("count").textContent = count + "ターン目";
				rotateYInv(img, "img/back.jpg", 180);
				rotateYInv(open, "img/back.jpg", 180);
			}
			open = false;
		} else {
			open = img;
		}
		lock = false;
		return;
	}
	img.style.WebkitTransform = "rotateY(" + i + "deg)";
	if (i == 90) {
		img.src = src;
	}
	setTimeout(rotateY, 3, img, src, i + 1);
}

function rotateYInv (img, src, i) {
	if (i < 0) {
		return;
	}
	img.style.WebkitTransform = "rotateY(" + i + "deg)";
	if (i == 90) {
		img.src = src;
	}
	setTimeout(rotateYInv, 3, img, src, i - 1);

}