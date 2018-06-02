import {EnvelopBudgetingFacade} from './envelop-budgeting.facade';
import {Asset} from '../domain-model/asset.domain-model';

describe('EnvelopBudgetingFacade', () => {

    it('when getAvaliableBudget can get value correctly',()=>{
        //Arrange
        const facade = new EnvelopBudgetingFacade();
        const assets = <Asset[]>[<Asset>{name:'wallet',value:2000},
                                 <Asset>{name:'kbank',value:3000}];

        //Act                        
        const result = facade.getAvaliableBudget(assets)

        //Assert
        expect(result).toBe(5000);
    })
});
