export class Product {
    constructor(
       public productId: number,
       public name: string,
       public price: number,
       public category: string,
       public productImg: string,
       public brand: string,
       public rating: number,
       public description: string
    ){}
}
