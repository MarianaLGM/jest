
//1. npm init -y

//2. npm i jest

/*3. en package.json añadimos 
  "scripts": {
    "test": "jest"
  }*/


let products = []; //array productos tienda
let id = 0;


  
//1. FUNCION addProduct
    //-dos parámetros: el nombre del producto y el precio
    //- debería agregar un producto.
          //- debería incrementar el id en 1 cada vez que se añada un producto.

function addProduct (name, price){
  for(let i=0; i<products.length; i++){//bucle para recorrer array productos y ver si ese id que voy añadir existe, si no existe lo añade
    if(products[i].id !=id){//si el id del array NO coincide con el nuevo 
      id ++;//incrementar el id en 1 cada vez que se añada un producto 
      return products.push(product)//añade el producto
    }
  }
}
  addProduct();

  function addProduct (name, price){
    //condicional si no hay nombre o producto -> que tire Error ("el error que quieras poner")
    /*condicional para saber si ya existe un producto (yo usuaría un find, ya que se lee mejor que un bucle for, -> array.find(producto.name === name)) {
      si ya existe -> Que tire un error ("mensaje del error")*/
      id ++;//incrementar el id en 1 cada vez que se añada un producto
      const product= { //objeto para guardar un producto
        id:"",
        name:"",
        price: ""
      }; 
      products.push
      return products
        
      }
 
    addProduct();

  funcion addProduct(name, price) {
    //condicional si no hay nombre o producto -> que tire Error ("el error que quieras poner")
    
    }
    // Aquí creas el objeto que tienes fuera el const product = ...
    products.push
    return products
    })


//2. FUNCION removeProduct
    //-parámetro: el id del producto. 
    //- debería eliminar un producto
      
function removeProduct (id){
  for(let i=0; i<products.length; i++){
    if(products[i].id===id){
      return products.removeItem(product);
    } 
  }
}
  removeProduct();
    
//3.FUNCION getProduct por ID
    //-parámetro: el id del producto. 
    /* - debería devolver un producto por su id.*/
function getProduct (id){
  for(let i=0; i<products.length; i++){
    if(products[i].id ===product.id){
      return product
    }        
  }
}
getProduct();

//4. FUNCION getProduct TODOS
    //-parámetro: el id del producto. 
    // - debería devolver un producto por su id.
  function getProduct (){
    for(let i=0; i<products.length; i++){
        return products
      }        
    }
  getProduct();


//5.FUNCION updateProduct
    //-tres parámetros: el id del producto, el nombre del producto y el precio del producto. 
  /*- debería actualizar un producto por su id.
  - debería lanzar un error si el producto no existe.
*/
function updateProduct (id,name, price){
  for(let i=0; i<products.length; i++){
    if(products[i].id ===id){
      //return (products[i].id);
    } 
  }
}

updateProduct();


module.exports={
  resetProducts,
  addProduct,
  removeProduct,
  getProduct,
  updateProduct
};