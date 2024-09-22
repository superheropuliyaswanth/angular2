import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products!: Product[];

  constructor() {

    this.products = [];
    this.products[0] = new Product("iPhone", 75000, "Great Phone", true, 'Images/111.png');
    this.products[1] = new Product("Nokia", 5000, "Simple Phone", true, 'Images/web.jpeg');
    this.products[2] = new Product("Samsung", 15000, "Good Phone", true, 'Images/web.jpeg');
    this.products[3] = new Product("Motorala", 25000, "Nice Phone", false, 'Images/web.jpeg');
   
    
}
 name1(prod:Product) :void{
 
  console.log("hello");
  console.log(`${prod.name} added to the cart`);
}
name2(prod:Product){
  prod.price=prod.price-(prod.price*(1/10));
}
}
