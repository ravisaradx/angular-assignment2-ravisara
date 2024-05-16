import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAttribute]',
  standalone: true
})
export class AttributeDirective {
  private hoverText: string = 'y e a h';
  private originalText: string = '';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onHover() {
    if (!this.originalText) {
      this.originalText = this.el.nativeElement.innerText;
    }
    this.el.nativeElement.innerText = this.hoverText;
    this.el.nativeElement.style.fontSize = '500px';
    this.el.nativeElement.style.backgroundColor = '#D62226';
  } 

  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.backgroundColor = '#01AA31';
  }

  @HostListener('window:keydown.r') EnterR() {
    this.el.nativeElement.style.backgroundColor = '#D62226';
  }

  @HostListener('window:keydown.a') EnterA() {
    this.el.nativeElement.style.backgroundColor = '#ED7014';
  }

  @HostListener('window:keydown.i') EnterI() {
    this.el.nativeElement.style.backgroundColor = '#F5C603';
  }

  @HostListener('window:keydown.n') EnterN() {
    this.el.nativeElement.style.backgroundColor = '#01AA31';
  }

  @HostListener('window:keydown.b') EnterB() {
    this.el.nativeElement.style.backgroundColor = '#0041C2';
  }

  @HostListener('window:keydown.o') EnterO() {
    this.el.nativeElement.style.backgroundColor = '#57A0D3';
  }

  @HostListener('window:keydown.w') EnterW() {
    this.el.nativeElement.style.backgroundColor = '#663399';
  }
}
