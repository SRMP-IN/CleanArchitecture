import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SITE_TITLE } from '../utilities/constants/common';
@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor(private title: Title) {}

  getTitle() {
    this.title.getTitle();
  }
  setTitle(newTitle: string): void {
    this.title.setTitle(SITE_TITLE + newTitle);
  }
}
