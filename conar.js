const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
	// Send the message to a designated channel on a server:
	const channel = member.guild.channels.find(ch => ch.name === 'general');
	// Do nothing if the channel wasn't found on this server
	if (!channel)
		return;
	// Send the message, mentioning the member

	const rules = new Discord.Attachment('https://cdn.discordapp.com/attachments/524075147783569429/594707295204671508/welcome_to_yo_MAMA.jpg');
	channel.send(`${member}`, rules);
});

client.login('NTc1Nzg5MTQyNDkxOTIyNDYz.XRgXDA.s6B4hP1xZMtTA1Pl2pIus0WCkYk');