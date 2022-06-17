const SlackBot = require('slackbots');
const dotenv = require('dotenv')
const fs = require('fs')

dotenv.config()

const bot = new SlackBot({
  token: `xoxb-2577572378292-2578976654514-mUmWIAsmuhOKbmq9Du4iV7dw`,
  name: 'bot-slack'
})

bot.on('start', async () => {
  const config = {
    username: 'bot-name'
  }
  bot.postMessageToChannel(
    `message-test`,
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



