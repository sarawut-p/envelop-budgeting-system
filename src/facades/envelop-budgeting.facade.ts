import { Injectable } from '@angular/core';
import * as fp from "lodash/fp";
import { isNgTemplate } from '@angular/compiler';

@Injectable({
    providedIn: 'root',
})
export class EnvelopBudgetingFacade{
    getAvaliableBudget(assets: Entity.IAsset[],budgets:Entity.IBudget[]){

        const sumByValue = fp.sumBy<{value:number}>(item =>item.value);
        const totalAssets =  sumByValue(assets) - sumByValue(budgets);        
        return totalAssets;
    }   
}