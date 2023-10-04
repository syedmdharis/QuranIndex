import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISurah } from './surah';

@Component({
  selector: 'pm-surah-detail',
  templateUrl: './surah-detail.component.html',
  styleUrls: ['./surah-detail.component.css']
})
export class SurahDetailComponent implements OnInit {
  pageTitle: string = "Surah";
  constructor(private route: ActivatedRoute,
              private router: Router) { }
  surahs: ISurah | undefined;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `# ${id}`;
  }

  onBack(): void{
    this.router.navigate(['/surahs']);
  }
}
