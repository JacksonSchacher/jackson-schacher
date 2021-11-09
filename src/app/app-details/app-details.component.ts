import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { App } from '../app';
import { AppDetailsService } from '../app-details.service';

@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.scss']
})
export class AppDetailsComponent implements OnInit {
  app!: App;
  constructor(
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    const appTitle = this.route.snapshot.paramMap.get('title');
    if (appTitle == null) {
      throw new Error;
    }
    this.app = AppDetailsService.getApp(appTitle);
  }

}

