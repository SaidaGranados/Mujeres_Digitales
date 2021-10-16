import { Component, OnInit } from '@angular/core';
import { MensajeriaService } from 'src/app/services/mensajeria.service';

@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.component.html',
  styleUrls: ['./mensajeria.component.css']
})
export class MensajeriaComponent implements OnInit {

  constructor(public msg:MensajeriaService) { }

  ngOnInit(): void {
  }

}
