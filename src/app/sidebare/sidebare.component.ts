import { Component, OnInit } from '@angular/core';
import { side } from '../../assets/javascript/sidebare';



@Component({
  selector: 'app-sidebare',
  templateUrl: './sidebare.component.html',
  styleUrls: ['./sidebare.component.css']
})
export class SidebareComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    side();
  }

}
