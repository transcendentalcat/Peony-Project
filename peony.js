/*var next = document.getElementsByClassName('next');
var btn_prev = document.getElementsByClassName('prev');*/
var i = 0;

function Next() {
	    var images = document.querySelectorAll("#photos img");
		var oNext = document.getElementById("next");
		images[i].className = '';
		i++;
		if (i >= images.length) {
			i = 0;
		}

		images[i].className = 'showed';

	}
function Prev() {
		var images = document.querySelectorAll("#photos img");
		var oPrev = document.getElementById("prev");
		images[i].className = '';
		i--;
		if (i < 0) {
			i = images.length - 1;
		}
		images[i].className = 'showed';

	}

