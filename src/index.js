module.exports = function reverse(n) {
    let number = Math.abs(n);
    let array = number.toString().split('');
    let revers = array.reverse()
    revers = revers.join('')
    return Number(revers);
}
