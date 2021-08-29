import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';


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
  constructor(private fb: FormBuilder, private router: Router, private commserv: CommonService) { }

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
      this.strMeasureDigit = this.mealList.strMeasure1;
      console.log("mesuredigit", this.strMeasureDigit);
    })
    
  }
  onCartUpdated(event:any) {
    const id = event.target.getAttribute('id');
    const index = this.mealList.findIndex((elem :any) => elem.idMeal == id);
    this.cartUpdated.emit({
        productId: this.mealList[index].idMeal,
        productName: this.mealList[index].strMeal,
        productPrice: this.mealList[index].strMeasure1
      });
      console.log('inoncart')
}

}
