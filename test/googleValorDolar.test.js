const google = require('../scripts/googleValorDolar')

// google().then(()=>{
    
// }).catch((erro)=>{
//     console.log('deu erro na busca do google', erro);
// })

google.then(x => console.log(x))