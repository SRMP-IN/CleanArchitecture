import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EventTypes } from 'src/app/models/Toast/event-types';
import { ToastEvent } from 'src/app/models/Toast/toast-event';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toastEvents!: Observable<ToastEvent>;
  private _toastEvents = new Subject<ToastEvent>();

  constructor() {
    this.toastEvents = this._toastEvents.asObservable();
  }

  /**
  * Show success toast notification.
  * @param title Toast title
  * @param message Toast message
  * @param time Toast time
  * @param type Toast EventTypes
  */
  nextToast(title: string, message: string, time: Date, type: EventTypes) {
    this._toastEvents.next({ title,message,  time, type });
  }


  // /**
  // * Show success toast notification.
  // * @param title Toast title
  // * @param time Toast time
  // * @param message Toast message
  // */
  // showSuccessToast(title: string, message: string, time: Date) {
  //   this._toastEvents.next({
  //     message,
  //     title, time,
  //     type: EventTypes.Success,
  //   });
  // }

  // /**
  //  * Show info toast notification.
  //  * @param title Toast title
  //  * @param message Toast message
  //  * @param time Toast time
  //  */
  // showInfoToast(title: string, message: string, time: Date) {
  //   this._toastEvents.next({
  //     message,
  //     title, time,
  //     type: EventTypes.Info,
  //   });
  // }

  // /**
  //  * Show warning toast notification.
  //  * @param title Toast title
  //  * @param message Toast message
  //  * @param time Toast time
  //  */
  // showWarningToast(title: string, message: string, time: Date) {
  //   this._toastEvents.next({
  //     message,
  //     title, time,
  //     type: EventTypes.Warning,
  //   });
  // }

  // /**
  //  * Show error toast notification.
  //  * @param title Toast title
  //  * @param message Toast message
  //  * @param time Toast time
  //  */
  // showErrorToast(title: string, message: string, time: Date) {
  //   this._toastEvents.next({
  //     message,
  //     title, time,
  //     type: EventTypes.Error,
  //   });
  // }


}

//this.toastService.nextToast('Success toast title', 'This is a success toast message.', time,type);
// <div class="card-container">
//     <button class="btn btn-info" (click)="showToast(EventTypes.Success)">Success</button>
//     <button class="btn btn-info" (click)="showToast(EventTypes.Info)">Info</button>
//     <button class="btn btn-info" (click)="showToast(EventTypes.Warning)">Warning</button>
//     <button class="btn btn-info" (click)="showToast(EventTypes.Error)">Error</button>
// </div>