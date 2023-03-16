const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

const functionShirt = () => {
    for (let i = 0; i <= products.length - 1; i++){
        if(products[i].indexOf("Camiseta") !== -1 ){
            console.log(products[i]);
        }
    }
}

functionShirt();

