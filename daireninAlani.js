const arguments = process.argv.slice(2);

function daireninAlani(yaricap){
    var sonuc = Math.PI*(yaricap*yaricap)
    console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${sonuc.toFixed()}`);

}

daireninAlani(arguments[0]*1);

