import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NodesDetailComponent } from '../nodes-detail/nodes-detail.component';

@Component({
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css']
})
export class NodesRowComponent {

  constructor(private modalService: NgbModal) {} 

  
@Input() node: any;
inDanger(prop) {
  return this.node[prop].used / this.node[prop].available > 0.7;
} 

open(node){
  const modal = this.modalService.open(NodesDetailComponent);
  modal.componentInstance.node = node;  
}
}
