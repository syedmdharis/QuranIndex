import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IJuz } from './juz';
import { JuzService } from './juz.service.service';
import { IQuranJuz } from './QuranJuz';

@Component({
  selector: 'app-juz',
  templateUrl: './juz.component.html',
  styleUrls: ['./juz.component.css']
})
export class JuzComponent implements OnInit {
  pageTitle: string = 'Juz List';
  errorMessage: string = '';
  sub!: Subscription;
  juz!: IJuz;
  quranjuz: IQuranJuz[] = [];


  constructor(private quranJuzService: JuzService) { }

  ngOnInit(): void {
    this.sub = this.quranJuzService.getChapter().subscribe({
      next: juz => {
        this.juz = juz;
        this.quranjuz = juz.juzs;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
