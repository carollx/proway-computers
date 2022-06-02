import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrinhoRoutingModule } from './carrinho-routing.module';
import { CarrinhoComponent } from './carrinho.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    CarrinhoComponent
  ],
  imports: [
    CommonModule,
    CarrinhoRoutingModule,
    FormsModule,
    FontAwesomeModule,
  ]
})
export class CarrinhoModule { }
