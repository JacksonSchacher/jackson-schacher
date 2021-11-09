import { Component, OnInit } from '@angular/core';

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
      heroImg: '../assets/1x/tripr-main.png',
      icons: ["https://img.icons8.com/windows/64/000000/vuejs.png", "https://img.icons8.com/windows/64/000000/node-js.png", "https://webimages.mongodb.com/_com_assets/cms/kusb9stg1ndrp7j53-MongoDBLogoBrand1.png?auto=format%252Ccompress"]
    },
    {
      title: 'BugTracker',
      shortDesc: 'Create, track, and close development bugs',
      heroImg: 'https://www.lambdatest.com/blog/wp-content/uploads/2018/08/534-x-300-20-1.jpg',
      icons: ["https://webimages.mongodb.com/_com_assets/cms/kusb9stg1ndrp7j53-MongoDBLogoBrand1.png?auto=format%252Ccompress", "https://img.icons8.com/windows/64/000000/vuejs.png", "https://img.icons8.com/windows/64/000000/node-js.png"]
    },
    {
      title: 'BeerFinder',
      shortDesc: 'Find your next brew',
      heroImg: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/08/01/17/istock-1060456922.jpg?width=1200',
      icons: []
    },
    {
      title: 'Collections',
      shortDesc: 'Post images and add posts to collections',
      heroImg: 'https://www.adweek.com/wp-content/uploads/2021/05/PinterestPinGridHero2.jpg',
      icons: ["https://img.icons8.com/ios/100/000000/c-sharp-logo.png", "https://img.icons8.com/windows/64/000000/vuejs.png", "https://img.icons8.com/ios/100/000000/mysql.png"]
    }
  ]
  ngOnInit(): void {
  }

}
