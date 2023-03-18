function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()

    msg.innerHTML = `Agora são ${hora}:${minuto}:h`
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = 'fototarde.png'
    } else {
        document.body.style.background = '#b9846f'
        // Boa noite!
        img.src = "fotonoite.png"
        document.body.style.background = '#515154'
    }
}
