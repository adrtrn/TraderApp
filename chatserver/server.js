var express = require('express');
var Pusher = require('pusher');
var app = express();

const pusher = new Pusher({
  appId: '288760',
  key: '4adf85492acfebaad8bb',
  secret: '6ec8700c38005c3dc18a',
  encrypted: true
});

pusher.trigger('chat-channel', 'new-message', {
  "message": "hello world"
});

app.get('/chat/:chat', function(req,res){
  const chat_data = JSON.parse(req.params.chat);
  pusher.trigger('chat_channel', 'new-message', {chat:chat_data});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.set('port', (process.env.PORT || 5000));

// app.route('/messages', methods=['POST'])

// def new_message():
//   username = request.form['username']
//   text = cgi.escape(request.form['text']) 
//   time = request.form['time']

//   return "great success!"

// app.route('/messages', methods=['POST'])
// def new_message():


//   pusher.trigger('messages', 'new_message', {
//     'text': text,
//     'username': username,
//     'time': time
//   })  