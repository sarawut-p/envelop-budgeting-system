import {Asset} from '../domain-model/asset.domain-model'
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AssetRepository{

    getAll(){
        const assets = <Asset[]>[
            <Asset>{name:'Kbank',value:23000},
            <Asset>{name:'Bualuang',value:3000}
          ];
        return assets;
    }

}