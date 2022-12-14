
function main(){
    fetch('https://localhost:7041/api/Usuarios',
    {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => console.log('values', data))
    .catch(error => console.log('error', error));
}




function sendForm(){
     nome=document.getElementById("nome").value,
     sobrenome=document.getElementById("sobrenome").value,
     CPF=document.getElementById("CPF").value,
     endereco=document.getElementById("endereco").value,
     telefone=document.getElementById("telefone").value.
     email=document.getElementById("email").value,
     senha=document.getElementById("senha").value,
     confSenha=document.getElementById("confSenha").value


      const formJSON2={
        "nome":String(nome),
        "sobrenome":String(sobrenome),
        "cpf":String(CPF),
        "endereco":String(endereco),
        "telefone":String(telefone),
        "email":String(email),
        "senha":String(senha),
        "confSenha":String(confSenha),
    }

     const formJSON={
        "nome":'felipe2',
        "sobrenome":'brag2',
        "cpf":'14514514512',
        "endereco":'rua de casa2',
        "telefone":'145145124',
        "email":'email2@gmail.com',
        "senha":'senhaforte123',
        "confSenha":'senhaforte123',
    }

    console.log(formJSON,formJSON2)



fetch('https://localhost:7041/api/Usuarios',{
    method: 'POST',
    headers: {
        'Content-Type':'application/json;'
    }, 
    body: JSON.stringify(formJSON2)
})
.then(response => response.json())
.then(data => console.log('Sucesso', data))
.catch(error => console.log('Error', error));

}





function toLogin(){
    window.location.href = "../telaLogin/login.html"
}