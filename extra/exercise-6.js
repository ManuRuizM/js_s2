function swap(array, i, j) {
    const aux = array[i];
    array[i] = array[j];
    array[i] = aux;
    return array;
  }

const array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
const result = swap(array, s1, 3);
console.log(result);