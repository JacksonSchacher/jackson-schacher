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
      title: 'Liquid Simulation Dinosaur Skull',
      shortDesc: 'Realflow test, using fluid simulation and rendering stylized lighting and shaders',
      vidUrl: './assets/1x/RealflowSim.mp4',
      icons: 'video'
    },
    {
      title: 'St. Joeseph Regional Medical Center Animated Logo',
      shortDesc: 'Animation made for a redesigned wing of the hospital in Lewiston, Idaho',
      vidUrl: './assets/1x/SJRMC.mp4',
      icons: 'video'
    },
    {
      title: 'Augmented Reality Application Mock',
      shortDesc: 'Test Footage for a proposal to build an augmented reality app for the college of natural resources at University of Idaho',
      vidUrl: './assets/1x/MapMock.mp4',
      icons: 'video'
    },
    {
      title: 'Skateboarding Animation',
      shortDesc: 'Short animation built using layering and scoping',
      vidUrl: './assets/1x/SkateboardVid.mp4',
      icons: 'video'
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
