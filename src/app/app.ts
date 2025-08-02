import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Footert } from "./components/footert/footert";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [Navbar, Footert,RouterOutlet,FormsModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('start-framework');
}
