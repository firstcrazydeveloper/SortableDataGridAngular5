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
import { SearchComponent } from './shared/components/search-component/search.component';
import AppErrorHandler from './shared/error-handler/errorhandler';
import { ManageUser } from './features/user-management/components/manage-user/manageuser.component';

import { DataGrid } from './shared/components/datagrid/datagrid.component';
import { DataGridUtil } from './shared/components/datagrid/datagrid.util';
import { Format } from './shared/components/datagrid/format';
import { OrderBy } from './shared/components/datagrid/orderby';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, FormsModule,
        BrowserAnimationsModule, MaterialModule
    ],
    declarations: [AppComponent, UserComponent, HomeComponent, UserFilterPipe, SearchComponent, ManageUser,
        DataGrid, Format, OrderBy
    ],
    providers: [{ provide: ErrorHandler, useClass: AppErrorHandler }, UserService, UserFilterPipe],
    entryComponents: [ManageUser],
    bootstrap: [AppComponent]

})
export class AppModule { }
