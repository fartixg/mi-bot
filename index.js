const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Bot funcionando');
}).listen(process.env.PORT || 3000);

require('dotenv').config();

const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const personajes = {
    nanally: {
        color: '#ed0000',
        titulo: 'Guía del personaje Nanally <:Nanally_1:1503908390802559157>',
        imagen: 'https://raw.githubusercontent.com/fartixg/GUIAS/main/guias%20NTE.jpg'
    },

    daffodill: {
        color: '#5100e7',
        titulo: 'Guía del personaje Daffodill <:Nanally_1:1503908390802559157>',
        imagen: 'https://raw.githubusercontent.com/fartixg/GUIAS/main/guias%20NTE%202-05.jpg'
    },

    hotori: {
        color: '#e40000',
        titulo: 'Guía del personaje Hotori <:Nanally_1:1503908390802559157>',
        imagen: 'https://raw.githubusercontent.com/fartixg/GUIAS/main/guias%20NTE-05.jpg'
    },

    sakiri: {
        color: '#e70000',
        titulo: 'Guía del personaje Sakiri <:Nanally_1:1503908390802559157>',
        imagen: 'https://raw.githubusercontent.com/fartixg/GUIAS/main/Sakiri%20guia%20NTE.jpg'
    },

    chiz: {
        color: '#ff56cf',
        titulo: 'Guía del personaje Chiz <:Nanally_1:1503908390802559157>',
        imagen: 'https://raw.githubusercontent.com/fartixg/GUIAS/main/guias%20NTE-08.jpg'
    },

    lacrimosa: {
        color: '#ef0000',
        titulo: 'Guía del personaje Lacrimosa <:Nanally_1:1503908390802559157>',
        imagen: 'https://raw.githubusercontent.com/fartixg/GUIAS/main/guias%20NTE-10.jpg'
    },

    zero: {
        color: '#5100e7',
        titulo: 'Guía del personaje Zero <:Nanally_1:1503908390802559157>',
        imagen: 'https://raw.githubusercontent.com/fartixg/GUIAS/main/guias%20NTE-09.jpg'
    },

    jiuyuan: {
        color: '#b700ef',
        titulo: 'Guía del personaje Jiuyuan <:Nanally_1:1503908390802559157>',
        imagen: 'https://raw.githubusercontent.com/fartixg/GUIAS/main/guias%20NTE-07.jpg'
    }
};

client.once('clientReady', () => {
    console.log(`Bot conectado como ${client.user.tag}`);
});
client.on('interactionCreate', async (interaction) => {

    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName !== 'guia') return;

    const personaje = interaction.options.getString('personaje');

    const datos = personajes[personaje];

    if (!datos) {

        const embed = new EmbedBuilder()
            .setColor('#e60000')
            .setTitle('Guía no encontrada')
            .setDescription(
                'Todavía no tenemos una guía para ese personaje.'
            );

        return interaction.reply({
            embeds: [embed],
            ephemeral: true
        });

    }

    const embed = new EmbedBuilder()
        .setColor(datos.color)
        .setAuthor({
            name: 'FartixG - Dueño',
            iconURL: 'https://koya.gg/_next/image?url=https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F388641980453748748%2F5e356094b30df8f5ecae2ae4d4490d2a.png%3Fsize%3D512&w=128&q=75'
        })
        .setTitle(datos.titulo)
        .setDescription(
            'Para más guías como esta ve a\n<#1501509689228263425>'
        )
        .setImage(datos.imagen)
        .setFooter({
            text: 'FartixG Squad'
        });

    await interaction.reply({
        embeds: [embed]
    });

});

