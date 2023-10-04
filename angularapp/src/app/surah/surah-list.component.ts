import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ISurah } from "./surah";
import { SurahService } from "./surah.services";

@Component({
    selector: 'pm-surahs',
    templateUrl: './surah-list.component.html',
    styleUrls: ['./surah-list.component.css']
})
export class SurahListComponent implements OnInit, OnDestroy{
    pageTitle: string = 'Surah List';
    imageWidth: number = 25;
    imageMargin: number = 2;
    errorMessage: string = '';
    sub!: Subscription;
    private _listFilter: string = '';
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        this.filteredSurahs = this.performFilter(value);
    }
    
    filteredSurahs: ISurah[] = [];
    surahs: ISurah[] = [];

    constructor(private surahService: SurahService){}

    performFilter(filterBy: string): ISurah[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.surahs.filter((surah: ISurah) =>
        surah.englishName.toLocaleLowerCase().includes(filterBy))
    }

    ngOnInit(): void{
        this.sub = this.surahService.getSurah().subscribe({
            next: surahs => {
                this.surahs = surahs
                this.filteredSurahs = this.surahs;
            },
            error: err => this.errorMessage = err
        });
        
        this.listFilter = '';
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}