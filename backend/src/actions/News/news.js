const newsData= require('../../data/news.json')

exports.getNews=()=>{
    const shortNews = []
    newsData.news.forEach((element)=>{
        obj = {}
        obj.id= element._id
        obj.title = element.title
        obj.description = element.shortDescription
        shortNews.push(obj)
    })
    return shortNews
}


exports.getNewComplete=(id)=>{
//    let getId;
/*
    newsData.news.forEach(element => {
        if(element[0] == id){
            getId = element[0]
        }
    }) */
    
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
    console.log("getNewComplete ",AllNew)
    return AllNew
}