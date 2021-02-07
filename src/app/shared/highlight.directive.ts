import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[direcHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.actionColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor!: string;


  @Input() defaultColor: string = "blue";
  @Input() actionColor: string = "purple"

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  constructor() {



  }

}
