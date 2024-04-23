import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { SurahListComponent } from './surah/surah-list.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { QuranModule } from './quran.module';
import { QuranChapterService } from './quranchapter/quranchapter.services';
import { QuranchapterComponent } from './quranchapter/quranchapter.component';
import { JuzComponent } from './juz/juz.component';


@NgModule({
  declarations: [
    AppComponent,
    SurahListComponent,
    QuranchapterComponent,
    JuzComponent,
    ConvertToSpacesPipe,
    StarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'Welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'Welcome', pathMatch: 'full' }

    ]),
    QuranModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
