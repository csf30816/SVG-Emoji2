var emojify = function (text) {
  // Smile
  var newText = text.replace(':)', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/smile.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
  newText = newText.replace(':smile:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/smile.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
  
  // Big Smile
  newText = newText.replace(':D', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/smile-big.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
  newText = newText.replace(':big-smile:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/smile-big.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
  
  // Frown
  newText = newText.replace(':(', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/frown.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
  newText = newText.replace(':frown:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/frown.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
  
  // Big Frown
  newText = newText.replace(':big-frown:', '<span style="background-size: 100% 100%; background-image: url(\'https://csf30816.github.io/SVG-Emoji2/emojis/frown-big.svg\');">&nbsp&nbsp&nbsp&nbsp</span>');
  
  return newText;
}

var emojis = -1;

setInterval(
  function () {
    emojis =  document.body.innerHTML.search(":\\)") +
              document.body.innerHTML.search(":\\(") +
              document.body.innerHTML.search(":smile:") +
              document.body.innerHTML.search(":big-smile") +
              document.body.innerHTML.search(":frown:") +
              document.body.innerHTML.search(":big-frown") +
              document.body.innerHTML.search(":D");
    if (emojis > -1) {
      document.body.innerHTML = emojify(document.body.innerHTML);
      console.clear(); // Just so sites with lot's of errors don't overflow ;)
    }
  }, 500
);
