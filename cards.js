function solveCards(currentDocument) {
	currentDoc = currentDocument;
	cross_word_script.innerHTML = `
	var currentCard;
	var matchingCard;
	//for (var i=0; i<Pair1List.length;i++) {
	//	if (Pair1List.find(\`v1_\${i}\`)["card"] != undefined) {
	//		currentCard = Pair1List.find(\`v1_\${i}\`).card.htmlElement[0];
	//		matchingCard = Pair1List.find(\`v1_\${i}\`).card.matchingCards[0].htmlElement[0];
	//		console.log(currentCard.getBoundingClientRect(), matchingCard.getBoundingClientRect());
	//		console.log(currentCard, matchingCard);
	//		currentCard.style.left = window.getComputedStyle(matchingCard).getPropertyValue('left');
	//		currentCard.style.top = window.getComputedStyle(matchingCard).getPropertyValue('top')+window.getComputedStyle(matchingCard).getPropertyValue('height');
	//		currentCard.style.right = window.getComputedStyle(matchingCard).getPropertyValue('right');
	//		//currentCard.style.bottom = window.getComputedStyle(matchingCard).getPropertyValue('bottom');
	//		//currentCard.inset = window.getComputedStyle(matchingCard).getPropertyValue('inset');
	//		//currentCard.transform = window.getComputedStyle(matchingCard).getPropertyValue('transform');
	//		//currentCard.style = window.getComputedStyle(matchingCard);
	//	}
	//}
	setTimeout(()=>{
		var solution_div = document.getElementById('solution_div');
	var cards = document.querySelectorAll(".card");
	for (var i=0; i<cards.length;i++) {
		console.log(cards[i])
		if (i%2===1) {
			cards[i].style.left = "0";
			cards[i+1].style.left = "0";
		}
	}
	}, 2000)
	

	`;
	currentDoc.body.appendChild(solution_div);
	currentDoc.body.appendChild(cross_word_script);
	solution_div = currentDoc.getElementById('solution_div');
	solution_div.style.position = 'fixed';
	solution_div.style.bottom = '0px';
	solution_div.style.left = '0px';
	solution_div.style.zIndex = '1000000';
}
