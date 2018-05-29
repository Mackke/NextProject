import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  homeLinkwasClicked = false;
  userLinkwasClicked = false;
  statsLinkwasClicked = false;

  users(){
    console.log("link works");
    this.userLinkwasClicked = true;
    this.statsLinkwasClicked = false;
    this.homeLinkwasClicked = false;
  }

  stats(){
    console.log("stats link works also");
    this.statsLinkwasClicked = true;
    this.homeLinkwasClicked = false;
    this.userLinkwasClicked = false;
  }

  home(){
    console.log("redirecting to home page");
    this.homeLinkwasClicked = true;
    this.statsLinkwasClicked = false;
    this.userLinkwasClicked = false;
  }

  first(){
    console.log("first was clicked");
  }


  second(){
    console.log("second was clicked");
  }

  third(){
    console.log("third was clicked");
  }

  logbtn(){
    console.log("login/out btn was clicked");
  }
}
