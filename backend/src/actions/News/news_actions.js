const newsData = require('../../data/newsBBC.json')

exports.getNews = () =>{
    const noticia = []
    newsData.news.forEach((element)=> {
        obj = {}
        obj._id=element._id
        obj.title=element.title
        obj.shortDescription=element.shortDescription
        obj.date=element.date
        obj.longDescription=element.longDescription
        obj.favorite=element.favorite
        noticia.push(obj)      
    })
    return noticia
}

exports.getNewComplete=(id)=>{
        const AllNew = []
        newsData.news.forEach((element)=>{
    //        console.log("element ", element._id)
            console.log("id ", id)
            if(element._id == id){
                obj={}
                obj.id= element._id
                obj.title=element.title
                obj.longDescription=element.longDescription
                obj.date=element.date
                AllNew.push(obj)
            } 
        })
        //console.log("getNewComplete ",AllNew)
        return AllNew
    }

exports.getFavorites = () =>{
    
    const noticia = []
    newsData.news.forEach((element)=> {
        obj = {}
        if(element.favorite == '1'){    
            obj._id=element._id
            obj.title=element.title
            obj.shortDescription=element.shortDescription
            obj.date=element.date
            obj.longDescription=element.longDescription
            obj.favorite=element.favorite
            noticia.push(obj)
        }
         console.log("getFavorites") 
    })
    return noticia
}

exports.updateFavorites = (id) => {
    console.log("obtener favoritos")

    newsData.news.forEach((element)=>{
//        console.log("element ", element._id)
        console.log("id ", id)
        if(element._id == id){
            //element.favorite = !element.favorite 
            if (element.favorite == '0') {
                element.favorite = '1'
                console.log("cambiando a 1")
            } else {
                element.favorite = '0'
                console.log("cambiando a 0")

            }
        } 
    })
    //console.log("getNewComplete ",AllNew)
    return
}

