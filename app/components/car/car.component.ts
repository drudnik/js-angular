import { Component, OnInit } from '@angular/core';

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name: string = '';
  speed: number = 0;
  model: string = '';
  color: Colors = {
    car: 'white',
    salon: 'black',
    wheels: 'silver'
  };
  options: string[] = ["ABS", "Автопилот", "Автопаркинг"];
  isEdit: boolean = false;

  constructor() { }
  ngOnInit() {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.color = {
      car: 'white',
      salon: 'black',
      wheels: 'silver'
    };
    this.options = ["ABS", "Автопилот", "Автопаркинг"]
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }
  addOpt(options: string) {
    this.options.unshift(options)
    return false;
  }

  deleteOpt(option: string) {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] == option) {
        this.options.splice(i, 1);
        break;
      }
    }
  }

  carSelect(carName: string) {
    if (carName == 'bmw') {
      this.name = 'BMW';
      this.speed = 280;
      this.model = 'M5';
      this.color = {
        car: 'Синий',
        salon: 'Белый',
        wheels: 'Серебристый'
      };
      this.options = ["ABS", "Автопилот", "Автопаркинг"]
    }
    else if (carName == 'audi') {
      this.name = 'Audi';
      this.speed = 235;
      this.model = 'RS8';
      this.color = {
        car: 'white',
        salon: 'black',
        wheels: 'silver'
      };
      this.options = ["Климат", "Печка", "Дрова"]
    }
    else {
      this.name = 'Mercedes';
      this.speed = 1;
      this.model = 'CLA';
      this.color = {
        car: 'Грязь',
        salon: 'Говно',
        wheels: 'Трупы'
      };
      this.options = ["Болты", "Ведра", "Гайки"]
    }
  }
}

