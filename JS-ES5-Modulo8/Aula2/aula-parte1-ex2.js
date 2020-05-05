// let obj = {};
// obj.nome = 'Fabiola';
// obj['nome'] = 'Fabiola';
// console.log(obj);

function object(key,value){
  let obj = {};
  obj[key] = value;
  console.log(obj);
  console.log(Object.keys(obj));
}

object('nome','Fabiola');