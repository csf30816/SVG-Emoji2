String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

var emojify = function(text) {

	// Smiling Slightly
	var newText = text.replaceAll(':)', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/smile.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replaceAll(':slight_smile:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/smile.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replaceAll('🙂', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/smile.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');

	// Grinning
	newText = newText.replaceAll(':D', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/smile-big.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replaceAll(':grinning:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/smile-big.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replaceAll('😀', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/smile-big.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');

	// Frowning Slightly
	newText = newText.replaceAll(':(', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/frown.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replaceAll(':frowning2:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/frown.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replaceAll('☹', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/frown.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');

	// Frowning With Open Mouth
	newText = newText.replaceAll(':frowning:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/frown-big.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replaceAll('😦', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/frown-big.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');

	// Open Mouth
	newText = newText.replaceAll(':open_mouth:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/open-mouth.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replaceAll('😮', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/open-mouth.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replace(':O', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/open-mouth.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	
	// No Mouth
	newText = newText.replaceAll(':no_mouth:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/no-mouth.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replaceAll('😶', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/no-mouth.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	
	// Smile
	newText = newText.replaceAll(':smile:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/smile-i.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replaceAll('😄', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/smile-i.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	
	// Stuck Out Tongue
	newText = newText.replaceAll(':stuck_out_tongue:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/tongue.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replaceAll(':P', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/tongue.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replaceAll('😛', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/tongue.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	
	// Neutral Face
	newText = newText.replaceAll(':neutral:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/neutral.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replaceAll(':|', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/neutral.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replaceAll('😐', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/neutral.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	
	// Raging Face
	newText = newText.replaceAll(':rage:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/rage.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replaceAll(':raging:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/rage.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replaceAll('😡', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/rage.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	
	// Angry Face
	newText = newText.replaceAll(':angry:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/angry.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	newText = newText.replaceAll('😠', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/angry.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
	
	return newText;
};
var emojis = -1;
document.body.innerHTML = emojify(document.body.innerHTML);
setInterval(
	function() {
		emojis = document.body.innerHTML.search(":\\)") +
			 document.body.innerHTML.search(":\\(") +
			 document.body.innerHTML.search(":slight_smile:") +
			 document.body.innerHTML.search("🙂") +
			 document.body.innerHTML.search(":smile:") +
			 document.body.innerHTML.search("😄") +
			 document.body.innerHTML.search(":grinning:") +
			 document.body.innerHTML.search("😀") +
			 document.body.innerHTML.search(":frowning2:") +
			 document.body.innerHTML.search("☹") +
			 document.body.innerHTML.search(":frowning:") +
			 document.body.innerHTML.search("😦") +
			 document.body.innerHTML.search(":open_mouth:") +
			 document.body.innerHTML.search("😮") +
			 document.body.innerHTML.search(":no_mouth:") +
			 document.body.innerHTML.search("😶") +
			 document.body.innerHTML.search(":stuck_out_tongue:") +
			 document.body.innerHTML.search("😛") +
			 document.body.innerHTML.search(":neutral:") +
			 document.body.innerHTML.search("😐") +
			 document.body.innerHTML.search(":rage:") +
			 document.body.innerHTML.search(":raging:") +
			 document.body.innerHTML.search("😡") +
			 document.body.innerHTML.search(":angry:") +
			 document.body.innerHTML.search("😠") +
			 document.body.innerHTML.search(":O") +
			 document.body.innerHTML.search(":\\|") +
			 document.body.innerHTML.search(":P") +
			 document.body.innerHTML.search(":D");

		if (emojis > 0) {
			document.body.innerHTML = emojify(document.body.innerHTML);
			//console.clear(); // Just so sites with lot's of errors don't overflow ;)
		}
	}, 200
);
