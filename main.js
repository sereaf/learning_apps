var currentDoc;
var top_margin;

var cross_word_script = document.createElement('script');
var solution_div = document.createElement('div');
solution_div.setAttribute('id', 'solution_div');
solution_div.style.color = 'green';

function main() {
	in_frame = false;
	try {
		frame = document.getElementsByTagName('iframe')[0];
		frame_url = frame.src;
	} catch (err) {
		in_frame = true;
	}
	if (in_frame) {
		body = document.getElementsByTagName('body')[0];
		currentDoc = document;
		fillDocElements();
	} else {
		loadIframe(document, getExcType);
	}
}

function getExcType() {
	//if (document.readyState == 'complete') {
	if (currentDoc.getElementById('cards')) {
		solveCards(currentDoc);
	} else if (currentDoc.getElementById('innerCrossword')) {
		solveCrossw(currentDoc);
	} else if (currentDoc.getElementById('questionPanel')) {
		solveMill(currentDoc);
	}
	//} else {
	//	//currentDoc.onreadystatechange = () => {
	//	console.log(10);
	//	getExcType();
	//	//};
	//}
}

function loadIframe(htmlDocument, callAfter = () => {}) {
	currentDoc = htmlDocument;
	while (
		currentDoc.getElementsByTagName('iframe')[0] != null ||
		currentDoc.getElementsByTagName('iframe')[0] != undefined
	) {
		currentDoc = currentDoc.getElementsByTagName('iframe')[0].contentWindow
			.document;
	}
	//currentDoc.addEventListener('DOMContentLoaded', () => {
	//	callAfter(currentDoc);
	//});
	window.onload = () => {
		callAfter(currentDoc);
	};
	//if (currentDoc.readyState !== 'complete') {
	//	currentDoc.onreadystatechange = () => {
	//		if (currentDoc.readyState === 'complete') {
	//			callAfter(currentDoc);
	//		}
	//	};
	//} else {
	//	callAfter(currentDoc);
	//}
}

main();
