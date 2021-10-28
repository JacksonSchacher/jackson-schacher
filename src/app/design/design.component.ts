import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {
  designs = [
    {
      title: 'Theatre Poster',
      shortDesc: 'Printed posters done for a production in Chicago',
      imgUrl: 'https://via.placeholder.com/150',
      // Update this to include actual icons
      icons: 'Illustrator, InDesign'
    },
    {
      title: 'Concept Art',
      shortDesc: 'Images ',
      imgUrl: 'https://via.placeholder.com/150',
      icons: 'Photoshop, Zbrush'
    },
    {
      title: 'Test Vid',
      shortDesc: 'video test for ngIf',
      vidUrl: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
      icons: 'video'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
