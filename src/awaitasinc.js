function resolverDepoisDe2Segundos(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function adicionar1(x) {
    var a = resolverDepoisDe2Segundos(20);
    var b = resolverDepoisDe2Segundos(30);
    return x + await a + await b;
}




async function adicionar2(x) {
    var a =  await resolverDepoisDe2Segundos(50);
    var b =  await resolverDepoisDe2Segundos(40);
    return x + a +  b;
}


adicionar1(10).then(v => {
    console.log(v);  // exibe 60 depois de 2 segundos.
});
adicionar2(10).then(v => {
    console.log(v);  // exibe 100 depois de 4 segundos.
});