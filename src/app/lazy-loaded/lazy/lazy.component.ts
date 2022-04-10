import { Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/core/services/sharing.service';
import { Character } from '../models/character';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {
  subject: any;
  emptyVariable: Array<string> = [];
  mortyValue: Character | null = null;

  constructor(private sharingService: SharingService) {
    this.subject = this.sharingService.getInformation();
  }

  ngOnInit(): void {}

  // sum(num1: number, num2: number) {
  //   return num1 + num2;
  // }

  getMorty(): Character | null {
    this.sharingService.getMeAMorty().subscribe(
      m => this.mortyValue = m);

    return this.mortyValue;
  }

}
