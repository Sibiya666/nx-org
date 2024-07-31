import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'si-ola-entry',
  template: `<si-nx-welcome></si-nx-welcome>`,
})
export class RemoteEntryComponent {}
