
let heroes = [
    {nome: "Mago", XP: 1000, nivel: "", rank: "", vitorias:120, derrotas:60},
    {nome: "Guerreiro", XP: 2500, nivel: "", rank:"", vitorias:13, derrotas:14},
    {nome: "Arqueiro", XP: 10000, nivel: "", rank: "", vitorias:12, derrotas:3}
];


function calcularRank (qtdVitorias, qtdDerrotas) {
    calculo = qtdVitorias - qtdDerrotas
    rank = ""
    if (calculo < 10) {
        rank = "Ferro"}
        else if (calculo < 10){
            rank = "Bronze"
        } 
            
        else if (calculo > 20 && calculo < 51){
             rank = "Prata"
        }
           
        else if (calculo > 50 && calculo < 81){
            rank = "Ouro"

        }
        else if (calculo > 80 && calculo < 91){
            rank = "Diamante"
        }
            
        else if (calculo > 90 && calculo < 101){
            rank = "Lendário"
        }
        else if (calculo > 101) {
            rank = "Imortal"
        }  

    return rank
}

for (let heroi of heroes){
    const qtdVitorias = heroi.vitorias
    const qtdDerrotas = heroi.derrotas
    const rank = calcularRank(qtdVitorias, qtdDerrotas)
    console.log(`O Herói ${heroi.nome} tem saldo de ${qtdVitorias - qtdDerrotas} está no nível de ${rank}`)
}