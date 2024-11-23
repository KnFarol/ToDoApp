// test/addTask.test.js
const request = require('supertest');
const app = require('../app');

describe('POST /add-task', () => {
  it('should add a task to the list', async () => {
    const res = await request(app)
      .post('/add-task')
      .send({ task: 'Learn automated testing' });
    expect(res.status).toBe(200);
    expect(res.text).toBe('Task added');
  });

  it('should return error if task is missing', async () => {
    const res = await request(app)
      .post('/add-task')
      .send({});
    expect(res.status).toBe(400);
    expect(res.text).toBe('Task is required');
  });
});
