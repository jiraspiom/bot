async function nome(){
    return 'x'
}

// console.log(nome("errouuufeiooo"))

// nome("10").then(v => {
//     console.log(v);  // exibe 60 depois de 2 segundos.
// });


nome().then((x)=>{
    console.log(`valor de x ${x} \nagora vamos`)
}).catch((erro)=>{
    console.log("erroukkkk");
    console.log(erro)
})