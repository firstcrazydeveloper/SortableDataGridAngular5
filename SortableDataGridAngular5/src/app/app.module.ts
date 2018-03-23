import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { UserComponent } from './features/user-management/components/users/user.component';
import { HomeComponent } from './components/home.component';
import { UserService } from './features/user-management/services/user.service';
import { UserFilterPipe } from './filters/user.pipe'
import AppErrorHandler from './shared/error-handler/errorhandler';
import { ManageUser } from './features/user-management/components/manage-user/manageuser.component';
import { SortableDataGridModule } from './shared/components/sortableDataGrid/sortableDataGrid.module';
import { AgGridModule } from "ag-grid-angular";
import { ProficiencyCellRenderer } from './components/agGrid/ProficiencyCellRenderer/proficiencyCellRenderer.component';
import { RichGridComponent } from './components/agGrid/richGridComponent/richGrid.component';
import { EditGridRowComponent } from './components/agGrid/editButtonComponent/editGridRow.component';



@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, FormsModule,
        BrowserAnimationsModule, MaterialModule, SortableDataGridModule, AgGridModule.withComponents([
            ProficiencyCellRenderer, EditGridRowComponent
        ])
    ],
    declarations: [AppComponent, UserComponent, HomeComponent, UserFilterPipe, ManageUser, ProficiencyCellRenderer, RichGridComponent, EditGridRowComponent],
    providers: [{ provide: ErrorHandler, useClass: AppErrorHandler }, UserService, UserFilterPipe],
    entryComponents: [ManageUser, ProficiencyCellRenderer, RichGridComponent, EditGridRowComponent],
    bootstrap: [AppComponent]

})
export class AppModule { }
