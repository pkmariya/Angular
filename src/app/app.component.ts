import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'compInteraction';
  public msgToChild = "Message from App Component to Child!"
  public incomingMsg = ""
}
