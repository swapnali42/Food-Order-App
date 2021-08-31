import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeForm: any = FormGroup;
  mealList: any = [];
  grandTotal: Number = 0;
  strMeasureDigit: any = [];
  strMesure1fromarray : any; 
  foodPrice: string ='';
  foodPriceinNum : Number = 0;



  @Output() cartUpdated = new EventEmitter<{
    productId: number,
    productName: string,
    productPrice: number
  }>();
  constructor(private fb: FormBuilder, private router: Router,
    private commserv: CommonService, private cartService: CartService) { }

  ngOnInit(): void {
    this.homeForm = this.fb.group({
      idMeal: [],
      strMeal: [],
      strMeasure1: []
    })


    this.grandTotal = this.cartService.getTotalPrice();

    this.commserv.getFood().subscribe((data: any) => {
      console.log(data);
      this.mealList = data.meals;
      console.log("this.mealList", this.mealList);
      /*Code for getting food price in Number*/
        this.mealList.forEach((element:any) => {
          this.strMesure1fromarray = element.strMeasure1;
          console.log("foodprice from getMesurePrice", this.strMesure1fromarray);

          this.strMesure1fromarray = this.strMesure1fromarray.match(/\d/g);
          this.strMesure1fromarray = this.strMesure1fromarray.join("");
          console.log("foodprice after regular expression", this.strMesure1fromarray);

          this.foodPrice = this.strMesure1fromarray.slice(0, 3);
          console.log("food Price taking 3 digit", this.foodPrice);

          this.foodPriceinNum = parseInt(this.foodPrice);
          console.log("PriceNumber", typeof(this.foodPriceinNum));
          element.strMeasure1=this.foodPriceinNum;
          
        });
      /*Code for getting food price in Number*/
      this.mealList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.strMeasure1 });
      });
    })


  }
  addtoCart(item: any) {
    this.cartService.addtoCart(item);
  }

}
