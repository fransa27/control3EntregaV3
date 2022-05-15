const Router = require('koa-router')
const news = require('./News/news.route')

const router = new Router()

router.get('/news', news.getAllNews)
router.get('/news/:id', news.getAllNewComplete)
router.get('/favorites', news.getAllFavoritesNews)
router.post('/favorites/:id', news.updateFavs)
//router.post('/news/favorites', companies.searchByNameOrLocation)
//router.get('/companies/byptype/:paymentType/:order', news.searchByPaymentType)

module.exports = router