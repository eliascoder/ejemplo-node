function proceso_interno() {
    return new Promise(resolve => setTimeout(resolve, 2000));
}

async function listar() {
    await proceso_interno();
    return {
        status: 200,
        response: "Hola mundo desde el service con promises!"
    }
}

module.exports = {
    listar
}
