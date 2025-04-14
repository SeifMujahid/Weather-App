import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastweatherService } from 'src/app/core/services/forecastweather.service';
import { Forecastweather } from 'src/app/core/interfaces/forecastweather';
import { WinddirPipe } from 'src/app/core/pipes/winddir.pipe';
import { GethourePipe } from 'src/app/core/pipes/gethoure.pipe';
import { ToastrService } from 'ngx-toastr';
import { UserlocationService } from 'src/app/core/services/userlocation.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, WinddirPipe, GethourePipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  city: string = '';
  forecastWeather: Forecastweather = {} as Forecastweather;
  display: boolean = false;

  constructor(
    private _ForecastweatherService: ForecastweatherService,
    private _ToastrService: ToastrService,
    private _UserlocationService: UserlocationService
  ) {}

  ngOnInit(): void {
    this.getUserCity();
  }

  showError(): void {
    this._ToastrService.error('There is an error or failed connection');
  }

  getUserCity(): void {
    this._UserlocationService.getUserCity().subscribe({
      next: (response) => {
        response?.city;
        this.city = response.city;
        this.getForecastWeather(this.city);
      },
      error: (err) => {
        this.showError();
      },
    });
  }

  search(): void {
    if (this.city && this.city.trim() !== '') {
      this.getForecastWeather(this.city.trim());
    }
  }

  getForecastWeather(city: string): void {
    this._ForecastweatherService.getForecastWeather(city, 7).subscribe({
      next: (response) => {
        this.forecastWeather = response;
        this.display = true;
      },
      error: (err) => {
        this.getForecastWeather('cairo');
        this.display = true;
        this._ToastrService.error('City not found. Showing weather for Cairo.');
      },
    });
  }
}
