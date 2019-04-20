const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/test', (req, res) => {
  res.send({
    "return_string": everyThirdLetter(req.body.string_to_cut)
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

function everyThirdLetter(string) {
  let chars = string.split('');
  let filteredChars = chars.filter((char, index) => (index + 1) % 3 === 0);

  return filteredChars.join('');
}
