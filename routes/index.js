var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Mini Message Board', messages: messages });
});

router.post('/new', function (req, res, next) {
  let messageUser = req.body.messageUser;
  let messageText = req.body.messageText;
  let originalDate = new Date();
  const options = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  let formattedDate = new Intl.DateTimeFormat('en-US', options).format(originalDate);
  messages.push({ text: messageText, user: messageUser, added: formattedDate });

  // Remove the line below
  res.redirect('/');
  res.render('index', { title: 'Mini Message Board', messages: messages });

});


module.exports = router;
