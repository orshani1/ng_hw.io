import { IfStmt } from '@angular/compiler';
import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-fatger',
  templateUrl: './fatger.component.html',
  styleUrls: ['./fatger.component.css']
})
export class FatgerComponent implements OnInit {

  constructor() { }
  car = {name:'',
          url:''};
  @Output() sendCar = new EventEmitter<Object>();

  ngOnInit(): void {
  }
  handleSubmit(value:string){
      if(value ==='opel'){
        this.car.name = "Opel";
        this.car.url = "https://www.byri.net/wp-content/uploads/2021/10/Price-Opel-Astra-2021-From-23150-euros.jpg";
      }
      if(value === 'audi'){
        this.car.name = "Audi";
        this.car.url = "https://www.audi.co.il/wp-content/uploads/2017/07/%D7%97%D7%99%D7%A6%D7%95%D7%A0%D7%99-%D7%A1%D7%93%D7%90%D7%9F-2-1.jpg";
      }
      if(value === 'volvo'){
        this.car.name ="Volvo";
        this.car.url = "https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my23/homepage/homepage-gallery-01-1x1.jpg?h=1080&iar=0&w=1080";

      }
      this.sendCar.emit(this.car);
  }
}
