import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{

  @Input()
  public price: number = 0;


  ngOnInit(): void {
    console.log('HIJO Component: ngOnInit')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes})
    console.log('HIJO Component: ngOnChanges')
  }
  ngOnDestroy(): void {
    console.log('HIJO Component: ngOnDestroy')
  }
}
