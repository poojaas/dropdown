import { Component, Input, Output, EventEmitter, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss'],
})
export class CustomDropdownComponent {
  @Input() selectedOption = '';
  @Input() placeholder = 'Select an option';//we can provide any placeholder
  @Input() options: string[] = [];
  @Output() onSelection: EventEmitter<string> = new EventEmitter<string>();
  isOpen = false;

  
 //dropdown toggle
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  //emitting the selected option
  selectOption(option: string) {
    this.selectedOption = option;
    this.onSelection.emit(option);
    this.isOpen = false;
  }
}
