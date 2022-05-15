//const response = require('koa/lib/response')
const newAction = require('../../actions/News/news_actions')

exports.getAllNews = (ctx) => {
    ctx.body = newAction.getNews()
    return ctx
} 

exports.getAllNewComplete=(ctx)=>{
    console.log("ctx ", ctx)
    //debo acceder al valor que ingresa en la url hasta ahora no se esta obteniendo ese valor
    const body = ctx.params.id  
    const response = newAction.getNewComplete(body)
    //console.log("body ",body)
    //console.log("response ",response)
    if(response == 0){
        ctx.status = 404
        ctx.body= {
            status: ctx.status,
            message: "Noticia no encontrada"
        }
    }else{
        ctx.body=response
    }
    return ctx
}


exports.getAllFavoritesNews = (ctx) => {
    ctx.body = newAction.getFavorites()
    return ctx
}

exports.updateFavs=(ctx)=>{
    const body = ctx.params.id
    console.log("body",body)
    const response = newAction.updateFavorites(body)
    if(response == 0){
        ctx.status = 404
        ctx.body= {
            status: ctx.status,
            message: "Favorito no encontrado"
        }
    }else{
        ctx.body=response
    }

    return ctx
}