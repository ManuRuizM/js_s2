const lista = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

const texto = 'Ajolote';
let i = 0;
function findArrayIndex(array,text){
   for (const iterator of lista) {
    i++;
        if(iterator == text){
            return i;
        }
   }
}

console.log(findArrayIndex(lista,texto));