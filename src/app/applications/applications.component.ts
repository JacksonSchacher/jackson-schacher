import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  applications = [
    {
      title: 'Tripr',
      shortDesc: 'Organizational tool to help plan trips with your friends',
      heroImg: 'https://i.postimg.cc/x1XyphRb/test-Tripr-Img.png'
    },
    {
      title: 'BugTracker',
      shortDesc: 'Create, track, and close development bugs',
      heroImg: 'https://www.lambdatest.com/blog/wp-content/uploads/2018/08/534-x-300-20-1.jpg'
    }
  ]
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  // goToAppDetails(appTitle: string) {
  //   this.router.navigate(['application/details/' + appTitle], {relativeTo: this.route});
  // }
  ngOnInit(): void {
  }

}
