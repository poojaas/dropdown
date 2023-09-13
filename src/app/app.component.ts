import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedOption="";
  //we can import options field from mock file or api response , time being written here
  options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7','Option 5', 'Option 6', 'Option 7'];

  //hit the function when user selects dropdown option
  onOptionSelected(option: string) {
    this.selectedOption = option;
  }
}
