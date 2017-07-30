var script = document.createElement('script');
script.src = "https://cdn.rawgit.com/padolsey/findAndReplaceDOMText/master/src/findAndReplaceDOMText.js";
script.onload = function() {
	var replace = function(search, replacement) {
		findAndReplaceDOMText(document.body, {
			find: search,
			replace: function(m) {
				var el = document.createElement('span');
				el.style.backgroundSize = '100% 100%';
				el.style.backgroundImage = 'url(' + replacement + ')';
				el.innerHTML = '&nbsp&nbsp&nbsp&nbsp';
				return el;
			}
		})
	};

	var emojify = function(text) {

		// Smiling Slightly
		replace(':)', 'https://csf30816.github.io/SVG-Emoji2/emojis/smile.svg');
		replace(':slight_smile:', 'https://csf30816.github.io/SVG-Emoji2/emojis/smile.svg');
		replace('🙂', 'https://csf30816.github.io/SVG-Emoji2/emojis/smile.svg');

		// Grinning
		replace(':D', 'https://csf30816.github.io/SVG-Emoji2/emojis/smile-big.svg');
		replace(':grinning:', 'https://csf30816.github.io/SVG-Emoji2/emojis/smile-big.svg');
		replace('😀', 'https://csf30816.github.io/SVG-Emoji2/emojis/smile-big.svg');

		// Frowning Slightly
		replace(':(', 'https://csf30816.github.io/SVG-Emoji2/emojis/frown.svg');
		replace(':frowning2:', 'https://csf30816.github.io/SVG-Emoji2/emojis/frown.svg');
		replace('☹', 'https://csf30816.github.io/SVG-Emoji2/emojis/frown.svg');

		// Frowning With Open Mouth
		replace(':frowning:', 'https://csf30816.github.io/SVG-Emoji2/emojis/frown-big.svg');
		replace('😦', 'https://csf30816.github.io/SVG-Emoji2/emojis/frown-big.svg');

		// Open Mouth
		replace(':open_mouth:', 'https://csf30816.github.io/SVG-Emoji2/emojis/open-mouth.svg');
		replace('😮', 'https://csf30816.github.io/SVG-Emoji2/emojis/open-mouth.svg');
		replace(':O', 'https://csf30816.github.io/SVG-Emoji2/emojis/open-mouth.svg');

		// No Mouth
		replace(':no_mouth:', 'https://csf30816.github.io/SVG-Emoji2/emojis/no-mouth.svg');
		replace('😶', 'https://csf30816.github.io/SVG-Emoji2/emojis/no-mouth.svg');

		// Smile
		replace(':smile:', 'https://csf30816.github.io/SVG-Emoji2/emojis/smile-i.svg');
		replace('😄', 'https://csf30816.github.io/SVG-Emoji2/emojis/smile-i.svg');

		// Stuck Out Tongue
		replace(':stuck_out_tongue:', 'https://csf30816.github.io/SVG-Emoji2/emojis/tongue.svg');
		replace(':P', 'https://csf30816.github.io/SVG-Emoji2/emojis/tongue.svg');
		replace('😛', 'https://csf30816.github.io/SVG-Emoji2/emojis/tongue.svg');

		// Neutral Face
		replace(':neutral:', 'https://csf30816.github.io/SVG-Emoji2/emojis/neutral.svg');
		replace(':|', 'https://csf30816.github.io/SVG-Emoji2/emojis/neutral.svg');
		replace('😐', 'https://csf30816.github.io/SVG-Emoji2/emojis/neutral.svg');

		// Raging Face
		replace(':rage:', 'https://csf30816.github.io/SVG-Emoji2/emojis/rage.svg');
		replace(':raging:', 'https://csf30816.github.io/SVG-Emoji2/emojis/rage.svg');
		replace('😡', 'https://csf30816.github.io/SVG-Emoji2/emojis/rage.svg');

		// Angry Face
		replace(':angry:', 'https://csf30816.github.io/SVG-Emoji2/emojis/angry.svg');
		replace('😠', 'https://csf30816.github.io/SVG-Emoji2/emojis/angry.svg');

		// Raging Face
		replace(';)', 'https://csf30816.github.io/SVG-Emoji2/emojis/wink.svg');
		replace(':wink:', 'https://csf30816.github.io/SVG-Emoji2/emojis/wink.svg');
		replace('😉', 'https://csf30816.github.io/SVG-Emoji2/emojis/wink.svg');
	};
	var emojis = -1;
  emojify();
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
				document.body.innerHTML.search(":wink:") +
				document.body.innerHTML.search("😉") +
				document.body.innerHTML.search(";\\)") +
				document.body.innerHTML.search(":O") +
				document.body.innerHTML.search(":\\|") +
				document.body.innerHTML.search(":P") +
				document.body.innerHTML.search(":D");

			if (emojis > 0) {
				emojify();
			}
		}, 5000
	);
};
document.head.appendChild(script);
