import Twit from 'twit';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const T = new Twit({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_KEY_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

T.get(
  'account/verify_credentials',
  {
    include_entities: false,
    skip_status: true,
    include_email: false,
  },
  onAuthenticated
);

function onAuthenticated(err, res) {
  if (err) {
    throw err;
  }

  console.log('Authentication successful. Running bot...\r\n');
}

T.post(
  'statuses/update',
  { status: 'hello world!' },
  function (err, data, response) {
    console.log(data);
  }
);

// let params = {
//   q: '#100DaysOfCode since:20200606',
//   count: 10,
// };

// function tweetResult(err, data, response) {
//   var tweets = data.statuses;
//   tweets.map((tweet) => {
//     console.log('TWEET HERE----> \n', tweet.text);
//   });
// }

// T.get('search/tweets', params, tweetResult);
