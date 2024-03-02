var maximumOddBinaryNumber = function (s) {
    const map = {
        '0': 0,
        '1': 0
    };
    for (let i = 0; i < s.length; i++) {
        map[s[i]]++;
    }
    return `${`1`.repeat(map['1'] - 1)}${`0`.repeat(map['0'])}1`;
};

module.exports = maximumOddBinaryNumber;