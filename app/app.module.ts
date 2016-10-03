
import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';

import { SharedModule }      from './shared/shared.module';
import { UsersModule }       from './users/users.module';
import { PostsModule }       from './posts/posts.module';
import { LayoutModule }       from './layout/layout.module';

import { AppComponent }      from './app.component';
import { HomeComponent }     from './home.component';
import { NotFoundComponent } from './not-found.component';
import { NavBarComponent } from './navbar.component';

import { usersRouting }      from './users/users.routing';
import { postsRouting }      from './posts/posts.routing';
import { routing }           from './app.routing';

import { ChartsModule } from 'ng2-charts/ng2-charts';


@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        UsersModule,
        PostsModule,
        ChartsModule,
        LayoutModule,
        usersRouting,
        postsRouting,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
        NavBarComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { 
}