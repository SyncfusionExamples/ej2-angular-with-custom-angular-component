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

    public header: string = 'SYNCFUSION angular dialogue component';
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
