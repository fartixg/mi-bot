require('dotenv').config();

const { REST, Routes, SlashCommandBuilder } = require('discord.js');

const commands = [
    new SlashCommandBuilder()
        .setName('guia')
        .setDescription('Muestra una guía de personaje')
        .addStringOption(option =>
            option
                .setName('personaje')
                .setDescription('Selecciona un personaje')
                .setRequired(true)
                .addChoices(
                    { name: 'Nanally', value: 'nanally' },
                    { name: 'Daffodill', value: 'daffodill' },
                    { name: 'Sakiri', value: 'sakiri' },
                    { name: 'Hotori', value: 'hotori' },
                    { name: 'Chiz', value: 'chiz' },
                    { name: 'Lacrimosa', value: 'lacrimosa' },
                    { name: 'Zero', value: 'zero' },
                    { name: 'Jiuyuan', value: 'jiuyuan' }
                    { name: 'Baicang', value: 'baicang' },
                    { name: 'Haniel', value: 'haniel' },
                )
        )
        .toJSON()
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registrando comandos...');

        await rest.put(
            Routes.applicationGuildCommands(
                '1514007943077691392',
                '801606096120184832'
            ),
            { body: commands }
        );

        console.log('Comandos registrados correctamente.');
    } catch (error) {
        console.error(error);
    }
})();