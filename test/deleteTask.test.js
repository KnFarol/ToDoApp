const request = require('supertest');
const app = require('../app');

describe('DELETE /delete-task', () => {
  it('should delete a task from the list', async () => {
    // First, add a task to the list
    await request(app).post('/add-task').send({ task: 'Learn automated testing' });

    // Now, send a delete request
    const res = await request(app)
      .delete('/delete-task')
      .send({ task: 'Learn automated testing' });
    expect(res.status).toBe(200); // Status should be 200 (success)
    expect(res.text).toBe('Task deleted'); // Check the response text
  });
});
