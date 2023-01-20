import Twit from 'twit';
console.log('HELLO ---> ', process.env.API_KEY);

const T = new Twit({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_KEY_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

let params = {
  q: '#100DaysOfCode since:20200606',
  count: 10,
};

function tweetResult(err, data, response) {
  console.log(data);
  var tweets = data.statuses;

  tweets.map((tweet) => {
    console.log('TWEET HERE----> \n', tweet.text);
  });
}

T.get('search/tweets', params, tweetResult);
// T.get(
//   'account/verify_credentials',
//   {
//     include_entities: false,
//     skip_status: true,
//     include_email: false,
//   },
//   onAuthenticated
// );

// function onAuthenticated(err, res) {
//   if (err) {
//     throw err;
//   }

//   console.log('Authentication successful. Running bot...\r\n');
// }
