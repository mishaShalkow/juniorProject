import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AutorizationComponent } from './components/autorization/autorization.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MainWindowComponent } from './components/main-window/main-window.component';
import { PostWindowComponent } from './components/post-window/post-window.component';
import { postResolver } from './service/postResolver.resolver';

const routes: Routes = [
  {path: '', redirectTo: 'header', pathMatch: 'full'},
  {path: 'header', component: HeaderComponent},
  {path: 'autorization', component: AutorizationComponent},
  {path: 'registration', component: RegistrationComponent},
  {
    path: 'post/:id',
    component: PostWindowComponent,
    resolve: {data: postResolver},
  },
  {path: 'main', component: MainWindowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
