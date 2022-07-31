import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css']
})
export class NodesRowComponent {

  constructor() { }

  
@Input() node: any;
  inDanger(prop) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  } 


}
