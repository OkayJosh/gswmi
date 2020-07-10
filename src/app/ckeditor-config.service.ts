import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CkeditorConfigService {

  constructor() { }
  public getConfig(height: number, maxCharCount: number){
    return {
      customConfig: '/assets/js/ckeditor/ckeditor-config.js',
      height: height,
      wordcount: {
        showParagraphs: false,
        showWordCount: false,
        showCharCount: true,
        maxCharCount: maxCharCount
      }
    };
  }
}
