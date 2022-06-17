const SlackBot = require('slackbots');
const dotenv = require('dotenv')
const fs = require('fs')

dotenv.config()

const bot = new SlackBot({
  token: `${process.env.BOT_TOKEN}`,
  name: 'bot-slack'
})

bot.on('start', async () => {
  console.log(`token ${process.env.BOT_TOKEN}`)
  const config = {
    username: 'bot-name'
  }
  bot.postMessageToChannel(
    `${process.env.SLACK_CHANNEL}`,
    `Teste`,
    config
  );

  setInterval((function () {
    return process.exit(0);
  }), 120000)
  
})

process.on('exit', function (code) {
  return console.log(`${new Date()} [INFO] About to exit with code ${code}`);
});



