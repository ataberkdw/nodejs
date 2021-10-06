function circleArea (r) {
    let result = Math.PI*Math.pow(r,2);
    console.log(result.toFixed(2))
}

function circleCircumference (r) {
    let result = Math.PI*r*2;
    console.log(result.toFixed(2))
}

module.exports = {
    circleArea,
    circleCircumference
}