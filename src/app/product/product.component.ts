import { Component, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
//x=10;
//name='LG TV';
@Input() name!: string;
  @Input() price!: number;
  @Input() description!: string;
  @Input() inStock!: boolean;
  @Input() imagePath!: string;

  product: Product = new Product(); // Initialize product with default values

  
  // One of the Lifecycle method
  ngOnInit():void{
    this.product.name=this.name;
    this.product.price=this.price;
    this.product.description=this.description;
    this.product.inStock=this.inStock;
    this.product.imagePath=this.imagePath;
  }
}

