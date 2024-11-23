// test/viewTasks.test.js
const request = require('supertest');
const app = require('../app');

describe('GET /tasks', () => {
  it('should return the list of tasks', async () => {
    // Adding a task first
    await request(app).post('/add-task').send({ task: 'Learn automated testing' });
    
    const res = await request(app).get('/tasks');
    expect(res.status).toBe(200);
    expect(res.body).toContain('Learn automated testing');
  });
});
