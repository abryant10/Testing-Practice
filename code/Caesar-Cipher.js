function caesarCipher (str, constShift) {
  if (constShift > 26) {
      constShift = (constShift % 26);
  } else if (constShift < -26) {
      constShift = (constShift % -26);
  } else {constShift = constShift}; 

  var strArray =  str.split("");
  let i;
  var NewStrArray = [];
  for (i = 0; i < strArray.length; i++) {
      var shift = constShift;
      if (strArray[i] === " " || strArray[i] === "!" || strArray[i] === ","){
          NewStrArray.push(strArray[i]);
      } else {
          var theUnicode = strArray[i].charCodeAt(0);
          if (theUnicode < 91) {
              if (theUnicode + shift > 90) {
                  shift = (-(26 - shift));
                  var NewUnicode = theUnicode + shift;
                  var NewStr = String.fromCharCode(NewUnicode);
                  NewStrArray.push(NewStr);
              }else if (theUnicode + shift < 65) {
                  shift = (26 + shift);
                  var NewUnicode = theUnicode + shift;
                  var NewStr = String.fromCharCode(NewUnicode);
                  NewStrArray.push(NewStr);
              }else {
                  var NewUnicode = theUnicode + shift;
                  var NewStr = String.fromCharCode(NewUnicode);
                  NewStrArray.push(NewStr);
          }}else {
                  if (theUnicode + shift > 122) {
                      shift = (-(26 - shift));
                      var NewUnicode = theUnicode + shift;
                      var NewStr = String.fromCharCode(NewUnicode);
                      NewStrArray.push(NewStr);
                  }else if (theUnicode + shift < 97) {
                      shift = (26 + shift);
                      var NewUnicode = theUnicode + shift;
                      var NewStr = String.fromCharCode(NewUnicode);
                      NewStrArray.push(NewStr);
                  }else {
                      var NewUnicode = theUnicode + shift;
                      var NewStr = String.fromCharCode(NewUnicode);
                      NewStrArray.push(NewStr);
              }}
          }
  }
  var crypto = NewStrArray.join("");
  return crypto;
}

module.exports = caesarCipher;