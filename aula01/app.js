// ex01

// const btnClicar =  document.getElementById("btnClicar")
// const paragrafo = document.getElementById("paragrafo")

// btnClicar.addEventListener("click", function () {
//     paragrafo.textContent = "matheus bidu"

// })


// ex02

const form = document.getElementById('form')
const inputNome = document.getElementById('nome')
const inputEmail = document.getElementById('email')
const inputAssunto = document.getElementById('assunto')
const inputMensagem = document.getElementById('mensagem')
const btnEnviar = document.getElementById('btnEnviar')
const mensagemErro= document.getElementById('mensagemErro')
const cadastro = document.getElementById('cadastro')

btnEnviar.addEventListener("click", function (event){
    
    event.preventDefault()
    let nome = inputNome.Value
    let email = inputEmail.Value
    let assunto = inputAssunto.Value
    let mensagem = inputMensagem.Value

    if (nome === "" || email === "" ||assunto === ""  || mensagem === "") {
        alert("insira algo valido")
        mensagemErro.textContent = "preencha todos os campos"
        return
    }
    alert(`Nome: ${nome}\n E-mail: ${email}\n assunto: ${assunto}\n Mensagem : ${mensagem}\n`)

    const cardusuario = document.createElement("div")
    cardusuario.innerHTML = `
    <h3> Nome: ${nome} </h3>
    <h3> E=mail: ${email} </h3>
    <h3> Assunto: ${assunto} </h3>
    <h3> Mensagem: ${mensagem} </h3>
    `

    cadastro.append(cardusuario)
    form.reset()
} ) 


 
///////////////////////////////////////////////////////////////