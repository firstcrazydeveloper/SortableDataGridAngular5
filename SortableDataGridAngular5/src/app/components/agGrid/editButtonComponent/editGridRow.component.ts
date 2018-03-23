import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular/main";
import { IAfterGuiAttachedParams } from "ag-grid";

@Component({
    selector: 'edit-button',
    template: `<button (click)="invokeEditMethod()" class="btn btn-primary btn-xs"><span class="glyphicon glyphicon-edit"></span>Edit</button>
               <button (click)="invokeDeleteMethod()" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span>Delete</button>`
})
export class EditGridRowComponent implements ICellRendererAngularComp {
    refresh(params: any): boolean {
        throw new Error("Method not implemented.");
    }
    afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
        throw new Error("Method not implemented.");
    }
    public params: any;

    agInit(params: any): void {
        this.params = params;
    }
    public invokeDeleteMethod() {
        var selectedData = this.params.api.getSelectedRows();
        this.params.api.updateRowsData({ remove: selectedData });
        alert("hi");

    }
    public invokeEditMethod() {


        this.params.api.setFocusedCell(this.params.node.rowIndex, 'courtname');
        this.params.api.startEditingCell({
            rowIndex: this.params.node.rowIndex,
            colKey: 'courtname',
        }
        );
    }

}