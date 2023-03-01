import { Component, OnInit, Output } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { LevelService } from '../level.service';
import * as collection from '../../../../../assets/jsons/level-sidemenu.json'


@Component({
  selector: 'app-level-sidemenu',
  templateUrl: './level-sidemenu.component.html',
  styleUrls: ['./level-sidemenu.component.scss']
})
export class LevelSidemenuComponent implements OnInit {
    Items:  any[];
    collection = (collection as any);
//   Item: ({ label: string; icon: string; items: ({ label: string; icon: string; items: { label: string; icon: string; }[]; separator?: undefined; } | { label: string; icon: string; items?: undefined; separator?: undefined; } | { separator: boolean; label?: undefined; icon?: undefined; items?: undefined; })[]; } | { label: string; icon: string; items: ({ label: string; icon: string; items?: undefined; } | { label: string; icon: string; items: ({ label: string; items: { label: string; }[]; icon?: undefined; } | { label: string; icon: string; items?: undefined; })[]; })[]; })[];
  constructor(public levelService: LevelService) { }

  ngOnInit(): void {
    //this.Items = [collection];

    this.Items = [
        {
            label: 'Lesson 3: Whats going on?',
            items: [
                { label: 'Introduction', command: () => this.levelService.viewPage=1},
                { label: 'Warm Up', command: () => this.levelService.viewPage=2},
                { label: 'Picture Play', command: () => this.levelService.viewPage=3},
                { label: 'Open Story', command: () => this.levelService.viewPage=4},
                { label: 'Think and Write', command: () => this.levelService.viewPage=5},
                { label: 'Word Help', command: () => this.levelService.viewPage=6}
            ]
        },
        {
            label: 'Lesson 5: Seasons and Weather',
            items: [
                { label: 'Introduction', command: () => this.levelService.viewPage=7},
                { label: 'Warm Up', command: () => this.levelService.viewPage=8},
                { label: 'Word Play', command: () => this.levelService.viewPage=9},
                { label: 'Picture Play', command: () => this.levelService.viewPage=10},
                { label: 'Lets Talk', command: () => this.levelService.viewPage=11},
                { label: 'Think and Write', command: () => this.levelService.viewPage=12},
                { label: 'Word Help', command: () => this.levelService.viewPage=13}
            ]
        },
        {
            label: 'Lesson 6: Find the Things',
            items: [
                { label: 'Introduction', command: () => this.levelService.viewPage=14},
                { label: 'Warm Up', command: () => this.levelService.viewPage=15},
                { label: 'Word Play', command: () => this.levelService.viewPage=16},
                { label: 'Picture Play', command: () => this.levelService.viewPage=17},
                { label: 'Lets Talk', command: () => this.levelService.viewPage=18},
                { label: 'Think and Write', command: () => this.levelService.viewPage=19},
                { label: 'Word Help', command: () => this.levelService.viewPage=20}
            ]
        },
        {
            label: 'Lesson 8: How do you feel today?',
            items: [
                { label: 'Introduction', command: () => this.levelService.viewPage=21},
                { label: 'Warm Up', command: () => this.levelService.viewPage=22},
                { label: 'Picture Play', command: () => this.levelService.viewPage=23},
                { label: 'Lets Talk', command: () => this.levelService.viewPage=24},
                { label: 'Think and Write', command: () => this.levelService.viewPage=25},
                { label: 'Word Help', command: () => this.levelService.viewPage=26}
            ]
        },
        {
            label: 'Lesson 10: Review Time',
            items: [
                { label: 'Introduction', command: () => this.levelService.viewPage=27},
                { label: 'Picture Play', command: () => this.levelService.viewPage=28},
                { label: 'Open Story', command: () => this.levelService.viewPage=29},
                { label: 'Lets Talk', command: () => this.levelService.viewPage=30},
                { label: 'Think and Write', command: () => this.levelService.viewPage=31},
                { label: 'Word Help', command: () => this.levelService.viewPage=32}
            ]
        },
        {
            label: 'Lesson 3: When Amma Went to School',
            items: [
                { label: 'Introduction 1', command: () => this.levelService.viewPage=33},
                { label: 'Story Time: When Amma Went to School', command: () => this.levelService.viewPage=34},
                // { label: 'Picture Play', command: () => this.levelService.viewPage=35},
                { label: 'Open Story', command: () => this.levelService.viewPage=35},
                { label: 'Introduction 2', command: () => this.levelService.viewPage=36},
                { label: 'Story Time: Brushing is No Fun!', command: () => this.levelService.viewPage=37},
                { label: 'Word Play', command: () => this.levelService.viewPage=38},
                { label: 'Open Story', command: () => this.levelService.viewPage=39},
                { label: 'Think and Write', command: () => this.levelService.viewPage=40},
                { label: 'Word Help', command: () => this.levelService.viewPage=41}
            ]
        },
        {
          label: 'Lesson 4: Annual Haircut Day',
          items: [
          { label: 'Lesson 4: What\'s in store today?', command: () => this.levelService.viewPage=42},
          { label: 'Introduction 1', command: () => this.levelService.viewPage=43},
          { label: 'Story Time:Annual Haircut Day', command: () => this.levelService.viewPage=44},
          { label: 'Lets Talk', command: () => this.levelService.viewPage=45},
          { label: 'Open Story', command: () => this.levelService.viewPage=46},
          { label: 'Introduction 2', command: () => this.levelService.viewPage=47},
          { label: 'Story Time:The Red Rain Coat', command: () => this.levelService.viewPage=48},
          { label: 'Lets Talk', command: () => this.levelService.viewPage=49},
          { label: 'Think and Write', command: () => this.levelService.viewPage=50},
          { label: 'Word Help', command: () => this.levelService.viewPage=51}
          ]
        },
        {
          label: 'Speak with Me',
          items: [
          { label: 'Explore & Learn', command: () => this.levelService.viewPage=52},
          { label: 'Play & Learn', command: () => this.levelService.viewPage=53},
          { label: 'Learn with a Friend', command: () => this.levelService.viewPage=54}
          ]
        }
    ];

  }


}

