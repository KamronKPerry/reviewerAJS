import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { SurveyComponent } from './survey/survey.component';
import { LoginComponent } from './login/login.component';
import { SurveyRequestComponent } from './survey-request/survey-request.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { RegisterComponent } from './register/register.component';

// CanActivate Guards with all but Survey

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SurveyComponent,
    LoginComponent,
    SurveyRequestComponent,
    TextInputComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'Admin',
        component: AdminComponent
      },
      {
        path: 'Survey',
        component: SurveyComponent
      },
      {
        path: 'Login',
        component: LoginComponent
      },
      {
        path: 'SurveyRequest',
        component: SurveyRequestComponent
      },
      {
        path: 'Register',
        component: RegisterComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {   }