client.on('messageCreate', (message) => {

    // Ignora mensajes de otros bots
    if (message.author.bot) return;

    // Convierte el mensaje a minúsculas y lo separa por espacios
    const partes = message.content.toLowerCase().split(' ');

    // Guarda el comando y el personaje en variables
    const comando = partes[0];
    const personaje = partes[1];

    // Comprueba si el comando es !guia
    if (comando === '!guia') {

        if (personaje === 'nanally') {

    const embed = new EmbedBuilder()
        .setColor('#ed0000')
        .setAuthor({
            name: 'FartixG - Dueño',
            iconURL: 'https://koya.gg/_next/image?url=https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F388641980453748748%2F5e356094b30df8f5ecae2ae4d4490d2a.png%3Fsize%3D512&w=128&q=75'
        })
        .setTitle('Guía del personaje Nanally <:Nanally_1:1503908390802559157>')
        .setDescription(
            'Para más guías como esta ve a\n<#1501509689228263425>'
        )
        .setImage('https://raw.githubusercontent.com/fartixg/GUIAS/main/guias%20NTE.jpg')
        .setFooter({
            text: 'FartixG Squad'
        });

    message.reply({
        embeds: [embed]
    });

 } else if (personaje === 'daffodill') {

    const embed = new EmbedBuilder()
        .setColor('#5100e7')
        .setAuthor({
            name: 'FartixG - Dueño',
            iconURL: 'https://koya.gg/_next/image?url=https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F388641980453748748%2F5e356094b30df8f5ecae2ae4d4490d2a.png%3Fsize%3D512&w=128&q=75'
        })
        .setTitle('Guía del personaje Daffodill <:Nanally_1:1503908390802559157>')
        .setDescription(
            'Para más guías como esta ve a\n<#1501509689228263425>'
        )
        .setImage('https://raw.githubusercontent.com/fartixg/GUIAS/main/guias%20NTE%202-05.jpg')
        .setFooter({
            text: 'FartixG Squad'
        });

    message.reply({
        embeds: [embed]
    });

 } else if (personaje === 'hotori') {

    const embed = new EmbedBuilder()
        .setColor('#e40000')
        .setAuthor({
            name: 'FartixG - Dueño',
            iconURL: 'https://koya.gg/_next/image?url=https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F388641980453748748%2F5e356094b30df8f5ecae2ae4d4490d2a.png%3Fsize%3D512&w=128&q=75'
        })
        .setTitle('Guía del personaje Hotori <:Nanally_1:1503908390802559157>')
        .setDescription(
            'Para más guías como esta ve a\n<#1501509689228263425>'
        )
        .setImage('https://raw.githubusercontent.com/fartixg/GUIAS/main/guias%20NTE-05.jpg')
        .setFooter({
            text: 'FartixG Squad'
        });

    message.reply({
        embeds: [embed]
    });

 } else if (personaje === 'sakiri') {

    const embed = new EmbedBuilder()
        .setColor('#e70000')
        .setAuthor({
            name: 'FartixG - Dueño',
            iconURL: 'https://koya.gg/_next/image?url=https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F388641980453748748%2F5e356094b30df8f5ecae2ae4d4490d2a.png%3Fsize%3D512&w=128&q=75'
        })
        .setTitle('Guía del personaje Sakiri <:Nanally_1:1503908390802559157>')
        .setDescription(
            'Para más guías como esta ve a\n<#1501509689228263425>'
        )
        .setImage('https://raw.githubusercontent.com/fartixg/GUIAS/main/Sakiri%20guia%20NTE.jpg')
        .setFooter({
            text: 'FartixG Squad'
        });

    message.reply({
        embeds: [embed]
    });

 } else if (personaje === 'chiz') {

    const embed = new EmbedBuilder()
        .setColor('#ff56cf')
        .setAuthor({
            name: 'FartixG - Dueño',
            iconURL: 'https://koya.gg/_next/image?url=https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F388641980453748748%2F5e356094b30df8f5ecae2ae4d4490d2a.png%3Fsize%3D512&w=128&q=75'
        })
        .setTitle('Guía del personaje Chiz <:Nanally_1:1503908390802559157>')
        .setDescription(
            'Para más guías como esta ve a\n<#1501509689228263425>'
        )
        .setImage('https://raw.githubusercontent.com/fartixg/GUIAS/main/guias%20NTE-08.jpg')
        .setFooter({
            text: 'FartixG Squad'
        });

    message.reply({
        embeds: [embed]
    });

 } else if (personaje === 'lacrimosa') {

    const embed = new EmbedBuilder()
        .setColor('#ef0000')
        .setAuthor({
            name: 'FartixG - Dueño',
            iconURL: 'https://koya.gg/_next/image?url=https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F388641980453748748%2F5e356094b30df8f5ecae2ae4d4490d2a.png%3Fsize%3D512&w=128&q=75'
        })
        .setTitle('Guía del personaje Lacrimosa <:Nanally_1:1503908390802559157>')
        .setDescription(
            'Para más guías como esta ve a\n<#1501509689228263425>'
        )
        .setImage('https://raw.githubusercontent.com/fartixg/GUIAS/main/guias%20NTE-10.jpg')
        .setFooter({
            text: 'FartixG Squad'
        });

    message.reply({
        embeds: [embed]
    });

 } else if (personaje === 'zero') {

    const embed = new EmbedBuilder()
        .setColor('#5100e7')
        .setAuthor({
            name: 'FartixG - Dueño',
            iconURL: 'https://koya.gg/_next/image?url=https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F388641980453748748%2F5e356094b30df8f5ecae2ae4d4490d2a.png%3Fsize%3D512&w=128&q=75'
        })
        .setTitle('Guía del personaje Zero <:Nanally_1:1503908390802559157>')
        .setDescription(
            'Para más guías como esta ve a\n<#1501509689228263425>'
        )
        .setImage('https://raw.githubusercontent.com/fartixg/GUIAS/main/guias%20NTE-09.jpg')
        .setFooter({
            text: 'FartixG Squad'
        });

    message.reply({
        embeds: [embed]
    });

  } else if (personaje === 'baicang') {

    const embed = new EmbedBuilder()
        .setColor('#ef009b')
        .setAuthor({
            name: 'FartixG - Dueño',
            iconURL: 'https://koya.gg/_next/image?url=https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F388641980453748748%2F5e356094b30df8f5ecae2ae4d4490d2a.png%3Fsize%3D512&w=128&q=75'
        })
        .setTitle('Guía del personaje Baicang <:Nanally_1:1503908390802559157>')
        .setDescription(
            'Para más guías como esta ve a\n<#1501509689228263425>'
        )
        .setImage('https://raw.githubusercontent.com/fartixg/GUIAS/main/guias%20NTE-13.jpg')
        .setFooter({
            text: 'FartixG Squad'
        });

    message.reply({
        embeds: [embed]
    });

 } else if (personaje === 'haniel') {

    const embed = new EmbedBuilder()
        .setColor('#ef009b')
        .setAuthor({
            name: 'FartixG - Dueño',
            iconURL: 'https://koya.gg/_next/image?url=https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F388641980453748748%2F5e356094b30df8f5ecae2ae4d4490d2a.png%3Fsize%3D512&w=128&q=75'
        })
        .setTitle('Guía del personaje Haniel <:Nanally_1:1503908390802559157>')
        .setDescription(
            'Para más guías como esta ve a\n<#1501509689228263425>'
        )
        .setImage('https://raw.githubusercontent.com/fartixg/GUIAS/main/guias%20NTE-12.jpg')
        .setFooter({
            text: 'FartixG Squad'
        });

    message.reply({
        embeds: [embed]
    });

 } else if (personaje === 'jiuyuan') {

    const embed = new EmbedBuilder()
        .setColor('#b700ef')
        .setAuthor({
            name: 'FartixG - Dueño',
            iconURL: 'https://koya.gg/_next/image?url=https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F388641980453748748%2F5e356094b30df8f5ecae2ae4d4490d2a.png%3Fsize%3D512&w=128&q=75'
        })
        .setTitle('Guía del personaje Jiuyuan <:Nanally_1:1503908390802559157>')
        .setDescription(
            'Para más guías como esta ve a\n<#1501509689228263425>'
        )
        .setImage('https://raw.githubusercontent.com/fartixg/GUIAS/main/guias%20NTE-07.jpg')
        .setFooter({
            text: 'FartixG Squad'
        });

    message.reply({
        embeds: [embed]
    });

 } else {

             const embed = new EmbedBuilder()
        .setColor('#e60000')
        .setAuthor({
            name: 'FartixG - Dueño',
            iconURL: 'https://koya.gg/_next/image?url=https%3A%2F%2Fcdn.discordapp.com%2Favatars%2F388641980453748748%2F5e356094b30df8f5ecae2ae4d4490d2a.png%3Fsize%3D512&w=128&q=75'
        })
        .setTitle('Colocaste mal el comando o aún no tenemos la Guía de este personaje')
        .setDescription(
            'Para ver las guías que tenemos disponibles de momento ve a <#1501509689228263425>'
        );

    message.reply({
        content: 'Lo sentimos mucho <:Daffodill_1:1503909870112604332>',
        embeds: [embed]
    });

}

    }

});

client.login(process.env.TOKEN);