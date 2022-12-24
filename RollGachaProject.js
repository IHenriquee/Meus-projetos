const Discord = require('discord.js')

module.exports = {
    name: "roll", // Coloque o nome do comando
    description: "🚀 - Role para conseguir novos personagems!", // Coloque a descrição do comando
    type: Discord.ApplicationCommandType.ChatInput,
  
    run: async (client, interaction) => {  

      var PersonagensLimiteds = [
        {"n":"ZeroTwo", "r": "Limitado", "u": "https://cdn.discordapp.com/attachments/1052264552454172682/1056000978983338106/1671840518520.png", "v": "1000000"},
        {"n": "Dio", "r": "Limitado", "u": "https://cdn.discordapp.com/attachments/1052264552454172682/1056001372631355493/1671749263505.png", "v": "10000000"}
      ]
      var PersonagensSecretos = [
        {"n":"Pucci", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055615001597071360/1671748465994.png", "v": "200000"},
        {"n":"Giorno (Requiem)", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055614971486150686/1671748444716.png", "v": "200000"},
        {"n":"Sukuna", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055296756809736213/1671672667246.png", "v": "200000"},
        {"n":"Gojo (Domínio)", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055296736635129987/1671672651509.png", "v": "200000"},
        {"n":"Jiren (Full Power)", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054458894795153428/1671472894986.png", "v": "200000"},
        {"n":"Goku (MUI)", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054458856421466192/1671472877447.png", "v": "200000"},
        {"n":"Midoriya e Eri", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054141752921034883/1671396997749.png", "v": "200000"},
        {"n":"Shigaraki (Despertar)", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054141521135403109/1671397072862.png", "v": "200000"},
        {"n":"Eren Yeager (T4)", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1053867465819574282/1671331845369.png", "v": "200000"},
        {"n":"Levi Ackerman (Modo Beserk)", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1053867429735977121/1671331830860.png", "v": "200000"},
        {"n":"Yoriichi Tsugikuni", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1052268061039788142/1670950577794.png", "v": "200000"},
        {"n":"Gol D. Roger", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1052267917154201721/1670950473306.png", "v": "200000"},
        {"n":"Madara (Rikudo Sennin)", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1052267883020959844/1670950394118.png", "v": "200000"},
      ]
      var PersonagensDivinos = [
        {"n":"DIO", "r": "Divino", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055614929421467739/1671748481266.png", "v": "100000"},
        {"n":"Gojo", "r": "Divino", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055296699083534366/1671672636729.png", "v": "100000"},
        {"n":"Gogeta (Blue)", "r": "Divino", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054458828328013944/1671472862723.png", "v": "100000"},
        {"n":"All Might", "r": "Divino", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054141465997090886/1671397169836.png", "v": "100000"},
        {"n":"Levi Ackerman", "r": "Divino", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1053867374002053170/1671331801270.png", "v": "100000"},
        {"n":"Muzan", "r": "Divino", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1052264965295321148/1670949869998.png", "v": "100000"},
        {"n":"Luffy Gear 5", "r": "Divino", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048273761339707392/1669998117120.png", "v": "100000"},
        {"n":"Naruto", "r": "Divino", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048271004910223502/1669997662875.png", "v": "100000"},
      ]
      var PersonagensMiticos = [
        {"n":"Jotaro", "r": "Mitico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055614907787255838/1671748496581.png", "v": "50000"},
        {"n":"Nanami", "r": "Mitico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055296634583535626/1671672622360.png", "v": "50000"},
        {"n":"Jiren", "r": "Mitico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054458794211553280/1671472847562.png", "v": "50000"},
        {"n":"Endeavor", "r": "Mitico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054141431289221170/1671397088971.png", "v": "50000"},
        {"n":"Mikasa Ackerman (T4)", "r": "Mitico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1053867335934550136/1671331785715.png", "v": "50000"},
        {"n":"Kokushibo", "r": "Mitico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1052264953698074715/1670949824776.png", "v": "50000"},
        {"n":"Shanks", "r": "Mitico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048273701990318161/1669998219055.png", "v": "50000"},
        {"n":"Madara", "r": "Mitico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048269252718768189/1669996210910.png", "v": "50000"},
      ]
      var PersonagensLendarios = [
        {"n":"Kira Yoshikage", "r": "Lendario", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055614861679284234/1671748378080.png", "v": "25000"},
        {"n":"Aoi Todo", "r": "Lendario", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055296607001776188/1671672607333.png", "v": "25000"},
        {"n":"Goku Black (Rosé)", "r": "Lendario", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054458775148449882/1671472832414.png", "v": "25000"},
        {"n":"Dabi", "r": "Lendario", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054141405498441788/1671397121781.png", "v": "25000"},
        {"n":"Zeke Yeager", "r": "Lendario", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1053867272604754010/1671331868240.png", "v": "25000"},
        {"n":"Tomioka", "r": "Lendario", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1052264933309554728/1670949589144.png", "v": "25000"},
        {"n":"Barba Negra", "r": "Lendario", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048273659074187364/1669998202813.png", "v": "25000"},
        {"n":"Itachi", "r": "Lendario", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048269164613206186/1669996224223.png", "v": "25000"},
      ]
      var PersonagensEpicos = [
        {"n":"Josuke", "r": "Epico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055614811607670784/1671748430143.png", "v": "10000"},
        {"n":"Megumi", "r": "Epico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055296579055128638/1671672591364.png", "v": "10000"},
        {"n":"Freeza (Dourado)", "r": "Epico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054458727618596864/1671472817777.png", "v": "10000"},
        {"n":"Todoroki", "r": "Epico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054141382203297803/1671397106017.png", "v": "10000"},
        {"n":"Mikasa Ackerman", "r": "Epico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1053867247266959390/1671331529695.png", "v": "10000"},
        {"n":"Zenitsu", "r": "Epico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1052264912770060298/1670949553715.png", "v": "10000"},
        {"n":"Roronoa Zoro", "r": "Epico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048273625817554944/1669998235620.png", "v": "10000"},
        {"n":"Kakashi", "r": "Epico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048271004583071744/1669997622712.png", "v": "10000"},
      ]
      var PersonagensIncomuns = [
        {"n":"Sasuke", "r": "Incomum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048268818432147556/1669996290310.png", "v": "5000"},
        {"n":"Vinsmoke Sanji", "r": "Incomum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048273589327118448/1669998163965.png", "v": "5000"},
        {"n":"Inosuke", "r": "Incomum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1052264894734540951/1670949401366.png", "v": "5000"},
        {"n":"Armin", "r": "Incomum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1053867151779450981/1671331816106.png", "v": "5000"},
        {"n":"Bakugou", "r": "Incomum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054141360946557050/1671397153128.png", "v": "5000"},
        {"n":"Vegeta", "r": "Incomum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054458697331527771/1671472802165.png", "v": "5000"},
        {"n":"Nobara", "r": "Incomum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055296556074536970/1671672576009.png", "v": "5000"},
        {"n":"Joseph", "r": "Incomum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055614779743547484/1671748400086.png", "v": "5000"},
      ]
      var PersonagensComuns = [
        {"n":"Naruto uzumaki", "r": "Comum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048268719886966855/1669996303125.png", "v": "2000"},
        {"n":"Monkey D. Luffy", "r": "Comum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048273552148811847/1669998180582.png", "v": "2000"},
        {"n":"Tanjiro", "r": "Comum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1052264872324366357/1670949349076.png", "v": "2000"},
        {"n":"Eren Yeager", "r": "Comum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1053867128706568223/1671331885108.png", "v": "2000"},
        {"n":"Midoriya", "r": "Comum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054141337072566372/1671397137521.png", "v": "2000"},
        {"n":"Goku", "r": "Comum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054458671653982359/1671472781174.png", "v": "2000"},
        {"n":"Itadori", "r": "Comum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055296538072588398/1671672561095.png", "v": "2000"},
        {"n":"Jonathan", "r": "Comum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055614755290747021/1671748415006.png", "v": "2000"},
      ]
      
      

      
      let variavelL = PersonagensLimiteds[Math.floor(Math.random() * PersonagensLimiteds.length)]
      let variavelS = PersonagensSecretos[Math.floor(Math.random() * PersonagensSecretos.length)]
      let variavelC = PersonagensComuns[Math.floor(Math.random() * PersonagensComuns.length)]
      let variavelI = PersonagensIncomuns[Math.floor(Math.random() * PersonagensIncomuns.length)]
      let variavelE = PersonagensEpicos[Math.floor(Math.random() * PersonagensEpicos.length)]
      let variavelLE = PersonagensLendarios[Math.floor(Math.random() * PersonagensLendarios.length)]
      let variavelM = PersonagensMiticos[Math.floor(Math.random() * PersonagensMiticos.length)]
      let variavelD = PersonagensDivinos[Math.floor(Math.random() * PersonagensDivinos.length)]
    
      const Chance = Math.random()

      if (Chance < 0.005) {
        let embedpegou = new Discord.EmbedBuilder()
        .setTitle(`:roll: | Roll!`)
        .setDescription(`:ruby_anotando: Parabéns! Você pegou **${variavelL.n}**!\n\n:ruby_brilhos: Raridade: **${variavelL.r}**\n\n:Christmas: Sabia que está tendo um evento de natal e você ganha 2x RubyCoins em todos os comandos de economia?!`)
        .setImage(variavelL.u)
        .setColor(`LuminousVividPink`)

        let butao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
            .setCustomId("nada")
            .setEmoji(`<:ruby_coins:1051943361860341853>`)
            .setStyle(Discord.ButtonStyle.Success)
            .setLabel(`Comprar ${variavelL.n} - ${variavelL.v} RubyCoins`)
        )
        interaction.reply({ embeds: [embedpegou], components: [butao]}).then((message) => {
            let filtro_p = (msg) => msg.customId === `nada`
            let coletor_p = interaction.channel.createMessageComponentCollector({ filter: filtro_p, max: 1 })

            coletor_p.on('collect', (c) => {
                c.reply({ content: `:Rubyparty: | O usuario ${c.user} comprou o personagem ${variavelL.n} por ${variavelL.v} RubyCoins! (Adicionado na RubyDex)`})
            })
        })
      }

      else if (Chance < 0.01) {
        let embedpegou = new Discord.EmbedBuilder()
        .setTitle(`:roll: | Roll!`)
        .setDescription(`:ruby_anotando: Parabéns! Você pegou **${variavelS.n}**!\n\n:ruby_brilhos: Raridade: **${variavelS.r}**\n\n:Christmas: Sabia que está tendo um evento de natal e você ganha 2x RubyCoins em todos os comandos de economia?!`)
        .setImage(variavelS.u)
        .setColor(`LuminousVividPink`)

        let butao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
            .setCustomId("nada")
            .setEmoji(`<:ruby_coins:1051943361860341853>`)
            .setStyle(Discord.ButtonStyle.Success)
            .setLabel(`Comprar ${variavelS.n} - ${variavelS.v} RubyCoins`)
        )
        interaction.reply({ embeds: [embedpegou], components: [butao]}).then((message) => {
            let filtro_p = (msg) => msg.customId === `nada`
            let coletor_p = interaction.channel.createMessageComponentCollector({ filter: filtro_p, max: 1 })

            coletor_p.on('collect', (c) => {
                c.reply({ content: `:Rubyparty: | O usuario ${c.user} comprou o personagem ${variavelS.n} por ${variavelS.v} RubyCoins! (Adicionado na RubyDex)`})
            })
        })
      }
      else if (Chance < 0.01) {
        let embedpegou = new Discord.EmbedBuilder()
        .setTitle(`:roll: | Roll!`)
        .setDescription(`:ruby_anotando: Parabéns! Você pegou **${variavelD.n}**!\n\n:ruby_brilhos: Raridade: **${variavelD.r}**\n\n:Christmas: Sabia que está tendo um evento de natal e você ganha 2x RubyCoins em todos os comandos de economia?!`)
        .setImage(variavelD.u)
        .setColor(`LuminousVividPink`)

        let butao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
            .setCustomId("nada")
            .setEmoji(`<:ruby_coins:1051943361860341853>`)
            .setStyle(Discord.ButtonStyle.Success)
            .setLabel(`Comprar ${variavelD.n} - ${variavelD.v} RubyCoins`)
        )
        interaction.reply({ embeds: [embedpegou], components: [butao]}).then((message) => {
            let filtro_p = (msg) => msg.customId === `nada`
            let coletor_p = interaction.channel.createMessageComponentCollector({ filter: filtro_p, max: 1 })

            coletor_p.on('collect', (c) => {
                c.reply({ content: `:Rubyparty: | O usuario ${c.user} comprou o personagem ${variavelD.n} por ${variavelD.v} RubyCoins! (Adicionado na RubyDex)`})
            })
        })
      }
      else if (Chance < 0.10) {
        let embedpegou = new Discord.EmbedBuilder()
        .setTitle(`:roll: | Roll!`)
        .setDescription(`:ruby_anotando: Parabéns! Você pegou **${variavelM.n}**!\n\n:ruby_brilhos: Raridade: **${variavelM.r}**\n\n:Christmas: Sabia que está tendo um evento de natal e você ganha 2x RubyCoins em todos os comandos de economia?!`)
        .setImage(variavelM.u)
        .setColor(`LuminousVividPink`)

        let butao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
            .setCustomId("nada")
            .setEmoji(`<:ruby_coins:1051943361860341853>`)
            .setStyle(Discord.ButtonStyle.Success)
            .setLabel(`Comprar ${variavelM.n} - ${variavelM.v} RubyCoins`)
        )
        interaction.reply({ embeds: [embedpegou], components: [butao]}).then((message) => {
            let filtro_p = (msg) => msg.customId === `nada`
            let coletor_p = interaction.channel.createMessageComponentCollector({ filter: filtro_p, max: 1 })

            coletor_p.on('collect', (c) => {
                c.reply({ content: `:Rubyparty: | O usuario ${c.user} comprou o personagem ${variavelM.n} por ${variavelM.v} RubyCoins! (Adicionado na RubyDex)`})
            })
        })
      }
      else if (Chance < 0.20) {
        let embedpegou = new Discord.EmbedBuilder()
        .setTitle(`:roll: | Roll!`)
        .setDescription(`:ruby_anotando: Parabéns! Você pegou **${variavelLE.n}**!\n\n:ruby_brilhos: Raridade: **${variavelLE.r}**\n\n:Christmas: Sabia que está tendo um evento de natal e você ganha 2x RubyCoins em todos os comandos de economia?!`)
        .setImage(variavelLE.u)
        .setColor(`LuminousVividPink`)

        let butao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
            .setCustomId("nada")
            .setEmoji(`<:ruby_coins:1051943361860341853>`)
            .setStyle(Discord.ButtonStyle.Success)
            .setLabel(`Comprar ${variavelLE.n} - ${variavelLE.v} RubyCoins`)
        )
        interaction.reply({ embeds: [embedpegou], components: [butao]}).then((message) => {
            let filtro_p = (msg) => msg.customId === `nada`
            let coletor_p = interaction.channel.createMessageComponentCollector({ filter: filtro_p, max: 1 })

            coletor_p.on('collect', (c) => {
                c.reply({ content: `:Rubyparty: | O usuario ${c.user} comprou o personagem ${variavelLE.n} por ${variavelLE.v} RubyCoins! (Adicionado na RubyDex)`})
            })
        })
      }

      else if (Chance < 0.5) {
        let embedpegou = new Discord.EmbedBuilder()
        .setTitle(`:roll: | Roll!`)
        .setDescription(`:ruby_anotando: Parabéns! Você pegou **${variavelE.n}**!\n\n:ruby_brilhos: Raridade: **${variavelE.r}**\n\n:Christmas: Sabia que está tendo um evento de natal e você ganha 2x RubyCoins em todos os comandos de economia?!`)
        .setImage(variavelE.u)
        .setColor(`LuminousVividPink`)

        let butao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
            .setCustomId("nada")
            .setEmoji(`<:ruby_coins:1051943361860341853>`)
            .setStyle(Discord.ButtonStyle.Success)
            .setLabel(`Comprar ${variavelE.n} - ${variavelE.v} RubyCoins`)
        )
        interaction.reply({ embeds: [embedpegou], components: [butao]}).then((message) => {
            let filtro_p = (msg) => msg.customId === `nada`
            let coletor_p = interaction.channel.createMessageComponentCollector({ filter: filtro_p, max: 1 })

            coletor_p.on('collect', (c) => {
                c.reply({ content: `:Rubyparty: | O usuario ${c.user} comprou o personagem ${variavelE.n} por ${variavelE.v} RubyCoins! (Adicionado na RubyDex)`})
            })
        })
      }

      else if (Chance < 0.8) {
        let embedpegou = new Discord.EmbedBuilder()
        .setTitle(`:roll: | Roll!`)
        .setDescription(`:ruby_anotando: Parabéns! Você pegou **${variavelI.n}**!\n\n:ruby_brilhos: Raridade: **${variavelI.r}**\n\n:Christmas: Sabia que está tendo um evento de natal e você ganha 2x RubyCoins em todos os comandos de economia?!`)
        .setImage(variavelI.u)
        .setColor(`LuminousVividPink`)

        let butao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
            .setCustomId("nada")
            .setEmoji(`<:ruby_coins:1051943361860341853>`)
            .setStyle(Discord.ButtonStyle.Success)
            .setLabel(`Comprar ${variavelI.n} - ${variavelI.v} RubyCoins`)
        )
        interaction.reply({ embeds: [embedpegou], components: [butao]}).then((message) => {
            let filtro_p = (msg) => msg.customId === `nada`
            let coletor_p = interaction.channel.createMessageComponentCollector({ filter: filtro_p, max: 1 })

            coletor_p.on('collect', (c) => {
                c.reply({ content: `:Rubyparty: | O usuario ${c.user} comprou o personagem ${variavelI.n} por ${variavelI.v} RubyCoins! (Adicionado na RubyDex)`})
            })
        })
      }

      else if (Chance < 2.0) {
        let embedpegou = new Discord.EmbedBuilder()
        .setTitle(`:roll: | Roll!`)
        .setDescription(`:ruby_anotando: Parabéns! Você pegou **${variavelC.n}**!\n\n:ruby_brilhos: Raridade: **${variavelC.r}**\n\n:Christmas: Sabia que está tendo um evento de natal e você ganha 2x RubyCoins em todos os comandos de economia?!`)
        .setImage(variavelC.u)
        .setColor(`LuminousVividPink`)

        let butao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
            .setCustomId("nada")
            .setEmoji(`<:ruby_coins:1051943361860341853>`)
            .setStyle(Discord.ButtonStyle.Success)
            .setLabel(`Comprar ${variavelC.n} - ${variavelC.v} RubyCoins`)
        )
        interaction.reply({ embeds: [embedpegou], components: [butao]}).then((message) => {
            let filtro_p = (msg) => msg.customId === `nada`
            let coletor_p = interaction.channel.createMessageComponentCollector({ filter: filtro_p, max: 1 })

            coletor_p.on('collect', (c) => {
                c.reply({ content: `:Rubyparty: | O usuario ${c.user} comprou o personagem ${variavelC.n} por ${variavelC.v} RubyCoins! (Adicionado na RubyDex)`})
            })
        })
      }

      

  }
}
