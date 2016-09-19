'use strict';

/*
npm version of the following curl command:
token=`curl -s curl -H "Content-Type: application/json;charset=UTF-8" -X POST https://app.sli.do/v0.4/events/73371/auth | jq -r '.access_token'` && curl -H "Authorization: Bearer $token" -H "Content-Type: application/json" -H "Accept: application/json" -X POST -d '{"score":1}' https://app.sli.do/v0.4/events/73371/questions/763350/like
*/

const request = require('request'),
  co = require('co'),
  Promise = require('bluebird'),
  requestAsync = Promise.promisify(request),
  chalk = require('chalk'),
  argv = require('minimist')(process.argv.slice(2)),
  args = {
    questionId: argv.q,
    eventId: argv.e,
    reps: argv.r || 1
  };

if (!args.questionId || !args.eventId) {
  console.log(chalk.red('You must specify a question ID and an event ID'));
} else {
  console.log(chalk.cyan('Time for some fun!'));
  co(function*() {

    for (let i = 0; i < args.reps; i++) {
      let authTokenResponse = yield requestAsync({
          url: `https://app.sli.do/v0.4/events/${args.eventId}/auth`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }),
        authToken = JSON.parse(authTokenResponse.body).access_token,
        likeResponse = yield requestAsync({
          url: `https://app.sli.do/v0.4/events/${args.eventId}/questions/${args.questionId}/like`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': `Bearer ${authToken}`
          },
          json: {
            "score":1
          }
        });
      console.log(chalk.gray(JSON.stringify(likeResponse.body)));
    }
    console.log(chalk.green(`You've just up-voted question ${args.questionId} ${args.reps} times.`));
  });
}
