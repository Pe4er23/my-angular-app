import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
})
export class AppComponent {
  // Task 1
  salary = 2500;
  learningProgress = 0.85;

  // Task 2
  showContacts = true;
  skills = ['HTML', 'CSS', 'JavaScript', 'Angular'];
  userRole = 'admin';

  // Task 3
  selectedVehicle = '';

  showInfo(vehicleType: string) {
    this.selectedVehicle = vehicleType;
  }
}