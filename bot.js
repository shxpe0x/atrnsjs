const mineflayer = require('mineflayer');
const keep_alive = require('./keep_alive.js')

console.log('Starting...')

function createBot () {
    const bot = mineflayer.createBot({
    host: D3i7ku.aternos.me",
    port: "52364",
    username: "doter",
    version: false
    })
    bot.on('login', function() {
      console.log('Logged in')
      bot.chat('/register 123123123 123123123') // Исправленная опечатка в слове 'register'
      bot.chat('/login 123123123 123123123')
      // Автоматически начать движение после входа
      bot.setControlState('forward', true)
      bot.setControlState('jump', true)
      bot.setControlState('sprint', true)
    })
    bot.on('chat', (username, message) => {
      if (username === bot.username) return
      switch (message) {
        case ';start':
          bot.chat('24 ATERNOS > Bot started!')
          bot.setControlState('forward', true)
          bot.setControlState('jump', true)
          bot.setControlState('sprint', true)
          break
          case ';stop':
            bot.chat('24 ATERNOS > Bot stoped!')
            bot.clearControlStates()
            break
          }
        })
        bot.on('spawn', function() {
          bot.chat('Bot > Spawned')
        })
        bot.on('death', function() {
          bot.chat('Bot > I died, respawn')
        })
        bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn))
        bot.on('error', err => console.log(err))
        bot.on('end', createBot)
}
createBot()
