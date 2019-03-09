import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMstConfirmed]'
})
export class MstConfirmedDirective implements OnInit {

  flag: boolean = false;
  
  constructor(private el: ElementRef,private renderer: Renderer2) { }

  ngOnInit(): void {
        this.renderer.setStyle(this.el.nativeElement, 'image', 'url(/assets/checked26x26.png)');
  
  }

}
