import { Component, OnInit,EventEmitter, Output } from '@angular/core';
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
  strMeasureDigit: any = [];
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

    this.commserv.getFood().subscribe((data: any) => {
      console.log(data);
      this.mealList = data.meals;
      console.log("this.mealList", this.mealList);
      
      this.mealList.forEach((a:any) => {
        Object.assign(a, {quantity:1, total:a.strMeasure1});
      });
    })
    
  }
  addtoCart(item : any) {
    this.cartService.addtoCart(item);
  } 


}
