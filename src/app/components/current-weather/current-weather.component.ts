import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from 'src/app/interfaces/current-weather.interface';

@Component({
    selector: 'app-current-weather',
    templateUrl: './current-weather.component.html',
    styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
    current: ICurrentWeather;

    constructor(
        private readonly weatherService: WeatherService
    ) { }

    ngOnInit(): void {
        this.weatherService
            .getCurrentWeather('Panjakent', 'TJ')
            .subscribe((data: ICurrentWeather) => (this.current = data));
    }
}
