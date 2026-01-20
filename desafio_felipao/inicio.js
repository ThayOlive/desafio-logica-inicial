


let heroes = [
    {nome: "Mago", XP: 1000, nivel: ""},
    {nome: "Guerreiro", XP: 2500, nivel: ""},
    {nome: "Arqueiro", XP: 10000, nivel: ""}
];


for (let heroi of heroes){
    if (heroi.XP <= 1000){
            heroi.nivel = "Ferro";
        } else if (heroi.XP >= 1001 && heroi.XP < 2000){
            heroi.nivel = "Bronze";
        }else if (heroi.XP >= 2001 && heroi.XP < 5000){
            heroi.nivel = "Prata";
        } else if (heroi.XP >= 6001 && heroi.XP < 7000){
            heroi.nivel = "Ouro";
        }else if (heroi.XP >= 7001 && heroi.XP < 8000){
            heroi.nivel = "Platina";
        } else if (heroi.XP >=8001 && heroi.XP < 9000){
             heroi.nivel ="Ascendente";
        } else if (heroi.XP >= 9001 && heroi.XP < 10000){
            heroi.nivel= "Imortal";
        }else if (heroi.XP >= 10001){
              heroi.nivel = "Radiante"
        }
        console.log(`O heroi ${heroi.nome} esta no nível: ${heroi.nivel}`)
}

    

  

