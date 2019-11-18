import {AfterContentChecked, Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appShowToggle]'
})
export class ShowToggleDirective implements AfterContentChecked {


  constructor(private  el: ElementRef, private r: Renderer2) {
  }

  ngAfterContentChecked(): void {
    // console.log(this.r.parentNode(this.el));
  }

}
