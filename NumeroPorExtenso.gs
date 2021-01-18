// Constantes de Strings
const str1_19 = ["Um", "Dois", "Três", "Quatro", "Cinco", "Seis", 
              "Sete", "Oito", "Nove", "Dez", "Onze", "Doze",
              "Treze", "Quatorze", "Quinze", "Dezesseis",
              "Dezessete", "Dezoito", "Dezenove"];

const str20_90 = ["Vinte", "Trinta", "Quarenta", "Cinquenta",
              "Sessenta", "Setenta", "Oitenta", "Noventa"];

const str100_900 = ["Cento", "Duzentos", "Trezentos", "Quatrocentos", "Quinhentos",
              "Seiscentos", "Setecentos", "Oitocentos", "Novecentos"];

function escreverNumero(num) {
  // Verifica se o número é igual a zero.
  if (num == 0) return "Zero Reais";
  var cent = (num - Math.trunc(num)) * 100;
  var int = Math.trunc(num);
  // Caso existam centavos
  if (cent > 0) {
    if (int == 1) return "Hum Real e " + strDecimal(cent) + "Centavos";
    else if (int == 0) return strDecimal(cent) + "Centavos";
    else return strInteiro(int) + "Reais e " + strDecimal(cent) + "Centavos";
  }
  // Caso não existem centavos
  else {
    if (int == 1) return "Hum Real";
    else return strInteiro(int) + "Reais";
  }
}

// Retorna a fração decimal do número por extenso
function strDecimal(num) {
  if (num == 0) return "";
  else if (num > 0 && num < 20) return str1_19[Math.trunc(num - 1)] + " ";
  else if (num > 20 && num < 100) {
    if (num % 10 == 0) return str20_90[Math.trunc(num / 10 - 2)] + " "; 
    else return str20_90[Math.trunc(num / 10 - 2)] + " e " + strDecimal(num % 10);
  }
  else return "";
}

// Retorna a parte inteira do número por extenso
function strInteiro(num) {
  var numInt = Math.trunc(num);
  if (numInt == 0) return "";
  else if (numInt > 0 && numInt < 20) return str1_19[numInt - 1] + " ";
  else if (numInt > 20 && numInt < 100) {
    if (numInt % 10 == 0) return str20_90[Math.trunc(numInt / 10 - 2)] + " "; 
    else return str20_90[Math.trunc(numInt / 10 - 2)] + " e " + strInteiro(numInt % 10);
  }
  else if (numInt == 100) return "Cem ";
  else if (numInt > 100 && numInt < 1000) {
    if (numInt % 100 == 0) return str100_900[Math.trunc(numInt / 100 - 1)] + " ";
    else return str100_900[Math.trunc(numInt / 100 - 1)] + " e " + strInteiro(numInt % 100);
  }
  else if (numInt >= 1000) {
    if (numInt % 1000 == 0) return "Mil";
    else if (numInt < 2000 && numInt % 1000 <= 100) return "Hum Mil e " + strInteiro(numInt % 1000);
    else if ((numInt / 1000) < 2) return "Hum Mil, " + strInteiro(numInt % 1000);
    else if (numInt % 1000 <= 100) return str1_19[Math.trunc(numInt / 1000 - 1)] + " Mil e " + strInteiro(numInt % 1000);
    else return str1_19[Math.trunc(numInt / 1000) - 1] + " Mil, " + strInteiro(numInt % 1000);
  }
}
