import { Injectable } from '@angular/core';
import { Color } from './color';

const All_COLORS: Color[] = [
  {colorName: 'red', hexValue: '#f00'},
  {colorName: 'green', hexValue: '#0f0'},
  {colorName: 'blue', hexValue: '#00f'},
  {colorName: 'cyan', hexValue: '#0ff'},
  {colorName: 'magenta', hexValue: '#f0f'},
  {colorName: 'yellow', hexValue: '#ff0'},
  {colorName: 'black', hexValue: '#000'}  
];

@Injectable({
   providedIn: 'root'
})
export class ColorService {
   getAllColors() {
       return All_COLORS;
   }
}