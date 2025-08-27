let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let subject = document.querySelector('#subject')
let message = document.querySelector('#message')
let nomeOk = false
let emailOk = false
let subjectOk = false
let messageOk = false
let mapa = document.querySelector('#mapa')


function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome invalido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome valido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email invalido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email valido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaSubject() {
    let txtSubject = document.querySelector('#txtSubject')

    if (subject.value.length >= 50) {
        txtSubject.innerHTML = "Texto muito grande! Digite no máximo 50 caracteres"
        txtSubject.style.color = 'red'
        txtSubject.style.display = 'block'

    } else {
        txtSubject.style.display = 'none'
        subjectOk = true
    }
}

function validaMessage() {
    let txtMessage = document.querySelector('#txtMessage')

    if (message.value.length >= 400) {
        txtMessage.innerHTML = "Texto muito grande! Digite no máximo 400 caracteres"
        txtMessage.style.color = 'red'
        txtMessage.style.display = 'block'

    } else {
        txtMessage.style.display = 'none'
        messageOk = true
    }
}

function enviar() {

    if (nomeOk == true && emailOk == true && subjectOk == true && messageOk == true) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente.')
    }
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.heigth = '250px'
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.heigth = '800px'
}