import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventTypes } from 'src/app/models/Toast/event-types';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  @Output() disposeEvent = new EventEmitter();

  @ViewChild('toastElement', { static: true }) toastEl!: ElementRef;

  @Input() type!: EventTypes;

  @Input() title!: string;

  @Input() message!: string;

  @Input() time!: Date;

  toast: string = 'toast fade'

  
  constructor() { 
   
  }

  ngOnInit(): void {
    this.show();   
  }

  show() {
    this.toast = 'toast fade show ' + this.type;
    setTimeout(function(){
      document.getElementsByClassName('toast')[0].classList.remove('show');
      document.getElementsByClassName('toast')[0].remove();
    },3000);
  // this.toast = new Toast(
    //   this.toastEl.nativeElement,
    //   this.type === EventTypes.Error
    //     ? {
    //         autohide: false,
    //       }
    //     : {
    //         delay: 5000,
    //       }
    // );

    // fromEvent(this.toastEl.nativeElement, 'hidden.bs.toast')
    //   .pipe(take(1))
    //   .subscribe(() => this.hide());

    // this.toast.show();
  }

  onHide() {
    this.toast = 'toast fade hide';
    // this.toast.dispose();
    this.disposeEvent.emit();
  }
}
