import Asset from '../domain-model/asset.domain-model';

export default class EnvelopBudgetingFacade{

    getAvaliableBudget(assets:Asset[]){
        return assets.reduce((sum, asset) => sum + asset.value,0);
    }
    
}