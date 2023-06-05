'use strict';
function fibseq(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fibseq(n-1) + fibseq(n-2);
}

const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fibseq(i));
}