import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ccmask'
})
export class CcmaskPipe implements PipeTransform {

  transform(value: string): string { // 傳入string 輸出string
    const re = /(\d{4})-(\d{4})-(\d{4})-(\d{4})/; // 正則表達式
    return value.replace(re, '$1-****-****-$4'); // 傳回隱碼的版本，but前端還是撈的到
  }
}
