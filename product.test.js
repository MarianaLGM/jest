const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

beforeEach(() => {
    resetProducts();
});


//1. FUNCION addProduct

describe("addProduct", () => {
    
    it("should add a product", () => {
        expect(()=>addProduct("apple", 1)).not.toThrow(); // esperamos que no lance un error al añadir un producto con nombre y precio
        expect(getProducts()).toEqual([{id:0,name: 'apple', price: 1}]); // esperamos que nos devuelva un array con un objeto con los datos del producto
        addProduct('banana',3); // añadimos un producto para comprobar que se añade correctamente y que el id se incrementa correctamente
        expect(getProducts()).toEqual([{id:0,name: 'apple', price: 1},{id:1,name: 'banana', price: 3}]); // comprobamos que se ha añadido correctamente
    });
    it("should fail when adding a repeated product", () => {
        addProduct("apple", 1); // añadimos un producto para poder comprobar que no se añade un producto repetido
        expect(()=>addProduct("apple", 1)).toThrow(); // esperamos que lance un error al añadir un producto cuyo nombre ya existe
    });

    it("should fail when adding a product with no name", () => {
        expect(()=>addProduct(null,3)).toThrow(); // esperamos que lance un error al añadir un producto con nombre null
    });
    it("should fail when adding a product with no price", () => {
        expect(()=>addProduct('fish',null)).toThrow(); // esperamos que lance un error al añadir un producto con precio null
    });
    
});

/*Pasos:
        -añade producto
        -elimina producto
        -obtienes los productos actuales (get)
        -verificas que está vacío
*/

//2. FUNCION removeProduct 
   
describe("removeProduct",() =>{
    it("should remove a product", ()=>{
        expect(()=>addProduct("apple", 3)).not.toThrow();//añades un producto id 1
        expect(getProducts()).toEqual([{id:0,name: 'apple', price: 3}]);//obtengo todos los productos
        removeProduct(0);//elimino un producto de la lista
        expect(getProducts()).toEqual([]);//comprobamos que se ha eliminado correctamente
    });   

    it("should fail when deleting a non-existent product", () => {
        expect(()=>removeProduct(3)).toThrow(); //esperamos que lance un error al eliminar un id que no existe
    });
});

describe("removeProduct", () => {

    it("should remove a product", ()=>{
        expect(()=>addProduct("apple", 3)).not.toThrow();//añades un producto 
        expect(getProducts()).toEqual([{id:0,name: 'apple', price: 3}]);//obtengo todos los productos
        removeProduct(0);//elimino un producto de la lista
        expect(getProducts()).toEqual([]);//comprobamos que se ha eliminado correctamente
    });   

    it("should fail when deleting a non-existent product", () => {
        // Intentamos eliminar un producto con un id que no existe
        expect(() => removeProduct(33)).toThrow("The id doesn't exist");
      });
});


//3.FUNCION getProduct(ID)
/*Pasos:
        -añade producto
        -muestra producto
// Si el producto no existe, la función lanzará un error. 

        
*/
describe("getProduct",() =>{//describe qué hará el test
    it("should getting a product", () => {
        expect(()=>addProduct("apple", 3)).not.toThrow(); 
        getProduct(0);
        expect(getProducts()).toEqual([{id:0,name: 'apple', price: 3}]); 
    });
    it("should fail when getting a non-existent product", () => {
        // Intentamos obtener un producto con un id que no existe
        expect(() => getProduct(33)).toThrow("The id doesn't exist");
      });
});


//5.FUNCION updateProduct
// Si el producto no existe, la función lanzará un error. 
// Si el nombre o el precio no están definidos, la función actualizará el producto con los datos que sí estén definidos.
    
describe("updateProduct",() =>{//describe qué hará el test
    it("should updating a product", () => {
        expect(()=>addProduct("apple", 1)).not.toThrow(); 
        expect(getProducts()).toEqual([{id:0, name: "apple", price: 1}]); 
        updateProduct(0,"banana",3); 
        expect(getProducts()).toEqual([{id:0, name: "banana", price: 3}]); 
    });
    it("should fail when updating a non-existent product", () => {
        // Intentamos obtener un producto con un id que no existe
        expect(() => updateProduct(33,"fish",5)).toThrow("The id doesn't exist");
    });  

    it("should fail when updating a product with no name", () => {
        expect(()=>updateProduct(null,3)).toThrow(); // esperamos que lance un error al añadir un producto con nombre null
    });

    it("should fail when updating a product with no price", () => {
        expect(()=>updateProduct("fish",null)).toThrow(); // esperamos que lance un error al añadir un producto con precio null
    });      
});