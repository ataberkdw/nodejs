const koa = require('koa');
const app = new koa();
app.use((context)=>{
    console.log(context.url)
    if(context.url === "/"){
        context.body = '<h1>index sayfasina hos geldiniz</h1>'
    }else if(context.url==='/hakkimda'){
        context.body = '<h1>hakkimda sayfasina hos geldiniz</h1>'
    }else if(context.url==='/iletisim'){
        context.body = '<h1>iletisim sayfasina hos geldiniz</h1>'
    }else{
        context.body = '<h1>404 sayfa</h1>'
    }

})

const port = 3000;
app.listen(port,()=>{
    console.log(`Sunucu ${port} adresinde baslatildi`)
})