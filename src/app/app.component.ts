import { Component } from '@angular/core';
import Asset from '../domain-model/asset.domain-model';
import {EnvelopBudgetingFacade} from '../facades/envelop-budgeting.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private EnvelopBudgetingFacade:EnvelopBudgetingFacade){

  }

  title = 'envelop-budgeting-system!';
  assets = <Asset[]>[
    <Asset>{name:'Kbank',value:23000},
    <Asset>{name:'Bualuang',value:3000}
  ];
  totalBudget = this.EnvelopBudgetingFacade.getAvaliableBudget(this.assets);
}
