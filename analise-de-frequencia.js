
// análise de frequência

var compara = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
var frase = 'g5Bt5 t54yvtz3v4A5 wrG t53 7Bv r9 6v995r9 9v 9z4Ar3 58xB2y59r9. dBzA5 t54yvtz3v4A5, 7Bv 9v 9z4Ar3 yB3z2uv9. Vy r99z3 7Bv r9 v96zxr9 9v3 x8r59 v8xBv3 uv9uv4y59r3v4Av r trsvtr 6r8r 5 tvB, v47Br4A5 r9 tyvzr9 r9 srzEr3 6r8r r Av88r, 9Br 3rv. cv54r8u5 Ur mz4tz.';

var vetor = frequencia(compara, frase);

//  for(i in vetor){
//  	document.writeln(vetor[i].letra + ' = ' + 	vetor[i].letra_aux + '\n\n');
//  }
//
// 	fraseDecifrada = decodificador('r', 'a', fraseDecifrada);
// 	fraseDecifrada = decodificador('v', 'e', fraseDecifrada);
// 	fraseDecifrada = decodificador('9', 'o', fraseDecifrada);
// 	fraseDecifrada = decodificador('3', 'm', fraseDecifrada);
//
//
// 	console.log(frase);

//frequencia(compara, frase);


// frequência
function frequencia(compara, frase){
	var resultado = [];
	var letra;
	var cont = 0;

	for(i in compara){
		for(j in frase){
			if(compara[i] == frase[j]){
				cont += 1;
			}
			resultado[i] = {'letra': compara[i], 'cont': cont};
		}

		cont = 0;
	}

	document.writeln('<h1>Análise de Frequência</h>');
	document.writeln('<h2>Acadêmicos: Erick e Ronan</h2>')

	for(i in resultado){

		document.writeln('<p>' + resultado[i].letra + ' = ' + resultado[i].cont + '</p>');
	}

	return resultado;
}

// decodificar
function decodificador(letra, letra_aux, fraseDecifrada){
	for(i in fraseDecifrada){
		fraseDecifrada = fraseDecifrada.replace(letra, letra_aux);
	}

	return fraseDecifrada;
}
