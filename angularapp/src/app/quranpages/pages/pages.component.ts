import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { IAyah } from './pageayah';
import { IPageData } from './pagedata';
import { IPage } from './pages';
import { PagesService } from './pages.service';

@Component({
  selector: 'pm-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  pageTitle: string = 'Ayah List';
  errorMessage: string = '';
  sub!: Subscription;
  filteredPages: IPage[] = [];
  pages: IPage | undefined;
  data: IPageData | undefined;
  ayahs: IAyah[] = [];
  imageWidth: number = 25;
  imageMargin: number = 2;

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    //this.filteredPages = this.performFilter(value);
  }

  constructor(private pageService: PagesService) { }

  // performFilter(filterBy: string): IPage[] {
  //   filterBy = filterBy.toLocaleLowerCase();
  //   return this.pages.filter((page: IPage) =>
  //     page.data.surahs.toString().includes(filterBy))
  // }

  ngOnInit(): void {
    this.sub = this.pageService.getPages()
    .subscribe({
      next: (pages) => {
        this.pages = pages;
        this.data = pages.data;
        this.ayahs = this.data.ayahs;
        console.log('Syed',this.ayahs);
      },
      error: err => this.errorMessage = err
    });
    
    //this.pageAyah = this.pages.pagedata.ayahs    
    this.listFilter = '';
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
