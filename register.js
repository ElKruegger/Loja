
//  Lógica de Registro
// registro
 function register(event){ 
    event.preventDefault()
    const options = {
        body: {
            nome: document.getElementById("registerUsername").value,
            email: document.getElementById("registeremail").value,
            senha: document.getElementById("registerPassword").value
        },
        method: 'POST',
        endpoint: 'register'
        
    };

    try {
        api(options, function(sucess){
            console.log(sucess);

            if (sucess.senha) {
                window.location.href = "produtos.html";
            }    
        });
    } catch (error) {
        console.error("Erro durante o registro:", error);
        // Lidar com o erro, se necessário
    }

    
    
    // const redirectRegister =  api(options)
    // console.log(redirectRegister)
    // if (redirectRegister.email){
    //     window.location = "produtos.html";
    // }

    
    // const requestregister = api(options)
    // if (redirectRegister.email){
    //     window.location = 'produtos.html'
    // }
    
}

// Creating click-event BtnRegister:
document.getElementById("btnRegister").addEventListener("click", register)
