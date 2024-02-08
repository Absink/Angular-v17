import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColorDays]'
})
export class ColorDaysDirective implements OnChanges {

  @Input() appColorDays!: number;
  @HostBinding('class') className!: string;
  

  constructor() { }


  ngOnChanges(): void {
    if (this.appColorDays <= 3)
      this.className = 'day';
    else
      this.className = 'days';
  }

}
