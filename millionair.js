function solveMill(currentDocument) {
	currentDoc = currentDocument;
	cross_word_script.innerHTML = `
	var solution_div = document.getElementById('solution_div');
	var title = document.getElementById('frage');
	if(window.addEventListener) {
		title.addEventListener('DOMSubtreeModified', contentChanged, false);
	} else if(window.attachEvent) {
			title.attachEvent('DOMSubtreeModified', contentChanged);
		}
	function contentChanged() {
		//if (window.getComputedStyle(document.getElementById('questionPanel')).getPropertyValue('display') == 'block') {}
		setTimeout(() => {
			document.getElementById(correctAnswer).click();
		}, 1000)
	}
	`;

	currentDoc.body.appendChild(solution_div);
	currentDoc.body.appendChild(cross_word_script);
	solution_div = currentDoc.getElementById('solution_div');
	crossword = currentDoc.getElementById('innerCrossword');
	/* top_margin =
		crossword.getBoundingClientRect().top +
		crossword.getBoundingClientRect().height +
		50; */
	solution_div.style.position = 'fixed';
	solution_div.style.bottom = '0px';
	solution_div.style.left = '0px';
	solution_div.style.zIndex = '1000000';
}
