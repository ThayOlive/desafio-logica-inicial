class Heroi {
    constructor(nome, idade, tipoHeroi){
        this.nome = nome
        this.idade = idade
        this.tipoHeroi = tipoHeroi
    }
    atacar() {
        let ataque;
        if (this.tipoHeroi == "guerreiro"){
            ataque = "espada"
        } else if (this.tipoHeroi == "mago") {
            ataque = "magia"
        }else if (this.tipoHeroi == "monge") {
            ataque = "artes marciais"
        } else if(this.tipoHeroi == "ninja") {
            ataque = "shuriken"
        }
        console.log(`O ${this.tipoHeroi} atacou usando ${ataque}`)
    }
}

let patoMaster = new Heroi("pato","27","mago")
patoMaster.atacar()