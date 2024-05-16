const repeatString = (string, number) => {
    let answer = '';
    if(number < 0) {
        return 'ERROR';
    } else if (string === ''){
        return '';
    }
    for(let i = 0; i < number; i++) {
        answer += string;
    }
    return answer;
}

// Do not edit below this line
module.exports = repeatString;
