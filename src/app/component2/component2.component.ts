import { Component, OnDestroy, OnInit,OnChanges } from '@angular/core';
import {SharedService} from '../shared.service';
@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {
  public words:any='';
  constructor(private shared2:SharedService) {
  }
  ngOnInit(): void {
    this.shared2.on<any>().subscribe(
      data=>{
        this.words=data;
      }
    )
  }
  ngOnDestroy(): void{
    console.log('Destroyed');
  }
  ngOnChanges():void{
    console.log('changed');
  }

}
