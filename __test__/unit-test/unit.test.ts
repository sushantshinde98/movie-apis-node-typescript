import request from 'supertest';
import app from '../../src/server';

describe('Test Welcome API', () => {
  test('GET : should return a welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      success: true,
      statusCode: 200,
      messageCode: 'WELCOME',
      message: 'Welcome to Movie APIs!',
      data: null,
    });
  });
});
