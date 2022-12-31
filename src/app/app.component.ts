import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Home-Dash';
	Date = new Date();
	currentDate = this.Date.toDateString()
}
