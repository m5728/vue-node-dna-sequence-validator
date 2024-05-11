const assert = require('assert');
const supertest = require('supertest');
const app = require('../index');

const request = supertest(app);

describe('Server Tests', () => {
  describe('API Validation Tests', () => {
    it('should validate proper sequence as valid', async () => {
      const response = await request.post('/api/validate').send({ sequence: 'PNOWVHYA' });

      assert.strictEqual(response.status, 200);
      assert.strictEqual(response.body.isValid, true);
    });

    it('should detect improper sequence as invalid', async () => {
      const response = await request.post('/api/validate').send({ sequence: 'PAPA' });

      assert.strictEqual(response.status, 200);
      assert.strictEqual(response.body.isValid, false);
    });
  });

  it('should serve index.html for root path', async () => {
    const response = await request.get('/');

    assert.strictEqual(response.status, 200);
    assert.ok(response.text.includes('<div id=app>'));
  });
});
