class TicketManager{constructor(){
     this.products = [];
     this.id = 1;
 }

 addProduct(title, description, price, thumbnail, code, stock){
        if ( title && description && price && thumbnail && code && stock){
            const verificationCode = this.products.some (product => product.code === code);
        if (verificationCode){
                console.error("Codigo Repetido");
            }else{
                let id = this.id++;
                const newProduct = {id, title, description, price, thumbnail, code, stock};
                this.products.push(newProduct);
                console.log("Producto agregado correctamente:", newProduct);
            }
        }else {
            console.error("Por favor completar todos los campos");        
        }
    };

     getProducs(){
         return this.products;
     }
     getProductsByD(id){
         const productID = this.products.find(product => product.id === id);
         if (!productID){
             return console.error("Not Found")
         }else {
             console.log("El producto solicitado es: ", productID);
         }
 }}


 const TicketManager = new TicketManager()
 TicketManager.addProduct("Fideos", "con tuco", 20, "thumbnail", 123, 25);
 TicketManager.addProduct("Ravioles", "de Pollo", 30, "thumbnail", 124, 20);
 TicketManager.addProduct("Ñoquis", "de papa", 40, "thumbnail", 125, 50);
 console.log ("Todos los productos:", TicketManager.getProducs());
 TicketManager.getProductsByD(1);
 TicketManager.getProductsByD(2);
 TicketManager.getProductsByD(3);
 TicketManager.getProductsByD(4);
 console.log(TicketManager);