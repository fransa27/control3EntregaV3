import { faker } from '@faker-js/faker'

exports.getNews = () => {
    const news = []
    for (let i = 1; i <= 100; i++) {
        news.push(getFakerNews(i))
    }
    return news
}

function getFakerNews (id) {
    return {
        id,
        title: faker.lorem.sentence(),
        short_description: faker.lorem.sentences(),
        long_description: faker.lorem.paragraph(),
        date: faker.date.recent()
    }
}
