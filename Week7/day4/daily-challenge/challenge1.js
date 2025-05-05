
let sentence = 'The weather is not bad';
let wordNot = sentence.indexOf('not');
let wordBad = sentence.indexOf('bad');
if (wordBad > wordNot){
    sentence = sentence.replace('not bad', 'good');
}else{
    console.log(sentence);
}
