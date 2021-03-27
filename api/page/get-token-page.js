require('dotenv').config()
const supertest = require('supertest');

const api = supertest(process.env.BASE_API)

const getToken = (payload) => api.post('/api/users/login')
    .send(payload)

module.exports = {
    getToken
}