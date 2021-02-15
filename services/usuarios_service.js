function listar() {
    return new Promise((resolve) => {
        resolve({
            status: 200,
            response: "Hola mundo desde el service con promises!"
        })
    });
}

module.exports = {
    listar
}
