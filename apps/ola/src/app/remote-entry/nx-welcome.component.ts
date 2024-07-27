import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'si-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>OLA</h2>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
