import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit {
  constructor(private el: ElementRef<HTMLElement>) {}
  ngOnInit() {
    const node = this.el.nativeElement;
    node.classList.add('reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { node.classList.add('in'); obs.unobserve(node); }
      });
    }, { threshold: 0.12 });
    obs.observe(node);
  }
}
