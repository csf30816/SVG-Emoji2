var emojify = function (text) {
  var newText = text.replace(':)', '<span style="background-size: 100% 100%; background-image: url(\'//tinyurl.com/svg-smile\');">&nbsp&nbsp&nbsp&nbsp</span>');
  newText = newText.replace(':D', '<span style="background-size: 100% 100%; background-image: url(\'//tinyurl.com/yaqdh78e\');">&nbsp&nbsp&nbsp&nbsp</span>');
  return newText;
}

var emojis = -1;

setInterval(
  function () {
    emojis =  document.body.innerHTML.search(":\\)") +
              document.body.innerHTML.search(":D");
    if (emojis > -1) {
      document.body.innerHTML = emojify(document.body.innerHTML);
      console.clear(); // Just so sites with lot's of errors don't overflow ;)
    }
  }, 100
);
