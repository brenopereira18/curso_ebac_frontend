function veiculo() {
    let _ano = 0
    let _placa = 0
    let _modelo = 0

    this.setAno = function(ano) {
        _ano = ano
    }

    this.getAno = function() {
        return _ano
    }

    this.setPlaca = function(placa) {
        _placa = placa
    }

    this.getPlaca = function() {
        return _placa
    }

    this.setModelo = function(modelo) {
        _modelo = modelo
    }

    this.getModelo = function() {
        return _modelo
    }
}

function Carro() {    
    let _numeroDePortas = 0

    this.setNumeroDePortas = function(numeroDePortas) {
        _numeroDePortas = numeroDePortas
    }

    this.getNumeroDePortas = function() {
        return _numeroDePortas
    }

    veiculo.call(this, 'ano', 'placa', 'modelo')
}

function Caminhao() {
    let _numeroDeRodas = 0

    this.setNumeroDeRodas = function(numeroDeRodas) {
        _numeroDeRodas = numeroDeRodas
    }

    this.getNumeroDeRodas = function() {
        return _numeroDeRodas
    }

    veiculo.call(this, 'ano', 'placa', 'modelo')
}

const carroDoJoao = new Carro()
carroDoJoao.setNumeroDePortas(4)
carroDoJoao.setAno(2016)
carroDoJoao.setPlaca('ADT-4C22')
carroDoJoao.setModelo('Chevrolet')

const carroDaAna = new Carro()
carroDaAna.setNumeroDePortas(2)
carroDaAna.setAno(2006)
carroDaAna.setPlaca('ACL-6S43')
carroDaAna.setModelo('Fiat')

const caminhaoDoJose = new Caminhao()
caminhaoDoJose.setNumeroDeRodas(6)
caminhaoDoJose.setAno(2014)
caminhaoDoJose.setPlaca('EVR-5B13')
caminhaoDoJose.setModelo('VUC')
