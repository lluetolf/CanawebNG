import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReceivableComponent } from './receivable/receivable.component';
import { PayableComponent } from './payable/payable.component';
import { EditPayableDialogComponent } from './payable/edit-payable-dialog/edit-payable-dialog.component';
import { CreatePayableDialogComponent } from './payable/create-payable-dialog/create-payable-dialog.component';
import { DeletePayableDialogComponent } from './payable/delete-payable-dialog/delete-payable-dialog.component';
import { FieldComponent } from './field/field.component';
import { CreateFieldDialogComponent } from './field/create-field-dialog/create-field-dialog.component';
import { EditFieldDialogComponent } from './field/edit-field-dialog/edit-field-dialog.component';
import { DeleteFieldDialogComponent } from './field/delete-field-dialog/delete-field-dialog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./auth/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReceivableComponent,
    PayableComponent,
    EditPayableDialogComponent,
    CreatePayableDialogComponent,
    DeletePayableDialogComponent,
    FieldComponent,
    CreateFieldDialogComponent,
    EditFieldDialogComponent,
    DeleteFieldDialogComponent,
    PageNotFoundComponent,
    AuthComponent,
    NavigationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
