var emojify = function(text) {

	// Smiling Slightly
	var newText = text.replace(':)', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/smile.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replace(':slight_smile:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/smile.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replace('🙂', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/smile.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');

	// Grinning
	newText = newText.replace(':D', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/smile-big.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replace(':grinning:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/smile-big.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replace('😀', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/smile-big.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');

	// Frowning Slightly
	newText = newText.replace(':(', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/frown.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replace(':frowning2:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/frown.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replace('☹', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/frown.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');

	// Frowning With Open Mouth
	newText = newText.replace(':frowning:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/frown-big.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replace('😦', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/frown-big.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');

	// Open Mouth
	newText = newText.replace(':open_mouth:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/open-mouth.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replace('😮', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/open-mouth.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replace(':O', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/open-mouth.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	
	return newText;
}
var emojis = -1;
setInterval(
	function() {
		emojis = document.body.innerHTML.search(":\\)") +
			 document.body.innerHTML.search(":\\(") +
			 document.body.innerHTML.search(":slight_smile:") +
			 document.body.innerHTML.search("🙂") +
			 document.body.innerHTML.search(":grinning:") +
			 document.body.innerHTML.search("😀") +
			 document.body.innerHTML.search(":frowning2:") +
			 document.body.innerHTML.search("☹") +
			 document.body.innerHTML.search(":frowning:") +
			 document.body.innerHTML.search("😦") +
			 document.body.innerHTML.search(":open_mouth:") +
			 document.body.innerHTML.search("😮") +
			 document.body.innerHTML.search(":O") +
			 document.body.innerHTML.search(":D");

		if (emojis > -1) {
			document.body.innerHTML = emojify(document.body.innerHTML);
			console.clear(); // Just so sites with lot's of errors don't overflow ;)
		}
	}, 500
);
