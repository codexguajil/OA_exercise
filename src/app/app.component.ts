import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'oaex';
  items: Item[] = []
  headers = [
    {
      id: 1,
      label: 'Idea'
    },
    {
      id: 2,
      label: 'Development'
    },
    {
      id: 3,
      label: 'Testing'
    },
    {
      id: 4,
      label: 'Deployment'
    }
  ]

  addItem(e: any) {
    this.items.push({
      id: 1,
      content: e.target.value,
      forward: true
    })
    e.target.value = ''
  }

  moveItem(item: Item) {
    if (item.id < 4 && item.forward === true) {
      item.id = item.id + 1
    } else if (item.id === 4 && item.forward === true) {
      item.forward = false
      item.id = item.id - 1
    } else if (item.id > 1 && item.forward === false) {
      item.id =  item.id - 1
    } else {
      item.forward = true;
      item.id = item.id + 1
    }
    let index = this.items.indexOf(item)
    this.items.splice(index, 1)
    this.items.unshift(item)
  }

}
