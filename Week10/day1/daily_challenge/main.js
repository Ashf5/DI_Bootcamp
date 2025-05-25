
function anagram(str1, str2) {
    // clean up 
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    str1 = str1.replaceAll(' ', '');
    str2 = str2.replaceAll(' ', '');



    // go through all letters removing from other string if exists
    for (let letter of str1) {
        if (!(str2.includes(letter))){
            return false;
        }else {
            str2 = str2.replace(letter, '');
        }
    }

    if (str2 === ''){
        return true;
    }
    return false;
}

console.log(anagram('the Classroom', 'School master'));
