import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthCardComponent } from './auth-card/auth-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AuthCardComponent],
  exports: [AuthCardComponent]
})
export class UiModule {}
