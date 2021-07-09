/**
 * Crie um algoritmo que receba 3 notas de um aluno, calcule sua media e mostre as seguintes mensagens de acordo
 *  com cada situação:
 * - Se a media for igual ou maior que 7 - Aprovado
 * - Se a media for igual ou maior a 5 e menor que 7 - Recuperação
 * - Se a media for menor que 5 - reprovado
 */

 function calculaMedia(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3) / 3

    if(media > 7){
      return `Aprovado ! media: " ${media}`
    }else if (media >= 5 && media < 7) {
      return `Recuperação ! media: ${media}`
    }else{
      return `Reprovado ! media: ${media}`
    }
 }

 console.log(calculaMedia(5, 4, 3.5))