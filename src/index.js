module.exports = function multiply(first, second) {
    var result = [], f, s, transfer, resLine, l;
    l = first.length + second.length;
    for (let k=0; k<l; k++) {
        result[k] = 0;
    }    
    for (let i=0; i<first.length; i++) {
        transfer = 0;
        for (let j=0; j<second.length; j++) {
            
            f = (i > 0) ? first.slice(-(i + 1), -i ) : first.slice(-1) ;
            s = (j > 0) ? second.slice(-(j + 1), -j) : second.slice(-1);

            result[i + j] += f * s + transfer;
            transfer = (result[i + j] / 10) ^ 0;
            result[i + j] = result[i + j] % 10;
        }
        result[i + second.length] += transfer;
    }
    if (result[l-1] === 0){
        result.pop();
    }
    result.reverse();
    resLine = result.join('');   
    return resLine; 
}
