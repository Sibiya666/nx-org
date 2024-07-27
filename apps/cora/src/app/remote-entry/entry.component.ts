import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'si-cora-cora-entry',
  template: `<si-cora-nx-welcome></si-cora-nx-welcome>`,
})
export class RemoteEntryComponent {
  constructor() {
    console.log('remote entry component');
  }
}
