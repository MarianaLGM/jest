const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

//1. FUNCION addProduct
    //-Si alguno de los dos parámetros no está definido, la función lanzará un error
    //-Si el producto ya existe también lanzará error
       // throw new Error ("The product is already added")

    beforeEach(() => {
        resetProducts();
    });

describe("addProduct",() =>{//describe qué hará el test
    it("", ()=>{
      expect(addProduct()).toBe(true)
    });
    it("", ()=>{
      expect(addProduct()).not.toBe(true);
    });

});



//2. FUNCION removeProduct 
    //-Si el producto no existe, la función lanzará un error.
        // throw new Error ("id doesn`t exist") 
describe("removeProduct",() =>{//describe qué hará el test
    it("", ()=>{
        expect(removeProduct()).toBe(true)
    });
    it("", ()=>{
        expect(removeProduct()).not.toBe(true);
    });
    
});


//3.FUNCION getProduct
    //-Devuelve un objeto con los datos del producto. Si el producto no existe, la función lanzará un error
        //throw new Error ("id doesn`t exist") 
describe("getProduct",() =>{//describe qué hará el test
    it("", ()=>{
        expect(getProduct()).toBe(true)
    });
    it("", ()=>{
        expect(getProduct()).not.toBe(true);
    });
        
});

//4.FUNCION getProduct
//-Devuelve TODOS los productos. Si el producto no existe, la función lanzará un error
        //throw new Error ("id doesn`t exist") 
describe("getProduct",() =>{//describe qué hará el test
    it("", ()=>{
        expect(getProduct()).toBe(true)
    });
    it("", ()=>{
         expect(getProduct()).not.toBe(true);
    });
                
});

//5.FUNCION updateProduct
    // Si el producto no existe, la función lanzará un error. 
    // Si el nombre o el precio no están definidos, la función actualizará el producto con los datos que sí estén definidos.
        //throw new Error ("id doesn`t exist") 
describe("getProduct",() =>{//describe qué hará el test
    it("", ()=>{
        expect(updateProduct()).toBe(true)
    });
    it("", ()=>{
        expect(updateProduct()).not.toBe(true);
    });
            
});
