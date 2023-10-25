
const nomeUtente = prompt( "Inserisci il tuo nome");
const eta = prompt("Inserisci la tua età");
const colore = prompt("Inserisci il tuo colore preferito");
let suffix = '#109'
const password = nomeUtente + eta + colore + suffix;

document.getElementById("titolo").innerHTML = "Benvenuto/a, " + nomeUtente;
document.getElementById("password").innerHTML = `La tua password è ${password}`;