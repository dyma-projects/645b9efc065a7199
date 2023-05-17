import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit{

  constructor(private el: ElementRef<any>) { }

  ngOnInit(): void {
    // this.el.nativeElement.style.color = "black";
  }

  @HostListener('window:keydown.ArrowDown', ['$event']) windowDown($event) {
      console.log($event);
      this.el.nativeElement.style.color = "red";
    }

    @HostListener('window:keydown.ArrowUp', ['$event']) windowUp($event) {
      console.log($event);
      this.el.nativeElement.style.color = "yellow";
    }

    @HostListener('window:keydown.ArrowLeft', ['$event']) windowLeft($event) {
      console.log($event);
      this.el.nativeElement.style.color = "blue";
    }

    @HostListener('window:keydown.ArrowRight', ['$event']) windowRight($event) {
      console.log($event);
      this.el.nativeElement.style.color = "purple";
    }

    @HostListener('window:keyup', ['$event']) windowKeyUp($event) {
      console.log($event);
      setTimeout(() => {
        this.el.nativeElement.style.color = "black";
      }, 3000);
    }

}
