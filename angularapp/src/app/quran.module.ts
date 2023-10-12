import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurahDetailComponent } from './surah/surah-detail.component';
import { PagesComponent } from './quranpages/pages/pages.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SurahListComponent } from './surah/surah-list.component';
import { SurahDetailGuard } from './surah/surah-detail.guard';
import { QuranchapterComponent } from './quranchapter/quranchapter.component';

@NgModule({
  declarations: [
    SurahDetailComponent,
    PagesComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule.forChild([
      {path: 'quranchapter', component: QuranchapterComponent },
      {path: 'surahs', component: SurahListComponent},
      {path: 'pages', component: PagesComponent},
      {
        path: 'surahs/:id', 
        canActivate: [SurahDetailGuard],
        component: SurahDetailComponent
      },
    ])
  ]
})
export class QuranModule { }
