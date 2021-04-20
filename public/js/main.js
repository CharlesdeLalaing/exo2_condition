//exo 1:

// let choixUn = prompt("choisissez un premier chiffre?");
// let choixDeux = prompt("choisissez un deuxieme chiffre svp?");

//option 1 --> alert(`Le nombre ${choixUn} et le nombre ${choixDeux} sont-ils égaux ? ${choixUn == choixDeux}`);

//option 2 --> if (choixUn == choixDeux) {
//    alert(`${choixUn} et ${choixDeux} sont-ils égaux? : ${choixUn == choixDeux}`)
//} else {
//    alert(`${choixUn} et ${choixDeux} sont-ils égaux? : ${choixUn == choixDeux}`)
//}

//exo 2:

// let choixUn = prompt("choisissez un premier chiffre?");
// let choixDeux = prompt("choisissez un deuxieme chiffre svp?");

// if (choixUn < choixDeux) {
//     alert(`Le nombre ${choixUn} et-il plus petit que le nombre ${choixDeux} ? : ${choixUn < choixDeux}`);
// } else {
//     alert(`Le nombre ${choixUn} et-il plus petit que le nombre ${choixDeux} ? : ${choixUn < choixDeux}`)
// };

//exo 3:

// let choixUn = prompt("choisissez un premier chiffre?");
// let choixDeux = prompt("choisissez un deuxieme chiffre svp?");
// let choixTrois = prompt("choisissez un troisième chiffre svp?");

// if ((choixUn + choixDeux) > choixTrois) {
//     alert(`La somme du nombre ${choixUn} + le nombre ${choixDeux} est-elle plus grande que le nombre ${choixTrois} ? : ${(choixUn + choixDeux) > choixTrois}`)
// } else {
//     alert(`La somme du nombre ${choixUn} + le nombre ${choixDeux} est-elle plus grande que le nombre ${choixTrois} ? : ${(choixUn + choixDeux) > choixTrois}`)
// };

//exo 4:

// let phrase = prompt("tu peux ecrire ce que tu veux, dechaines-toi !");
// let taille = prompt("Ok niquel, maintenant devine combien de charactere tu as utilisé pour ta réponse précedente?");

// if (phrase.length == taille) {
//     alert("wow trop fort tu as réussis du premier coup, incroyable")
// } else {
//     alert(`ho non dommage, tu étais à ${Math.abs(phrase.length - taille)} unités de la bonne réponse !`)
// };

//exo 5:

// let prénom = prompt("Bonjour, puis-je avoir votre prénom svp?");
// if (prénom == "") {
//     let prénomDeux = prompt("Attention vous devez remplir le champs ci-dessous, Quel est votre prénom ?")
// } else {
//     alert(`ok cool. bonjour ${prénom}`);
// };
// alert(`ok cool. bonjour ${prénomDeux}`)

//exo 6:

// let question = confirm("veux-tu t'abonner?");
// if (question == true) {
//     question = prompt("Quelle formule voulez vous prendre: Luxe ou Normal");
//     if (question == "luxe") {
//         alert(`félicitation vous avez choisis la formule luxe !`);
//     } else {
//         alert(`merci pour votre abbonnement.`);
//     }
// } else {
//     question = prompt(`etes vous certain?`)
//     if (question == "oui") {
//         alert("c'est dommage et ciao");
//     } else {
//         question = prompt("quelle formule; lux ou nprmale");
//         if (question == "luxe") {
//             alert(`felicitation vous avez choisit la formule luxe`)
//         } else {
//             alert("merci pour votre abonnement");
//         }
//     }
// }

//exo 7:

// let questionUn = prompt("De quelle couleur était le cheval blanc de Napoléon?");
// let questionDeux = prompt("Terminer cette phrase:  Une souris verte, qui courait dans ....");

// let réponseUn = "blanc";
// let réponseDeux = "l'herbe";

// if (questionUn == réponseUn && questionDeux == réponseDeux) {
//     alert("Bravo vous êtes un winner!")
// } else if (questionUn == réponseUn && questionDeux !== réponseDeux) {
//     alert(`Pas loin, tu t'es trompé pour la deuxieme:  Une souris verte, qui courait dans .... -${réponseDeux}.`)
// } else if (questionUn !== réponseUn && questionDeux == réponseDeux) {
//     alert(`Pas loin, tu t'es trompé pour la première:  La couleur du cheval blanc de napoleon est -${réponseUn}.`)
// }
// else {
//     alert("vous avez échouer")
// };

//exo 8:

// let age = prompt("Bonjour, quel est votre âge?");

// if (age < 0) {
//     alert("vous n’êtes même pas nés, n’essayez pas de tricher")
// } else if (age > 18) {
//     alert("vous êtes majeur, vous pouvez réserver")
// } else if (age < 18) {
//     alert("vous êtes mineur, l’accès est réservé aux grands")
// } else if (age > 100) {
//     alert("vous êtes encore vivant ? Évitez de voir ce film pour le rester.")
// } else if (age == 18) {
//     alert("pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant.")
// } else {
//     alert("Fuck you")
// };

//exo 9:
// let riche = prompt("est-ce que vous êtes riche ? oui ou non");
// let vacance = prompt("voulez-vous partir en vacance ? oui ou non");
// let chat = prompt("est-ce que vous avez un chat ? oui ou non");

// if (riche == "oui" && chat !== "oui" && vacance == "oui") {
//     alert("Tout est parfait, partez en vacance !")
// } else if  (riche !== "oui" || chat == "oui") {
//     alert("Même si vous le voulez, vous ne pouvez pas partir.")
// } else if (riche == "oui" && chat !== "oui") {
//     alert("Vous pourriez partir en vacance si vous le voulez")
// } else if (riche != "oui") {
//     alert("pas de problème, ne partez pas en vacance")
// };