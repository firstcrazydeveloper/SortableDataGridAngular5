import { Component } from "@angular/core";

@Component({
    template: `
               <mat-card class="example-card">
                  <mat-card-header>
                    <div mat-card-avatar class="example-header-image"></div>
                    <mat-card-title>Users</mat-card-title>
                    <mat-card-subtitle>Sample Image</mat-card-subtitle>
                  </mat-card-header>
                  <img mat-card-image src="assets/images/users.png">
                  <mat-card-content>
                    <p>
                     In this application, you can add new user, edit and delete existing user.
                    </p>
                  </mat-card-content>
                  <mat-card-actions>
                    <button md-button>LIKE</button>
                    <button md-button>SHARE</button>
                  </mat-card-actions>
                </mat-card>
               `
})

export class HomeComponent {
}