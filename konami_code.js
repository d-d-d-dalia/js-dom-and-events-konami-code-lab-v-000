const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

let index = 0;

function init() {
	document.addEventListener('keydown', onKeyDownHandler)
}
// e stands for event
function onKeyDownHandler(e) {
// e.detail and e.which are really referring to the same piece of data but bc browser are different, we cover both kinds it could be.
	const key = parseInt(e.detail || e.which);
	 
	  if (key === code[index]) {
	    index++;
	 
	    if (index === code.length) {
	      alert("Hurray!");
	 
	      index = 0;
	    }
	  } else {
	    index = 0;
	  }
};