import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello wordl!!';

  onLogoClick() {
    alert(this.title);
  }

  onKeyUp(newTitle:string){
    this.title = newTitle;
  }
}
