import { element } from 'protractor';
import { Directive, ElementRef, Renderer2, EventEmitter } from '@angular/core';

@Directive({
  selector: '[direcFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef : ElementRef,
    private _renderer : Renderer2  ) {
    //this._elementRef.nativeElement.style.backgroundColor = "yellow";
    this._renderer.setStyle(this._elementRef.nativeElement, "background-color", "yellow");
   }

}
