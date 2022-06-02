import { Component, OnInit } from '@angular/core';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { CarrinhoService } from '../carrinho.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faCartShopping = faCartShopping;
  faMagnifyingGlass = faMagnifyingGlass;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;

  constructor(public carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
  }

}
