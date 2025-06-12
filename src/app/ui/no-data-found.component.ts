import { Component } from '@angular/core';

@Component({
  selector: 'app-no-data-found',
  standalone: true,
  template: `
    <div class="flex justify-center items-center w-full py-12">
      <div class="text-xl text-gray-400 font-semibold tracking-wide">
        No data found
      </div>
    </div>
  `,
  styles: []
})
export class NoDataFoundComponent {}