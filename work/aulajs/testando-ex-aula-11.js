
          const celulares = [ //no caso a variavel celulares é uma caixa grande
            {
              nome: `Galaxy S9`, //ja aqui é uma caixa dentro da caixa grande com varios produtos dentro
              fabricante: `Samsung`,
              valor: 2900,
            },
            {
              nome:`Moto G9 Play`,
              fabricante: `Motorola`,
              valor: 1900,
            },
            {
              nome: `iPhone 11`,
              fabricante: `Apple`,
              valor: 3100,
            },
          ]
          console.log(celulares[2]) //aqui posso ver o que tem em cada caixa, começando a partir do zero [0]
          //console.log (`O celular ${celulares[2].nome}, fabricado pela ${celulares[2].fabricante}, custava no mercado o valor de R$ ${celulares[2].valor} reais`)