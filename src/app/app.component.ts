import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'app-lista-de-compras';
  listaDeCampra! : Array<Item>
  itemParaSerEditado!: Item;

  constructor(private sevice: ListaDeCompraService) { }

 ngOnInit(): void {
    this.listaDeCampra = this.sevice.getListaDeCompra();
    console.log(this.listaDeCampra);
 }

  editarItem(item: Item){
    this.itemParaSerEditado = item;
    console.log(item);
  }

  ngDoCheck(): void {
      console.log('Do check ');
      this.sevice.atualizarLocalStorage();
  }

}
