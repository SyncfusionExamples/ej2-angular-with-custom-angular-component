import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { CheckBoxModule, ButtonModule } from "@syncfusion/ej2-angular-buttons";
import { DialogModule } from "@syncfusion/ej2-angular-popups";

import { AppComponent } from "../app.component";
import {customComponent} from "../custom.component"

@NgModule({
  declarations: [AppComponent, customComponent],
  imports: [
    CheckBoxModule,
    BrowserModule,
    ButtonModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
