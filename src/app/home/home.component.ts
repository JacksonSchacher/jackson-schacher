import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  skills = [
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/ios/50/000000/javascript--v1.png"
    },
    {
      name: "C#",
      icon: "https://img.icons8.com/ios-filled/50/000000/c-sharp-logo.png"
    },
    {
      name: "Go",
      icon: "https://img.icons8.com/ios/50/000000/golang.png"
    },
    {
      name: "SQL",
      icon: "https://img.icons8.com/ios/50/000000/mysql.png"
    },
    {
      name: "Adobe CC",
      icon: "https://img.icons8.com/ios/50/000000/adobe-creative-cloud--v1.png"
    },
    {
      name: "3DSMax",
      icon: "https://img.icons8.com/ios/50/000000/3ds-max.png"
    },
    {
      name: "AWS",
      icon: "https://img.icons8.com/windows/32/000000/amazon-web-services.png"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
