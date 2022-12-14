function logar(){



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

function toCad(){
    window.location.href = "../telaCad/cadastro.html"
}