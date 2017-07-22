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
	
	// No Mouth
	newText = newText.replace(':no_mouth:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/no-mouth.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replace('😶', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/no-mouth.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	
	// Smile
	newText = newText.replace(':smile:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/smile-i.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replace('😄', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/smile-i.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	
	// Stuck Out Tongue
	newText = newText.replace(':stuck_out_tongue:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/tongue.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replace(':P', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/tongue.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replace('😛', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/tongue.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	
	// Neutral Face
	newText = newText.replace(':neutral:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/neutral.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replace(':|', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/neutral.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replace('😐', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/neutral.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	
	// Raging Face
	newText = newText.replace(':rage:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/rage.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replace(':raging:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/rage.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replace('😡', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/rage.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	
	// Angry Face
	newText = newText.replace(':angry:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/angry.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replace('😠', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/angry.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	
	return newText;
};
var emojis = -1;
document.body.innerHTML = emojify(document.body.innerHTML);
setInterval(
	function() {
		emojis = document.body.innerHTML.includes(":\\)") +
			 document.body.innerHTML.includes(":\\(") +
			 document.body.innerHTML.includes(":slight_smile:") +
			 document.body.innerHTML.includes("🙂") +
			 document.body.innerHTML.includes(":smile:") +
			 document.body.innerHTML.includes("😄") +
			 document.body.innerHTML.includes(":grinning:") +
			 document.body.innerHTML.includes("😀") +
			 document.body.innerHTML.includes(":frowning2:") +
			 document.body.innerHTML.includes("☹") +
			 document.body.innerHTML.includes(":frowning:") +
			 document.body.innerHTML.includes("😦") +
			 document.body.innerHTML.includes(":open_mouth:") +
			 document.body.innerHTML.includes("😮") +
			 document.body.innerHTML.includes(":no_mouth:") +
			 document.body.innerHTML.includes("😶") +
			 document.body.innerHTML.includes(":stuck_out_tongue:") +
			 document.body.innerHTML.includes("😛") +
			 document.body.innerHTML.includes(":neutral:") +
			 document.body.innerHTML.includes("😐") +
			 document.body.innerHTML.includes(":rage:") +
			 document.body.innerHTML.includes(":raging:") +
			 document.body.innerHTML.includes("😡") +
			 document.body.innerHTML.includes(":angry:") +
			 document.body.innerHTML.includes("😠") +
			 document.body.innerHTML.includes(":O") +
			 document.body.innerHTML.includes(":\\|") +
			 document.body.innerHTML.includes(":P") +
			 document.body.innerHTML.includes(":D");

		if (emojis > 0) {
			document.body.innerHTML = emojify(document.body.innerHTML);
			//console.clear(); // Just so sites with lot's of errors don't overflow ;)
		}
	}, 200
);
