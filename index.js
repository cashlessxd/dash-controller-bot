require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    console.log('received message: ', message.content);
    if (message.author.bot) return;

    if (message.content === '!ping') {
        console.log('sending response...');
        message.channel.send('Pong!');
        console.log('sent!')
    }
});

client.login(process.env.TOKEN);