# ej2-angular-with-custom-angular-component

This knowledge base explains how to render custom native angular component inside Syncfusion components.

## Custom native angular component Creation:

To create angular component, please refer below angular documentation.
Documentation - https://angular.io/start#components

Here I have created a custom button component, you can refer below code snippets.

## custom.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class customComponent  {
  @Input() name: string;
}

Above is my custom component which get `string` type input and display as header.

To create Syncfusion Angular UI Components, you can refer below documentation.
Documentation - https://ej2.syncfusion.com/angular/documentation/dialog/getting-started/

Here I have created EJ2 dialog component and placed custom native angular component inside Syncfusion Angular UI Components

## app.component.ts

```typescript
import { Component, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { DialogComponent, ButtonPropsModel } from '@syncfusion/ej2-angular-popups';
import { AnimationSettingsModel } from '@syncfusion/ej2-splitbuttons';

/**
 * Default Dialog Component
 */
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public name = "custom component"
    @ViewChild('Dialog', {static:false})
    public Dialog: DialogComponent;

    public header: string = ' SYNCFUSION angular dialogue component ';
    public showCloseIcon: Boolean = true;
    public width: string = '50%';
    public animationSettings: AnimationSettingsModel = { effect: 'None' };
    public target: string = '.control-section';

    ngAfterViewInit(): void {
        document.getElementById('dlgbtn').focus();
    }
    // On Dialog close, 'Open' Button will be shown
    public dialogClose = (): void => {
        document.getElementById('dlgbtn').style.display = '';
    }
    // On Dialog open, 'Open' Button will be hidden
    public dialogOpen = (): void => {
        document.getElementById('dlgbtn').style.display = 'none';
    }

    public dlgBtnClick = (): void => {
        window.open('https://www.syncfusion.com/company/about-us');
    }

    public BtnClick = (): void => {
        this.Dialog.show();
    }

    public dlgButtons: ButtonPropsModel[] = [{ click: this.dlgBtnClick.bind(this), buttonModel: { content: 'Learn More', isPrimary: true } }];
}
```

## App.component.html

```html
<div class="control-section">
	<!-- Render Button to open the Dialog -->
	<button ejs-button id='dlgbtn' #ButtonInstance (click)="BtnClick()">Open</button>
	<ejs-dialog #Dialog [buttons]='dlgButtons' [header]='header' [animationSettings]='animationSettings'
		[showCloseIcon]='showCloseIcon' [target]='target' [width]='width' (open)="dialogOpen()" (close)="dialogClose()">
		<ng-template #content>
			<!-- Declaring cusotm component -->
			<custom name="{{ name }}"></custom>
		</ng-template>
	</ejs-dialog>
</div>
```

## App.module.ts

```typescript
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
```

## Sample link:  

https://stackblitz.com/edit/angular-x6utsq-naff9r?file=app.component.ts

## The following screenshot shows the result of the created custom component inside EJ2 angular components
 

