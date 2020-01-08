import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {

  // constructor(private el: ElementRef,
  //   private renderer: Renderer) { (1)
  //   renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow'); (2)

    constructor(private el: ElementRef, private renderer:Renderer){
      renderer.setElementStyle(el.nativeElement, 'color', 'red');
    }
}


