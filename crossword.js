var crossword;

function solveCrossw(currentDocument) {
	currentDoc = currentDocument;
	cross_word_script.innerHTML = `
	var solution_div = document.getElementById('solution_div');
	for (var i=0; i<currentCrossword.items.length;i++) {
		obj = currentCrossword.items[i];
		var direction = null
		if (obj['direction'] === '-') {
			direction = 'horizontal'
		}
		else {
			direction = 'vertical'
		}
		solution_div.innerHTML += \`<li> \${obj['id']}  \${direction} <b> \${obj['word']} </b> 
		<span style="opacity: 0;">\${obj['x']}</span> <span style="opacity: 0;">\${obj['y']}</span> </li>\`;
	}
	`;
	fillDocElements();

	function fillDocElements() {
		currentDoc.body.appendChild(solution_div);
		currentDoc.body.appendChild(cross_word_script);
		solution_div = currentDoc.getElementById('solution_div');
		crossword = currentDoc.getElementById('innerCrossword');
		top_margin =
			crossword.getBoundingClientRect().top +
			crossword.getBoundingClientRect().height +
			50;
		solution_div.style.position = 'fixed';
		solution_div.style.bottom = '0px';
		solution_div.style.left = '0px';
		solution_div.style.zIndex = '1000000';
		fillCells(solution_div.innerText);
	}
}

function fillCells(solutions) {
	var solutionList = solutions.split('\n');
	for (var i = 0; i < solutionList.length; i++) {
		var solutionData = solutionList[i].split(' ');
		var word_dir = solutionData[1];
		var word = solutionData[2];
		var word_x = solutionData[3];
		var word_y = solutionData[4];
		findCell(word_dir, word, word_x, word_y);
	}
}

function findCell(word_dir, word, word_x, word_y) {
	var currentCell;
	for (var i = 0; i < word.length; i++) {
		if (word_dir == 'horizontal') {
			currentCell = currentDoc.getElementById(
				`grid_${parseInt(word_x) + i}_${word_y}`
			);
		} else {
			currentCell = currentDoc.getElementById(
				`grid_${word_x}_${parseInt(word_y) + i}`
			);
		}
		if (currentCell.getAttribute('class').toString().includes('filled')) {
			currentCell.innerText = word[i];
		}
	}
}
