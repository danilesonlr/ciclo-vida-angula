import { Component, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app-lista-de-compras';
  listaDeCampra! : Array<Item>

  constructor(private sevice: ListaDeCompraService) { }

 ngOnInit(): void {
    this.listaDeCampra = this.sevice.getListaDeCompra();
    console.log(this.listaDeCampra);
 }

}
