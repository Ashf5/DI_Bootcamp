
for (let i=0; i < 6; i++) {
    console.log('* '.repeat(i+1));
}

for (let i=1; i < 7; i++) {
    let line = '';
    for (let j=0; j < i; j++) {
        line += '* ';
    }
    console.log(line);
}