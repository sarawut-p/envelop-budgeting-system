import { Budget } from '../domain-model/budget.domain-model'
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class BudgetRepository {

    getAll() {
        const assets = <Budget[]>[
            <Budget>{name:'Master Degree', value:0},
            <Budget>{name:'Condo', value:0},
            <Budget>{name:'New PC', value:0}     
        ];
        return assets;
    }

}