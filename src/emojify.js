var emojify = function (text) {
  var newText = text.replace(':)', '<span style="background-size: 100% 100%; background-image: url(\'http://tinyurl.com/svg-smile\');">&nbsp&nbsp&nbsp&nbsp</span>');
  newText = newText.replace(':D', '<span style="background-size: 100% 100%; background-image: url(\'http://tinyurl.com/yaqdh78e\');">&nbsp&nbsp&nbsp&nbsp</span>');
  return newText;
}
