import {Asset} from '../domain-model/asset.domain-model';
import {AppModule} from '../app/app.module';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class EnvelopBudgetingFacade{
    getAvaliableBudget(assets:Asset[]){
        return assets.reduce((sum, asset) => sum + asset.value,0);
    }   
}