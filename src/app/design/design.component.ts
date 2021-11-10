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
      imgUrl: '../assets/1x/GrizzlyPoster.jpg',
      // Update this to include actual icons
      icons: 'Illustrator, InDesign'
    },
    {
      title: 'Theme Park Layout Design',
      shortDesc: 'Designed a theme park layout, working with multiple teams to build a cohesive look and blending styles between different themed lands',
      imgUrl: '../assets/1x/themeparklayout.png',
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
      title: 'Tripr Application Design Documents',
      shortDesc: 'Mocked up designs using Figma to guide my team through style and functionality of app',
      imgUrl: "../assets/1x/Tripr-Figma.png"
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
