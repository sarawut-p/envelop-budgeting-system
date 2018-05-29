import { Component } from '@angular/core';
import Asset from '../domain-model/asset.domain-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'envelop-budgeting-system!';
  assets = <Asset[]>[
    <Asset>{name:'Kbank',value:23000},
    <Asset>{name:'Bualuang',value:3000}
  ];
}
