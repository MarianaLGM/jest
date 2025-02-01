
//1. npm init -y


//2. npm i jest

/*3. en package.json añadimos 
  "scripts": {
    "test": "jest"
  }*/


let products = []; //array productos tienda
let id = 0;

beforeEach(() => {
    resetProducts();
});

function resetProducts() {
  products = [];
  id = 0;
}


//1. FUNCION addProduct
    //-dos parámetros: el nombre del producto y el precio
    //- debería agregar un producto.
          //- debería incrementar el id en 1 cada vez que se añada un producto.
          //-Si alguno de los dos parámetros no está definido, la función lanzará un error
          //-Si el producto ya existe también lanzará error
          // throw new Error ("The product is already added")
function addProduct(name, price) {
  if (!name || !price) throw new Error("Incorrect data");
  if (products.find((product) => product.name === name)) {
    throw new Error("This product already exists");
  }
  const product = { name, price, id: id++ };
  products.push(product);
  return products;
};


//2. FUNCION removeProduct
    //-parámetro: el id del producto. 
    //- debería eliminar un producto
    //-Si el producto no existe, la función lanzará un error.

function removeProduct(id) {
  // Buscar el índice del producto con el ID dado
  ////Esto busca el producto cuyo id coincide con el id que paso.
  // !...: Si no se encuentra ningún producto (es decir, find devuelve undefined), entonces lanzamos el error.
  const index = products.findIndex((product) => product.id === id);
  if (index === -1) {// Si no se encuentra el producto (index === -1), lanza un error
    throw new Error("The id doesn't exist");
  }
  products.splice(index, 1);// Eliminar el producto encontrado.//elimine solo un elemento a partir del indice que ha encontrado findIndex
}
  
//3.FUNCION getProduct por ID
    //-parámetro: el id del producto. 
    // - debería devolver un producto por su id.
    //-Devuelve un objeto con los datos del producto. Si el producto no existe, la función lanzará un error

function  getProduct(id) {
  const index = products.findIndex((product) => product.id === id);
  if (index === -1) {// Si no se encuentra el producto (index === -1), lanza un error
    throw new Error("The id doesn't exist");
  }
  return products;
}


//4. FUNCION getProduct TODOS
    //-parámetro: el id del producto. 
    // - debería devolver un producto por su id.
    //-Devuelve TODOS los productos. Si el producto no existe, la función lanzará un error

  function getProducts (){
        return products
      }        


//5.FUNCION updateProduct
    //-tres parámetros: el id del producto, el nombre del producto y el precio del producto. 
    //- debería actualizar un producto por su id.
    // Si el producto no existe, la función lanzará un error. 
    // Si el nombre o el precio no están definidos, la función actualizará el producto con los datos que sí estén definidos.       

function updateProduct (id, name, price){
  if (!name || !price) throw new Error("Incorrect data");
 const index = products.findIndex((product) => product.id === id);
  if (index === -1) {// Si no se encuentra el producto (index === -1), lanza un error
    throw new Error("The id doesn't exist");
  }
  // Actualizar el producto con los nuevos datos
  products[index].name = name;
  products[index].price = price;

  return products[index];
} 

module.exports={
  addProduct,
  resetProducts,
  getProducts,
  removeProduct,
  getProduct,
  updateProduct
};