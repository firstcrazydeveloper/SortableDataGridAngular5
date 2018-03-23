import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'proficiency-renderer',
    template: `
     <div class="div-percent-bar" [ngStyle]="styles">
        <div class="div-percent-value">{{value}}%</div>
        <div class=div-outer-div></div>
    </div>
    `,
    styleUrls: ['./proficiencyCellRenderer.component.css']
  
})
export class ProficiencyCellRenderer {
    private params: any;
    private value: any;
    private styles: any;

    // called on init
    agInit(params: any): void {
        this.params = params;
        this.value = this.params.value;

        this.styles = {
            width: this.value + "%",
            backgroundColor: '#00A000'
        };

        if (this.value < 20) {
            this.styles.backgroundColor = 'red';
        } else if (this.params.value < 60) {
            this.styles.backgroundColor = '#ff9900';
        }
    }
}