import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAQComponent } from './faq.component';
import { FaqRoutingModule } from './faq-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FAQComponent
  ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FaqModule { }
