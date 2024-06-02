/* Math ---> Matematica

    -  pow -> (2,2)  / potencia / 2² = 4 ---> USADO PARA FAZER POTENCIA

    - sqrt -> (25,2) / Raiz / √25       ---> USADO PARA CALCULAR RAIZ

    - PI

    -  ceil / teto -> arredonda para cima

    - floor / chão -> arredonda para baixo

    random() / numero aleatorio entre 0 e 1
 */

  /* ----------------------------------------------------------------------------------------- */
    /* Exemplo de utilização do Math.pow para calcular uma potencia */
    const resultPow = Math.pow(5,3)

    console.log(resultPow)

  /* ----------------------------------------------------------------------------------------- */
    /* Exemplo de utilização do Math.sqrt para calcular uma raiz:
 
    OBS: Vale lembrar que dentro dos parênteses temos um dígito, 
    sendo o primeiro dígito responsável pelo valor da raiz e o segundo pelo tipo de raiz. tipo de raiz */
    const resultSqrt = Math.sqrt(25,2)

     console.log(resultSqrt)

   /* -----------------------------------------------------------------------------------------*/
   
   /* Exemplo de utilização do Math.PI para calcular o valor de PI */
   const resultPI = Math.PI

   console.log(resultPI)

   /* -----------------------------------------------------------------------------------------*/
   
   /* Exemplo de como utilizar o CEIL e efetuar arrendondamento para cima*/
   const resultCeil = Math.ceil(3.14)

   console.log(resultCeil)

   /* -----------------------------------------------------------------------------------------*/
    /* Exemplo de como utilizar o floor e efetuar arrendondamento para baixo*/
   const resultfloor = Math.floor(3.14)

   console.log(resultfloor)

   /* -----------------------------------------------------------------------------------------*/
/* Exemplo  de Random e utilização para gerar numero aleatorio entre 0 e 1*/
   const resultRandom = Math.random()

   console.log(resultRandom)