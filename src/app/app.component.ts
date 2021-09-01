import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataCheckBox: any = [
    { id: 1, name: 'checkbox1', isChecked: true },
    { id: 2, name: 'checkbox2', isChecked: false },
    { id: 3, name: 'checkbox3', isChecked: false },
    { id: 4, name: 'checkbox4', isChecked: false },
    { id: 5, name: 'checkbox5', isChecked: false },
    { id: 6, name: 'checkbox6', isChecked: false },
    { id: 7, name: 'checkbox7', isChecked: false }
  ];

  public ngOnInit() {
    this.dataCheckBox.forEach((data, i) => this.onSelectChange(data, i));
  }

  public onSelectChange(event: any, i: any): void {
    if (this.dataCheckBox[i].isChecked) {
      this.dataCheckBox[i].name = this.dataCheckBox[i].name.split('').join(',');
    } else {
      if (this.dataCheckBox[i].name.split(',')) {
        this.dataCheckBox[i].name = this.dataCheckBox[i].name
          .split(',')
          .join('');
      }
    }
  }
}
