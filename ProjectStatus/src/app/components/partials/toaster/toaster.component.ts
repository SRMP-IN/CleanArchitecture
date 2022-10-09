import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastEvent } from 'src/app/models/Toast/toast-event';
import { ToastService } from 'src/app/services/Toast/toast.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {

  currentToasts: ToastEvent[] = [];

  constructor(private toastService: ToastService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.subscribeToToasts();    
  }

  subscribeToToasts() {
    this.toastService.toastEvents.subscribe((toasts) => {
      const currentToast: ToastEvent = {
        type: toasts.type,
        title: toasts.title,
        message: toasts.message,
        time: toasts.time
      };
      this.currentToasts.push(currentToast);
      this.cdr.detectChanges(); 
    });
  }

  dispose(index: number) {
    this.currentToasts.splice(index, 1);
    this.cdr.detectChanges();
  }



}
