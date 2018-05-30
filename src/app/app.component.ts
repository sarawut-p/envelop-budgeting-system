import { Component } from '@angular/core';
import {Asset} from '../domain-model/asset.domain-model';
import {EnvelopBudgetingFacade} from '../facades/envelop-budgeting.facade';
import {AssetRepository} from '../repositories/asset.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private EnvelopBudgetingFacade:EnvelopBudgetingFacade,
              private AssetRepository:AssetRepository){

  }

  title = 'envelop-budgeting-system!';
  assets = this.AssetRepository.getAll();
  totalBudget = this.EnvelopBudgetingFacade.getAvaliableBudget(this.assets);
}
