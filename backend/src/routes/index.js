const Router = require('koa-router')
//const companies = require('./Company/company.route')
const news = require('./News/news.route')
const router = new Router()
/*
router.get('/companies', companies.getAllCompanies)
router.post('/companies', companies.searchByNameOrLocation)
router.get('/companies/byptype/:paymentType/:order', companies.searchByPaymentType)
*/
router.get('/news', news.getAllShortNew)
router.get('/news/:id', news.getAllNew)
module.exports = router