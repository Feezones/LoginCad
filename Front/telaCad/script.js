
function main(){
    fetch('https://localhost:7041/api/Usuarios',
    {
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => console.log('values', data))
    .catch(error => console.log('error', error));
}

main()


function sendForm(){
    formulario=[
     nome=document.getElementById("nome").value,
     sobrenome=document.getElementById("sobrenome").value,
     CPF=document.getElementById("CPF").value,
     endereco=document.getElementById("endereco").value,
     email=document.getElementById("email").value,
     senha=document.getElementById("senha").value,
     confSenha=document.getElementById("confSenha").value
    ]

    const formJSON={
        "nome":formulario[0],
        "sobrenome":formulario[1],
        "cpf":formulario[2],
        "endereco":formulario[3],
        "email":formulario[4],
        "senha":formulario[5],
        "confSenha":formulario[6],
    }

    console.log(formJSON)

fetch('https://localhost:7041/api/Usuarios',{
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type':'application/json'
    }, 
    body: JSON.stringify(formJSON)
})
.then(response => response.json())
.then(data => console.log('Sucesso', data))
.catch(error => console.log('Error', error));
}









function toLogin(){
    window.location.href = "../telaLogin/login.html"
}