import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonesComponent } from './test/tailwind/botones/botones.component';
import { AlertasComponent } from './test/tailwind/alertas/alertas.component';
import { CardsComponent } from './test/tailwind/cards/cards.component';
import { LoginFormComponent } from './test/tailwind/login-form/login-form.component';
import { MaquetaComponent } from './test/maqueta/maqueta.component';
import { InterpolacionComponent } from './test/angular/interpolacion/interpolacion.component';
import { EventBindingComponent } from './test/angular/event-binding/event-binding.component';
import { ClassBindingComponent } from './test/angular/class-binding/class-binding.component';
import { FormularioComponent } from './test/angular/formulario/formulario.component';
import { PropertyBindingComponent } from './test/angular/property-binding/property-binding.component';
import { NgifComponent } from './test/angular/ngif/ngif.component';
import { ChildrenComponent } from './test/angular/children/children.component';
import { GridComponent } from './test/tailwind/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonesComponent,
    AlertasComponent,
    CardsComponent,
    LoginFormComponent,
    MaquetaComponent,
    InterpolacionComponent,
    EventBindingComponent,
    ClassBindingComponent,
    FormularioComponent,
    PropertyBindingComponent,
    NgifComponent,
    ChildrenComponent,
    GridComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
