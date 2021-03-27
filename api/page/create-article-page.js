require('dotenv').config()
const supertest = require('supertest');

const api = supertest(process.env.BASE_API)

const createArticle = (token, payload) => api.post('/api/articles/')
    .set('Authorization', `Token ${token}`)
    .send(payload)

module.exports = {
    createArticle
}