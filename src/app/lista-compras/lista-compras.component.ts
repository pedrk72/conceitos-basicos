import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemList } from './itemlist';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {
  item: string = '';
  listOfItems: ItemList[] = [];

  addItem(){
    console.log("Received Item: " + this.item);

    let itemList = new ItemList();

    itemList.id = this.listOfItems.length + 1;
    itemList.name = this.item;
    itemList.isBought = false;

    this.listOfItems.push(itemList);

    this.item = '';
    console.table(this.listOfItems);
  }
}
