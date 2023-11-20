import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { ComponentsModule } from './shared/components/components.module';

import { MaquetaComponent } from 'src/app/test/maqueta/maqueta.component';

import { TestComponent } from './test.component';

@NgModule({
  declarations: [MaquetaComponent, TestComponent],
  imports: [CommonModule, TestRoutingModule, ComponentsModule, RouterModule],
})
export class TestModule {}
