
// let sentence = 'The weather is not bad';
// let wordNot = sentence.indexOf('not');
// let wordBad = sentence.indexOf('bad');
// if (wordBad > wordNot){
//     let sentence1 = sentence.replace(' not', '');
//     sentence1 = sentence.replace('bad', 'good');
// }else{
//     console.log(sentence1);
// }


if (wordBad > wordNot){
    // use slicing 
    let beg = sentence.split(0, wordNot);
    let end = sentence.split(wordBad + 3);
    let full = `${beg} good ${end}`;
    console.log(end);
}else{
    console.log(sentence);
}

