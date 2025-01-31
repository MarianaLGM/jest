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



//2. FUNCION removeProduct 
    
describe("removeProduct",() =>{//describe qué hará el test
    it("should remove a product", ()=>{
        expect(removeProduct(0)).not.toThrow()//esperamos que no lance error si localiza id en array
        expect(getProducts()).toEqual([{id:0,name: 'apple', price: 1}]);//esperamos que nos devuelva el producto buscado
        removeProduct(0);
    });   
    it("should fail when deleting a non-existent product", () => {
        removeProduct(1) //debería dar error si metemos un id que no existe, en este caso 1 no existe
        expect(()=>removeProduct(1)).toThrow(); //esperamos que lance un error al eliminar un id que no existe
    });
});


/*
//3.FUNCION getProduct
    
describe("getProduct",() =>{//describe qué hará el test
    it("", ()=>{
        expect(getProduct()).toBe(true)
    });
    it("", ()=>{
        expect(getProduct()).not.toBe(true);
    });
        
});

//4.FUNCION getProduct

describe("getProduct",() =>{//describe qué hará el test
    it("", ()=>{
        expect(getProduct()).toBe(true)
    });
    it("", ()=>{
         expect(getProduct()).not.toBe(true);
    });
                
});

//5.FUNCION updateProduct
    
describe("getProduct",() =>{//describe qué hará el test
    it("", ()=>{
        expect(updateProduct()).toBe(true)
    });
    it("", ()=>{
        expect(updateProduct()).not.toBe(true);
    });
            
});*/