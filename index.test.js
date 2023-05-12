const request = require('supertest');
const app = require('./index');

// describe('GET /books', () => {
//   it('should return a list of books', async () => {
//     const res = await request(app).get('/books');
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toHaveLength(5);
//     expect(res.body[0]).toHaveProperty('id');
//     expect(res.body[0]).toHaveProperty('title');
//     expect(res.body[0]).toHaveProperty('author');
//     expect(res.body[0]).toHaveProperty('pageCount');
//     expect(res.body[0]).toHaveProperty('country');
//   });
// });


describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})