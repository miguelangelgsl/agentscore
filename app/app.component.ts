import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="color-line">
        </div>
        <navbar></navbar>
        <!--<breadcrumbs></breadcrumbs>   -->

      <div class="container-fluid" style="margin:5px;">
            <router-outlet></router-outlet>
      </div>
      

        <nav class="navbar navbar-default navbar-fixed-bottom" >
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" routerLink="" routerLinkActive="active"><i class="fa fa-copyright" aria-hidden="true"></i> Agents</a>
                </div>
            </div>
        </nav>
     
 
    `
})
export class AppComponent { 
}