const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

let aux = 0;
for (let juguetes of toys) {
  console.log(aux);
     if(juguetes.name.includes('gato')){
        toys.splice(aux,1);
        console.log(juguetes);
        aux++;
     }

}

