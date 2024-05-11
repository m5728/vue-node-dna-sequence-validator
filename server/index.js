const express = require('express');
const db = require('./db.js');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dnaform/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dnaform/dist', 'index.html'));
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/validate', async (req, res) => {
  let sequence = req.body.sequence;

  try {
    const isSequenceValid = (seq) => {
      if (seq.length % 2 !== 0) {
        return false;
      } else {
        seq = seq.split('');
        const validPairs = ['PA', 'NY', 'OH', 'WV'];
        while (seq.length > 0) {
          let currentPair = [seq.shift(), seq.pop()].join('');
          if (!validPairs.includes(currentPair)) {
            return false;
          }
        }
        return true;
      }
    };

    const isValid = isSequenceValid(sequence);
    if (isValid) {
      await db.storePromise(sequence);
    }
    res.json({ isValid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
