function logarAPI(){
    
    fetch('https://localhost:7041/api/Usuarios',{
    method: 'GET',
})

.then(response => response.json())
.then(data => console.log('Sucesso',data,validaLogin(data)))
.catch(error => console.log('Error', error));
}



function validaLogin(logins){
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value

    if(email != null && email != ''){
        //console.log(email)
        //console.log(senha)
        i=0
        while(i<logins.length){
            if(email == logins[i].email && senha == logins[i].senha){ 
                //console.log(logins[i].email,logins[i].senha)
                //console.log('email correto')
                //console.log('senha correta')
                //console.log('vc esta logado')
                result=(`bem vindo ${logins[i].nome}`)


                i=logins.length   
            }else{
                i++
                result='dados incorretos'
            }
        }
        alert(result)
    }else{
        alert('preencha os dados com email e senha')
    }
}



function toCad(){
    window.location.href = "../telaCad/cadastro.html"
}