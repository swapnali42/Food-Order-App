import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any = []
  public item :any = [];
  public productList = new BehaviorSubject<any>([]);
  constructor() { }

  getProducts() {
   
    return this.productList.asObservable();
  }
  setProduct(product: any) {
    this.cartItemList.push(...product)
    this.productList.next(product);
  }



  addtoCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log("this.cartItemList", this.cartItemList)
  }

  getTotalPrice(): number {
    let strMeasure1FromArr: any;
   
    let grandTotal = 0;

    // console.log("cartList from getTotalPrice---->>", this.cartItemList);
    this.cartItemList.forEach((element: any) => {
      strMeasure1FromArr = element.strMeasure1;
      console.log("strMeasure1FromArr-->", strMeasure1FromArr);
      grandTotal += strMeasure1FromArr;
      console.log("grandTotal", grandTotal);

    });



    return grandTotal;
  }


  removeCartItem(index: any) {
    this.cartItemList.splice(index, 1);

    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
  removeOneItem(item: any) {
    if (item.quantity != 1) 
    {
      item.quantity -= 1;
    }
 
    console.log("Decrimented item", item.quantity);

  }
  addOneItem (item:any) {
    if (item.quantity != 6) 
    {
      item.quantity += 1;
    }
    
    
    
    console.log("Incrimented item", item.quantity);
  }
  
}
