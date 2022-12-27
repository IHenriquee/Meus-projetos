  const Discord = require("discord.js")
const mu = require("@nooxbr/math-utilities")
const Gacha = require('../../Schemas/GachaSchema') //qualquer schema vai puxar asssim na pasta comandos ss é so mudar o "Gacha"
const Users = require('../../Schemas/UserSchema')
const Clients = require('../../Schemas/ClientSchema') // linde, tem como fechar esses var? pq eu to surtando aq? // onde tem os personagem // vc ssabe fechar?
const Dex = require('../../Schemas/PersonagemSchema')  //ja ta fechado

module.exports = {
    name: "roll",
    aliases: ["Roll"], 

    run: async(client, message, args) => {

      let GachaDB = await Gacha.findOne({ userID: message.author.id }) || new Gacha({ userID: message.author.id })

  let UserDB = await Users.findOne({ userID: message.author.id }) || new Users({ userID: message.author.id })


  let ClientDB = await Clients.findOne({ clientID: "1038836714988376114" }) || new Clients({ clientID: "1038836714988376114" })

      
      var PersonagensLimiteds = [
        {"n":"ZeroTwo", "r": "Limitado", "u": "https://cdn.discordapp.com/attachments/1052264552454172682/1056000978983338106/1671840518520.png", "v": "800000", "h": "#fc7303"},
        {"n": "Dio", "r": "Limitado", "u": "https://cdn.discordapp.com/attachments/1052264552454172682/1056001372631355493/1671749263505.png", "v": "800000", "h": "#fc7303"}
      ]
      var PersonagensSecretos = [
        {"n":"Pucci", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055615001597071360/1671748465994.png", "v": "200000", "h": "#000001"},
        {"n":"Giorno (Requiem)", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055614971486150686/1671748444716.png", "v": "200000", "h": "#000001"},
        {"n":"Sukuna", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055296756809736213/1671672667246.png", "v": "200000", "h": "#000001"},
        {"n":"Gojo (Domínio)", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055296736635129987/1671672651509.png", "v": "200000", "h": "#000001"},
        {"n":"Jiren (Full Power)", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054458894795153428/1671472894986.png", "v": "200000", "h": "#000001"},
        {"n":"Goku (MUI)", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054458856421466192/1671472877447.png", "v": "200000", "h": "#000001"},
        {"n":"Midoriya e Eri", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054141752921034883/1671396997749.png", "v": "200000", "h": "#000001"},
        {"n":"Shigaraki (Despertar)", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054141521135403109/1671397072862.png", "v": "200000", "h": "#000001"},
        {"n":"Eren Yeager (T4)", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1053867465819574282/1671331845369.png", "v": "200000", "h": "#000001"},
        {"n":"Levi Ackerman (Modo Beserk)", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1053867429735977121/1671331830860.png", "v": "200000", "h": "#000001"},
        {"n":"Yoriichi Tsugikuni", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1052268061039788142/1670950577794.png", "v": "200000", "h": "#000001"},
        {"n":"Gol D. Roger", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1052267917154201721/1670950473306.png", "v": "200000", "h": "#000001"},
        {"n":"Madara (Rikudo Sennin)", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1052267883020959844/1670950394118.png", "v": "200000", "h": "#000001"},
        {"n":"Kira (Light)", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1056302572962598922/1671912537030.png", "v": "200000", "h": "#000001"},
        {"n":"Rimuru Tempest", "r": "Secreto", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1056301900242354186/1671912376004.png", "v": "200000", "h": "#000001"},
      ]
      var PersonagensDivinos = [
        {"n":"DIO", "r": "Divino", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055614929421467739/1671748481266.png", "v": "100000", "h": "#7dfdff"},
        {"n":"Gojo", "r": "Divino", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055296699083534366/1671672636729.png", "v": "100000", "h": "#7dfdff"},
        {"n":"Gogeta (Blue)", "r": "Divino", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054458828328013944/1671472862723.png", "v": "100000", "h": "#7dfdff"},
        {"n":"All Might", "r": "Divino", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054141465997090886/1671397169836.png", "v": "100000", "h": "#7dfdff"},
        {"n":"Levi Ackerman", "r": "Divino", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1053867374002053170/1671331801270.png", "v": "100000", "h": "#7dfdff"},
        {"n":"Muzan", "r": "Divino", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1052264965295321148/1670949869998.png", "v": "100000", "h": "#7dfdff"},
        {"n":"Luffy Gear 5", "r": "Divino", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048273761339707392/1669998117120.png", "v": "100000", "h": "#7dfdff"},
        {"n":"Naruto", "r": "Divino", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048271004910223502/1669997662875.png", "v": "100000", "h": "#7dfdff"},
      ]
      var PersonagensMiticos = [
        {"n":"Jotaro", "r": "Mitico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055614907787255838/1671748496581.png", "v": "50000", "h": "#ff0000"},
        {"n":"Nanami", "r": "Mitico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055296634583535626/1671672622360.png", "v": "50000", "h": "#ff0000"},
        {"n":"Jiren", "r": "Mitico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054458794211553280/1671472847562.png", "v": "50000", "h": "#ff0000"},
        {"n":"Endeavor", "r": "Mitico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054141431289221170/1671397088971.png", "v": "50000", "h": "#ff0000"},
        {"n":"Mikasa Ackerman (T4)", "r": "Mitico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1053867335934550136/1671331785715.png", "v": "50000", "h": "#ff0000"},
        {"n":"Kokushibo", "r": "Mitico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1052264953698074715/1670949824776.png", "v": "50000", "h": "#ff0000"},
        {"n":"Shanks", "r": "Mitico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048273701990318161/1669998219055.png", "v": "50000", "h": "#ff0000"},
        {"n":"Madara", "r": "Mitico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048269252718768189/1669996210910.png", "v": "50000", "h": "#ff0000"},
      ]
      var PersonagensLendarios = [
        {"n":"Kira Yoshikage", "r": "Lendario", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055614861679284234/1671748378080.png", "v": "25000", "h": "#eaff08"},
        {"n":"Aoi Todo", "r": "Lendario", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055296607001776188/1671672607333.png", "v": "25000", "h": "#eaff08"},
        {"n":"Goku Black (Rosé)", "r": "Lendario", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054458775148449882/1671472832414.png", "v": "25000", "h": "#eaff08"},
        {"n":"Dabi", "r": "Lendario", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054141405498441788/1671397121781.png", "v": "25000", "h": "#eaff08"},
        {"n":"Zeke Yeager", "r": "Lendario", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1053867272604754010/1671331868240.png", "v": "25000", "h": "#eaff08"},
        {"n":"Tomioka", "r": "Lendario", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1052264933309554728/1670949589144.png", "v": "25000", "h": "#eaff08"},
        {"n":"Barba Negra", "r": "Lendario", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048273659074187364/1669998202813.png", "v": "25000", "h": "#eaff08"},
        {"n":"Itachi", "r": "Lendario", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048269164613206186/1669996224223.png", "v": "25000", "h": "#eaff08"},
      ]
      var PersonagensEpicos = [
        {"n":"Josuke", "r": "Epico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055614811607670784/1671748430143.png", "v": "10000", "h": "#6f08ff"},
        {"n":"Megumi", "r": "Epico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055296579055128638/1671672591364.png", "v": "10000", "h": "#6f08ff"},
        {"n":"Freeza (Dourado)", "r": "Epico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054458727618596864/1671472817777.png", "v": "10000", "h": "#6f08ff"},
        {"n":"Todoroki", "r": "Epico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054141382203297803/1671397106017.png", "v": "10000", "h": "#6f08ff"},
        {"n":"Mikasa Ackerman", "r": "Epico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1053867247266959390/1671331529695.png", "v": "10000", "h": "#6f08ff"},
        {"n":"Zenitsu", "r": "Epico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1052264912770060298/1670949553715.png", "v": "10000", "h": "#6f08ff"},
        {"n":"Roronoa Zoro", "r": "Epico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048273625817554944/1669998235620.png", "v": "10000", "h": "#6f08ff"},
        {"n":"Kakashi", "r": "Epico", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048271004583071744/1669997622712.png", "v": "10000", "h": "#6f08ff"},
      ]
      var PersonagensIncomuns = [
        {"n":"Sasuke", "r": "Incomum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048268818432147556/1669996290310.png", "v": "5000", "h": "#0877ff"},
        {"n":"Vinsmoke Sanji", "r": "Incomum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048273589327118448/1669998163965.png", "v": "5000", "h": "#0877ff"},
        {"n":"Inosuke", "r": "Incomum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1052264894734540951/1670949401366.png", "v": "5000", "h": "#0877ff"},
        {"n":"Armin", "r": "Incomum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1053867151779450981/1671331816106.png", "v": "5000", "h": "#0877ff"},
        {"n":"Bakugou", "r": "Incomum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054141360946557050/1671397153128.png", "v": "5000", "h": "#0877ff"},
        {"n":"Vegeta", "r": "Incomum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054458697331527771/1671472802165.png", "v": "5000", "h": "#0877ff"},
        {"n":"Nobara", "r": "Incomum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055296556074536970/1671672576009.png", "v": "5000", "h": "#0877ff"},
        {"n":"Joseph", "r": "Incomum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055614779743547484/1671748400086.png", "v": "5000", "h": "#0877ff"},
      ]
      var PersonagensComuns = [
        {"n":"Naruto uzumaki", "r": "Comum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048268719886966855/1669996303125.png", "v": "2000", "h": "#21ff08"},
        {"n":"Monkey D. Luffy", "r": "Comum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1048273552148811847/1669998180582.png", "v": "2000", "h": "#21ff08"},
        {"n":"Tanjiro", "r": "Comum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1052264872324366357/1670949349076.png", "v": "2000", "h": "#21ff08"},
        {"n":"Eren Yeager", "r": "Comum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1053867128706568223/1671331885108.png", "v": "2000", "h": "#21ff08"},
        {"n":"Midoriya", "r": "Comum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054141337072566372/1671397137521.png", "v": "2000", "h": "#21ff08"},
        {"n":"Goku", "r": "Comum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1054458671653982359/1671472781174.png", "v": "2000", "h": "#21ff08"},
        {"n":"Itadori", "r": "Comum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055296538072588398/1671672561095.png", "v": "2000", "h": "#21ff08"},
        {"n":"Jonathan", "r": "Comum", "u": "https://cdn.discordapp.com/attachments/1047296657714335845/1055614755290747021/1671748415006.png", "v": "2000", "h": "#21ff08"},
      ]
      
      var PersonagensNatalino = [
        {"n":"", "r": "", "u": "", "v": "", "h": "#"},
      ]

      var PersonagensEspeciais = [
        {"n":"Premium", "r": "Unico", "u": "https://cdn.discordapp.com/attachments/1052264552454172682/1056000978983338106/1671840518520.png", "v": "0", "h": "#ff0863"},
      ]

      
      let variavelL = PersonagensLimiteds[Math.floor(Math.random() * PersonagensLimiteds.length)]
      let variavelS = PersonagensSecretos[Math.floor(Math.random() * PersonagensSecretos.length)]
      let variavelC = PersonagensComuns[Math.floor(Math.random() * PersonagensComuns.length)]
      let variavelI = PersonagensIncomuns[Math.floor(Math.random() * PersonagensIncomuns.length)]
      let variavelE = PersonagensEpicos[Math.floor(Math.random() * PersonagensEpicos.length)]
      let variavelLE = PersonagensLendarios[Math.floor(Math.random() * PersonagensLendarios.length)]
      let variavelM = PersonagensMiticos[Math.floor(Math.random() * PersonagensMiticos.length)]
      let variavelD = PersonagensDivinos[Math.floor(Math.random() * PersonagensDivinos.length)]
      let variavelP = PersonagensEspeciais[Math.floor(Math.random() * PersonagensEspeciais.length)]
    
      const Chance = Math.random()

      if (GachaDB.rubycoins < 200) {
        await message.reply({ content: `Você não tem a quantia necessária para girar.`})
      } else {

      if (Chance < 0.00001) {
        let embedpegou = new Discord.EmbedBuilder()
        .setTitle(`<a:roll:1049040693022163085> | Premium Roll!`)
        .setDescription(`<a:ruby_anotando:1051958885256269908> Parabéns! Você pegou **${variavelP.n}**!\n\n<a:ruby_brilhos:1051958882752274452> Raridade: **${variavelP.r}**`)
        .setFooter({ text: `Sabia que está tendo um evento de natal e você ganha 2x RubyCoins em todos os comandos de economia?!`})
        .setImage(variavelP.u)
        .setColor(variavelP.h)

        let butao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
            .setCustomId("getpremium")
            .setEmoji(`<a:ruby:1055114412161249351>`)
            .setStyle(Discord.ButtonStyle.Success)
            .setLabel(`Resgatar seu ${variavelP.n}`)
        )
        message.reply({ embeds: [embedpegou], components: [butao]}).then((messageid) => {
            let filtro_p = (msg) => msg.customId === `getpremium` && msg.user.id === message.author.id && msg.message.id === messageid.id
            let coletor_p = message.channel.createMessageComponentCollector({ filter: filtro_p, max: 1 })

            coletor_p.on('collect', (c) => {
                UserDB.premium = true
                c.reply({ content: `:Rubyparty: | O usuario ${c.user} resgatou o ${variavelP.n} no roll, que sorte! (Adicionado ao seu Perfil)`})
            })
        })
      }

      else if (Chance < 0.001) {
        let embedpegou = new Discord.EmbedBuilder()
        .setTitle(`<a:roll:1049040693022163085> | Roll!`)
        .setDescription(`<a:ruby_anotando:1051958885256269908> Parabéns! Você pegou **${variavelL.n}**!\n\n<a:ruby_brilhos:1051958882752274452> Raridade: **${variavelL.r}**`)
        .setFooter({ text: `Sabia que está tendo um evento de natal e você ganha 2x RubyCoins em todos os comandos de economia?!`})
        .setImage(variavelL.u)
        .setColor(variavelL.h)

        let butao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
            .setCustomId("comprarlimitado")
            .setEmoji(`<:ruby_coins:1051943361860341853>`)
            .setStyle(Discord.ButtonStyle.Danger)
            .setLabel(`Comprar ${variavelL.n} - ${mu.ab(variavelL.v)} RubyCoins`)
        )
        message.reply({ embeds: [embedpegou], components: [butao]}).then((messageid) => {
            let filtro_p = (msg) => msg.customId === `comprarlimitado` && msg.user.id === message.author.id && msg.message.id === messageid.id
            let coletor_p = message.channel.createMessageComponentCollector({ filter: filtro_p, max: 1 })

            coletor_p.on('collect', (c) => {  
              if (GachaDB.rubycoins < variavelL.v) {
                c.reply({ content: `Você não possui dinheiro suficiente para fazer a compra do personagem **${variavelL.n}**, faltam ${variavelL.v - GachaDB.rubycoins} RubyCoins.`})
              } else {
                c.reply({ content: `:Rubyparty: | O usuario ${c.user} comprou o personagem ${variavelL.n} por ${variavelL.v} RubyCoins! (Adicionado na RubyDex)`})
                GachaDB.rubycoins -= variavelL.v
                GachaDB.save()
                UserDB.save()
                new Dex({
                userID: message.author.id,
                nomeDoPersonagem: variavelL.n,
                url: variavelL.u,//thanks
                raridade: variavelL.r,
                timestamp: Date.now()
                }).save()
                
              }
              })
        })
      }

      else if (Chance < 0.01) {
        let embedpegou = new Discord.EmbedBuilder()
        .setTitle(`<a:roll:1049040693022163085> | Roll!`)
        .setDescription(`<a:ruby_anotando:1051958885256269908> Parabéns! Você pegou **${variavelS.n}**!\n\n<a:ruby_brilhos:1051958882752274452> Raridade: **${variavelS.r}**`)
        .setFooter({ text: `Sabia que está tendo um evento de natal e você ganha 2x RubyCoins em todos os comandos de economia?!`})
        .setImage(variavelS.u)
        .setColor(variavelS.h)

        let butao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
            .setCustomId("comprarsecreto")
            .setEmoji(`<:ruby_coins:1051943361860341853>`)
            .setStyle(Discord.ButtonStyle.Danger)
            .setLabel(`Comprar ${variavelS.n} - ${mu.ab(variavelS.v)} RubyCoins`)
        )
        message.reply({ embeds: [embedpegou], components: [butao]}).then((messageid) => {
          let filtro_p = (msg) => msg.customId === `comprarsecreto` && msg.user.id === message.author.id && msg.message.id === messageid.id
            let coletor_p = message.channel.createMessageComponentCollector({ filter: filtro_p, max: 1 })

            coletor_p.on('collect', (c) => {
              
              if (GachaDB.rubycoins < variavelS.v) {
                c.reply({ content: `Você não possui dinheiro suficiente para fazer a compra do personagem **${variavelS.n}**, faltam ${variavelS.v - GachaDB.rubycoins} RubyCoins.`})
              } else {
              GachaDB.rubycoins -= variavelS.v
                GachaDB.save()
                UserDB.save()
                new Dex({
                userID: message.author.id,
                nomeDoPersonagem: variavelS.n,
                url: variavelS.u,//thanks
                raridade: variavelS.r,
                timestamp: Date.now()
                }).save()
                c.reply({ content: `:Rubyparty: | O usuario ${c.user} comprou o personagem ${variavelS.n} por ${variavelS.v} RubyCoins! (Adicionado na RubyDex)`})
              }
              })
        })
      }
      else if (Chance < 0.05) {
        let embedpegou = new Discord.EmbedBuilder()
        .setTitle(`<a:roll:1049040693022163085> | Roll!`)
        .setDescription(`<a:ruby_anotando:1051958885256269908> Parabéns! Você pegou **${variavelD.n}**!\n\n<a:ruby_brilhos:1051958882752274452> Raridade: **${variavelD.r}**`)
        .setFooter({ text: `Sabia que está tendo um evento de natal e você ganha 2x RubyCoins em todos os comandos de economia?!`})
        .setImage(variavelD.u)
        .setColor(variavelD.h)

        let butao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
            .setCustomId("comprardivino")
            .setEmoji(`<:ruby_coins:1051943361860341853>`)
            .setStyle(Discord.ButtonStyle.Danger)
            .setLabel(`Comprar ${variavelD.n} - ${mu.ab(variavelD.v)} RubyCoins`)
        )
        message.reply({ embeds: [embedpegou], components: [butao]}).then((messageid) => {
          let filtro_p = (msg) => msg.customId === `comprardivino` && msg.user.id === message.author.id && msg.message.id === messageid.id
            let coletor_p = message.channel.createMessageComponentCollector({ filter: filtro_p, max: 1 })

            coletor_p.on('collect', (c) => {
              if (GachaDB.rubycoins < variavelD.v) {
                c.reply({ content: `Você não possui dinheiro suficiente para fazer a compra do personagem **${variavelD.n}**, faltam ${variavelD.v - GachaDB.rubycoins} RubyCoins.`})
              } else {
              GachaDB.rubycoins -= variavelD.v
                GachaDB.save()
                UserDB.save()
                new Dex({
                userID: message.author.id,
                nomeDoPersonagem: variavelD.n,
                url: variavelD.u,//thanks
                raridade: variavelD.r,
                timestamp: Date.now()
                }).save()
                c.reply({ content: `:Rubyparty: | O usuario ${c.user} comprou o personagem ${variavelD.n} por ${variavelD.v} RubyCoins! (Adicionado na RubyDex)`})
              }
              })
        })
      }
      else if (Chance < 0.10) {
        let embedpegou = new Discord.EmbedBuilder()
        .setTitle(`<a:roll:1049040693022163085> | Roll!`)
        .setDescription(`<a:ruby_anotando:1051958885256269908> Parabéns! Você pegou **${variavelM.n}**!\n\n<a:ruby_brilhos:1051958882752274452> Raridade: **${variavelM.r}**`)
        .setFooter({ text: `Sabia que está tendo um evento de natal e você ganha 2x RubyCoins em todos os comandos de economia?!`})
        .setImage(variavelM.u)
        .setColor(variavelM.h)

        let butao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
            .setCustomId("comprarmitico")
            .setEmoji(`<:ruby_coins:1051943361860341853>`)
            .setStyle(Discord.ButtonStyle.Danger)
            .setLabel(`Comprar ${variavelM.n} - ${mu.ab(variavelM.v)} RubyCoins`)
        )
        message.reply({ embeds: [embedpegou], components: [butao]}).then((messageid) => {
          let filtro_p = (msg) => msg.customId === `comprarmitico` && msg.user.id === message.author.id && msg.message.id === messageid.id
            let coletor_p = message.channel.createMessageComponentCollector({ filter: filtro_p, max: 1 })

            coletor_p.on('collect', (c) => {
              if (GachaDB.rubycoins < variavelM.v) {
                c.reply({ content: `Você não possui dinheiro suficiente para fazer a compra do personagem **${variavelM.n}**, faltam ${variavelM.v - GachaDB.rubycoins} RubyCoins.`})
              } else {
              GachaDB.rubycoins -= variavelM.v
                GachaDB.save()
                UserDB.save()
                new Dex({
                userID: message.author.id,
                nomeDoPersonagem: variavelM.n,
                url: variavelM.u,//thanks
                raridade: variavelM.r,
                timestamp: Date.now()
                }).save()
                c.reply({ content: `:Rubyparty: | O usuario ${c.user} comprou o personagem ${variavelM.n} por ${variavelM.v} RubyCoins! (Adicionado na RubyDex)`})
              }
              })
        })
      }
      else if (Chance < 0.20) {
        let embedpegou = new Discord.EmbedBuilder()
        .setTitle(`<a:roll:1049040693022163085> | Roll!`)
        .setDescription(`<a:ruby_anotando:1051958885256269908> Parabéns! Você pegou **${variavelLE.n}**!\n\n<a:ruby_brilhos:1051958882752274452> Raridade: **${variavelLE.r}**`)
        .setFooter({ text: `Sabia que está tendo um evento de natal e você ganha 2x RubyCoins em todos os comandos de economia?!`})
        .setImage(variavelLE.u)
        .setColor(variavelLE.h)

        let butao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
            .setCustomId("comprarlendario")
            .setEmoji(`<:ruby_coins:1051943361860341853>`)
            .setStyle(Discord.ButtonStyle.Danger)
            .setLabel(`Comprar ${variavelLE.n} - ${mu.ab(variavelLE.v)} RubyCoins`)
        )
        message.reply({ embeds: [embedpegou], components: [butao]}).then((messageid) => {
          let filtro_p = (msg) => msg.customId === `comprarlendario` && msg.user.id === message.author.id && msg.message.id === messageid.id
            let coletor_p = message.channel.createMessageComponentCollector({ filter: filtro_p, max: 1 })

            coletor_p.on('collect', (c) => {
              if (GachaDB.rubycoins < variavelLE.v) {
                c.reply({ content: `Você não possui dinheiro suficiente para fazer a compra do personagem **${variavelLE.n}**, faltam ${variavelLE.v - GachaDB.rubycoins} RubyCoins.`})
              } else {
              GachaDB.rubycoins -= variavelLE.v
                GachaDB.save()
                UserDB.save()
                new Dex({
                userID: message.author.id,
                nomeDoPersonagem: variavelLE.n,
                url: variavelLE.u,//thanks
                raridade: variavelLE.r,
                timestamp: Date.now()
                }).save()
                c.reply({ content: `:Rubyparty: | O usuario ${c.user} comprou o personagem ${variavelLE.n} por ${variavelLE.v} RubyCoins! (Adicionado na RubyDex)`})
              }
              })
        })
      }

      else if (Chance < 0.5) {
        let embedpegou = new Discord.EmbedBuilder()
        .setTitle(`<a:roll:1049040693022163085> | Roll!`)
        .setDescription(`<a:ruby_anotando:1051958885256269908> Parabéns! Você pegou **${variavelE.n}**!\n\n<a:ruby_brilhos:1051958882752274452> Raridade: **${variavelE.r}**`)
        .setFooter({ text: `Sabia que está tendo um evento de natal e você ganha 2x RubyCoins em todos os comandos de economia?!`})
        .setImage(variavelE.u)
        .setColor(variavelE.h)

        let butao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
            .setCustomId("comprarepico")
            .setEmoji(`<:ruby_coins:1051943361860341853>`)
            .setStyle(Discord.ButtonStyle.Danger)
            .setLabel(`Comprar ${variavelE.n} - ${mu.ab(variavelE.v)} RubyCoins`)
        )
        
        message.reply({ embeds: [embedpegou], components: [butao]}).then((messageid) => {
          let filtro_p = (msg) => msg.customId === `comprarepico` && msg.user.id === message.author.id && msg.message.id === messageid.id
            let coletor_p = message.channel.createMessageComponentCollector({ filter: filtro_p, max: 1 })

            coletor_p.on('collect', (c) => {
              if (GachaDB.rubycoins < variavelE.v) {
                c.reply({ content: `Você não possui dinheiro suficiente para fazer a compra do personagem **${variavelE.n}**, faltam ${variavelE.v - GachaDB.rubycoins} RubyCoins.`})
              } else {
              GachaDB.rubycoins -= variavelE.v
                GachaDB.save()
                UserDB.save()
                new Dex({
                userID: message.author.id,
                nomeDoPersonagem: variavelE.n,
                url: variavelE.u,//thanks
                raridade: variavelE.r,
                timestamp: Date.now()
                }).save()
                c.reply({ content: `:Rubyparty: | O usuario ${c.user} comprou o personagem ${variavelE.n} por ${variavelE.v} RubyCoins! (Adicionado na RubyDex)`})
              }
              })
        })
      }

      else if (Chance < 0.8) {
        let embedpegou = new Discord.EmbedBuilder()
        .setTitle(`<a:roll:1049040693022163085> | Roll!`)
        .setDescription(`<a:ruby_anotando:1051958885256269908> Parabéns! Você pegou **${variavelI.n}**!\n\n<a:ruby_brilhos:1051958882752274452> Raridade: **${variavelI.r}**`)
        .setFooter({ text: `Sabia que está tendo um evento de natal e você ganha 2x RubyCoins em todos os comandos de economia?!`})
        .setImage(variavelI.u)
        .setColor(variavelI.h)

        let butao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
            .setCustomId("comprarincomum")
            .setEmoji(`<:ruby_coins:1051943361860341853>`)
            .setStyle(Discord.ButtonStyle.Danger)
            .setLabel(`Comprar ${variavelI.n} - ${mu.ab(variavelI.v)} RubyCoins`)
        )
        message.reply({ embeds: [embedpegou], components: [butao]}).then((messageid) => {
            let filtro_p = (msg) => msg.customId === `comprarincomum` && msg.user.id === message.author.id && msg.message.id === messageid.id
            let coletor_p = message.channel.createMessageComponentCollector({ filter: filtro_p, max: 1 })

            coletor_p.on('collect', (c) => {
              if (GachaDB.rubycoins < variavelI.v) {
                c.reply({ content: `Você não possui dinheiro suficiente para fazer a compra do personagem **${variavelI.n}**, faltam ${variavelI.v - GachaDB.rubycoins} RubyCoins.`})
              } else {
              GachaDB.rubycoins -= variavelI.v
                GachaDB.save()
                UserDB.save()
                new Dex({
                userID: message.author.id,
                nomeDoPersonagem: variavelI.n,
                url: variavelI.u,//thanks
                raridade: variavelI.r,
                timestamp: Date.now()
                }).save()
                c.reply({ content: `:Rubyparty: | O usuario ${c.user} comprou o personagem ${variavelI.n} por ${variavelI.v} RubyCoins! (Adicionado na RubyDex)`})
              }
              })
        })
      }

      else if (Chance < 2.0) {
        let embedpegou = new Discord.EmbedBuilder()
        .setTitle(`<a:roll:1049040693022163085> | Roll!`)
        .setDescription(`<a:ruby_anotando:1051958885256269908> Parabéns! Você pegou **${variavelC.n}**!\n\n<a:ruby_brilhos:1051958882752274452> Raridade: **${variavelC.r}**`)
        .setFooter({ text: `Sabia que está tendo um evento de natal e você ganha 2x RubyCoins em todos os comandos de economia?!`})
        .setImage(variavelC.u)
        .setColor(variavelC.h)

        let butao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
            .setCustomId("comprarcomum")
            .setEmoji(`<:ruby_coins:1051943361860341853>`)
            .setStyle(Discord.ButtonStyle.Danger)
            .setLabel(`Comprar ${variavelC.n} - ${mu.ab(variavelC.v)} RubyCoins`)
        )
        message.reply({ embeds: [embedpegou], components: [butao]}).then((messageid) => {
          let filtro_p = (msg) => msg.customId === `comprarcomum` && msg.user.id === message.author.id && msg.message.id === messageid.id
            let coletor_p = message.channel.createMessageComponentCollector({ filter: filtro_p, max: 1 })

            coletor_p.on('collect', (c) => {
              if (GachaDB.rubycoins < variavelC.v) {
                c.reply({ content: `Você não possui dinheiro suficiente para fazer a compra do personagem **${variavelC.n}**, faltam ${variavelC.v - GachaDB.rubycoins} RubyCoins.`})
              } else {
              GachaDB.rubycoins -= variavelC.v
                GachaDB.save()
                UserDB.save()
                new Dex({
                userID: message.author.id,
                nomeDoPersonagem: variavelC.n,
                url: variavelC.u,//thanks
                raridade: variavelC.r,
                timestamp: Date.now()
                }).save()
                c.reply({ content: `:Rubyparty: | O usuario ${c.user} comprou o personagem ${variavelC.n} por ${variavelC.v} RubyCoins! (Adicionado na RubyDex)`})
              }
              })
        })
      }

      

  }
}
}
