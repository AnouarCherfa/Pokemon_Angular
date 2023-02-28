import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  constructor( private el : ElementRef ) {
    this.setHeight(180);
    this.el.nativeElement.style.border= '2px solid #f5f5f5'
    // this.el.nativeElement.style.height='180px'
  }


  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouseenter')
    this.setBorder('#009688');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }
  setHeight ( height : number) {
    this.el.nativeElement.style.height = `${height}px`
    }

  setBorder ( color : string ) {
    // console.log(this.el.nativeElement.style)
    this.el.nativeElement.style.borderColor = color
    // console.log(this.el.nativeElement.style)
    }
   

}
