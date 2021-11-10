import { Injectable } from '@angular/core';
import { App } from './app';

@Injectable({
  providedIn: 'root'
})
export class AppDetailsService {
  static apps: App[] = [
    {
    title: "Tripr",
    description: "Organizational application for groups of friends to setup trips, organize supplies and track locations",
    img1: "../assets/1x/tripr_img1.gif",
    info1: "Took on the role of Product Owner for this project. Led a team of 5 throughout a two week sprint to complete a fullstack application",
    img2: "../assets/1x/tripr-main.png",
    info2: "I leveraged the power of MapBoxGL's Api to add map functionality to the application.",
    img3: "../assets/1x/tripr-main.png",
    info3: "The application is still being developed and my goal is to build it out into a full web application people can use on their next trip!",
    github: "https://github.com/ScottFennie/Tripr",
    website: ""
  },
  {
    title: "BugTracker",
    description: "Web application for creating, tracking and closing bugs for projects",
    img1: "",
    info1: "",
    img2: "",
    info2: "",
    img3: "",
    info3: "",
    github: "https://github.com/JacksonSchacher/BugTracker_v3",
    website: "https://js-bug-tracker.herokuapp.com/#/"
  },
  {
    title: "BeerFinder",
    description: "Serverless computing application to find the perfect brew using a small questionaire",
    img1: "",
    info1: "",
    img2: "",
    info2: "",
    img3: "",
    info3: "",
    github: "https://github.com/JacksonSchacher/GoLambdaApp",
    website: ""
  },
  {
    title: "Collections",
    description: "Posting board for images and short descriptions, users are able to save posts into collections",
    img1: "",
    info1: "",
    img2: "",
    info2: "",
    img3: "",
    info3: "",
    github: "https://github.com/JacksonSchacher/Collections",
    website: ""
  }
];
  static getApp(appTitle: string): App {
    let application = this.apps.find(a => a.title == appTitle)
    if (application == undefined) {
      throw new Error;
    }
    return application
  }
  constructor() { }
}
