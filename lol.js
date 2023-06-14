//dynamic title.
function animateTitle() {
    i >= message.length - 1 ? (i = 0) : i++,
      (document.title = message[i]),
//   document.title.style.fontFamily = 
// i wanna fix this later on ...
      setTimeout('animateTitle()', 100)
  }
  var message = [
'lol',
'ㅤ',
'l',
'lo',
'lol',
  ],
    i = 0
  animateTitle()
