//  Interação do register e login 

const wrapperscroll = document.querySelector(".wrapperScroll");
const linkregistro = document.querySelector("#registrolink");

linkregistro.addEventListener("click", function() {
    wrapperscroll.style.transform = "translateX(-316px)"
})

const linklogin = document.querySelector("#loginlink");
linklogin.addEventListener("click", function() {
    wrapperscroll.style.transform = "translateX(0)"
})


// Getting login / register information

// Login 

async function login(event){
    event.preventDefault()
    const options = {
        body: {
            email: document.getElementById("inputemail").value,
            senha: document.getElementById("inputsenha").value,
        },
        method: 'POST',
        endpoint: 'Login'
    }
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
}


// Evento click Login
document.getElementById("botaologin").addEventListener("click", login)
