import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  faXmark = faXmark;
  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(public carrinhoService: CarrinhoService, private router: Router) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  removerProdutoDoCarrinho(produtoId: number){
    this.carrinhoService.removerProdutoDoCarrinho(produtoId);
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.calcularTotal();
  }
  
  comprar(){
    alert("Compra realizada com sucesso!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }
}
