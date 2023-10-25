process.stdin.setEncoding('utf8');

// DECLARAÇÃO DE VARIAVEIS
let player_EXP = 0;
let player_NAME = "";
const  readline = require('readline-sync');
const LEVELS = ["Ferro", "Bronze", "Prata", "Ouro", "Platina diamante", "Ascendente", "Imortal", "Radiante"]
const LEVELS_XP = ["1000", "1001-2000", "2001-5000", "6001-7000", "7001-8000", "8001-9000", "9001-10000", "10001"]

// PEGAR DO USUARIO O NOME, E XP DO HERÓI
player_NAME = readline.question("Qual o nome do seu Heroi? ~: ");
while ( player_EXP == 0 || player_EXP == "info"){
    player_EXP = readline.question("Qual a quantidade de XP que seu Heroi vai possuir?"+
                            "(Escreva 'info' para ver as classes) ~: ");

    // SE: ESCOLHER INFORMAÇÕES
    if ( player_EXP != "info"){
        console.log(`\x1b[0mO Heroi \x1b[32m${player_NAME}\x1b[0m tem \x1b[33m${Intl.NumberFormat('en-US').format(player_EXP)}`+
                    `\x1b[0mxp esta no nível de \x1b[34m${get_level(player_EXP)}\x1b[0m`);
        break;
    // SE NÃO: IMPRIMIR INFORMAÇÕES FINAIS.
    }else for (let i = 0; i < LEVELS.length; i++){
        if ( i == 0 || i == 7) console.log(`[\x1b[33m${LEVELS_XP[i]}\x1b[0m]\t\t->\t\x1b[34m${LEVELS[i]}\x1b[0m`)
        else console.log(`[\x1b[33m${LEVELS_XP[i]}\x1b[0m]\t->\t\x1b[34m${LEVELS[i]}\x1b[0m`)
    }
}

// PEGA O NIVEL EQUIVALENTE AO TANTO DE XP
function get_level(exp){
    if      (exp == 1000)                   return LEVELS[0];   // Ferro
    else if (exp >= 1001 && exp <= 2000)    return LEVELS[1];   // Bronze
    else if (exp >= 2001 && exp <= 5000)    return LEVELS[2];   // Prata
    else if (exp >= 6001 && exp <= 7000)    return LEVELS[3];   // Ouro
    else if (exp >= 7001 && exp <= 8000)    return LEVELS[4];   // Platina..
    else if (exp >= 8001 && exp <= 9000)    return LEVELS[5];   // Ascendente
    else if (exp >= 9001 && exp <= 10000)   return LEVELS[6];   // Imortal
    else if (exp >= 10001)                  return LEVELS[7];   // Radiante
    else return "\x1b[31mSem classificação ainda, ganhe mais xp.\x1b[0m";
}
