import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AnswersComponent } from './answers/answers.component';
import { QuestionsComponent } from './questions/questions.component';
import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'results', component: QuestionsComponent },
  { path: 'question', component: AnswersComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AnswersComponent,
    QuestionsComponent,
    SearchComponent,
    NavComponent
  ],
  imports: [
    // RouterModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
