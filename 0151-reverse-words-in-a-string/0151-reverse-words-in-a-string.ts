function reverse(str: string): string {
    let result = '', toAppend = '';
    for(let reading = 0;reading < str.length; reading ++) {
        if(str[reading] == ' ' && toAppend == '') {
            continue
        } else if( str[reading] == ' ') {
            if(result == '') result = toAppend;
            else result = toAppend + ' ' + result;
            toAppend = '';
        } else {
            toAppend += str[reading]
        }
    }
    if(toAppend !== '') return toAppend + ' ' + result
    else return result;
}

function reverseWords(s: string): string {
return reverse(s).trim()
};