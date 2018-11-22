import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort} from '@angular/material';
import { ColorService } from './color.service';

@Component({
    selector: 'app-color',
    templateUrl: './color.component.html'
})
export class ColorComponent implements OnInit {
    @ViewChild(MatSort) sort: MatSort;
      

    constructor(private colorService: ColorService) {}
    
    displayedColumns: string[] = ['colorName', 'hexValue'];
    dataSource = new MatTableDataSource(this.colorService.getAllColors());
  
    ngOnInit() {
      this.dataSource.sort = this.sort;      
    }    
}