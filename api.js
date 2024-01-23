const api = async (options, callback) => {
    const { endpoint, body, method } = options;
    try {
        const response = await fetch(`https://localhost:7109/${endpoint}`, {
            method: method || "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        
        const data = await response.json(); // Extrai os dados JSON da resposta

        callback(data); // Chama o callback com os dados da API
    } catch (error) {
        console.error(error);
        callback(error, null); // Chama o callback com o erro, se houver
    }
};
