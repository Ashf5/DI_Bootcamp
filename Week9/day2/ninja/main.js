
let mergeWords = str => {
    const words = [str];

    const inner = (next) => {
        if (next === undefined) {
            return words.join(' ');
        }else {
            words.push(next);
            return inner
        }
    }
    return inner;

}


let str = mergeWords('There')('is')('no')('spoon.')();
console.log(str);
