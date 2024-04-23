import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IChapter } from './chapters';
import { IQuranChapter } from './quranchapter';
import { QuranChapterService } from './quranchapter.services';

@Component({
  selector: 'app-quranchapter',
  templateUrl: './quranchapter.component.html',
  styleUrls: ['./quranchapter.component.css']
})
export class QuranchapterComponent implements OnInit {
  pageTitle: string = 'Chapters List';
  errorMessage: string = '';
  sub!: Subscription;
  chapter!: IChapter;
  quranchapters: IQuranChapter[] = [];
  imageWidth: number = 25;
  imageMargin: number = 2;
  constructor(private quranChapterService: QuranChapterService) { }
   
  ngOnInit(): void {
    this.sub = this.quranChapterService.getChapter().subscribe({
      next: chapter => {
        this.chapter = chapter;
        this.quranchapters = chapter.chapters;
      },
      error: err => this.errorMessage = err
    });

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
