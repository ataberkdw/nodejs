const fs = require('fs')

//employee.json olusturma
fs.writeFile('employee.json','{"name": "Employee 1 Name", "salary": 2000}',(err)=>{
    if(err) console.log(err)
})

// // employee.json verisini okuma
fs.readFile('employee.json','utf-8',(err,data)=>{
    if(err) console.log(err)
    console.log(data)
})
//guncelleme
//guncelleme sirasinda json verisi oldugu icin ekleme basarili olsa bile json dosyasinda hata aliniyor dosya icerisinde istenilen satirda guncelleme yapmayi hala arastiriyorum
fs.appendFile('employee.json','{"name": "Employee 12 Name", "salary": 21000}',(err)=>{
    if(err) console.log(err)
})
fs.unlink('employee.json',(err)=>{
    if(err) console.log(err)

})