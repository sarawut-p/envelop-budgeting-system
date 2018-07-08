import { EnvelopBudgetingFacade } from './envelop-budgeting.facade';
import { Asset } from '../domain-model/asset.domain-model';

describe('EnvelopBudgetingFacade', () => {

    it('should getAvaliableBudget can get value correctly when there is no budgets', () => {
        //Arrange
        const facade = new EnvelopBudgetingFacade();
        const assets = <Entity.IAsset[]>[{ name: 'wallet', value: 2000 },
        { name: 'kbank', value: 3000 }];

        const budgets = <Entity.IBudget[]>[];

        //Act                        
        const result = facade.getAvaliableBudget(assets, budgets)

        //Assert
        expect(result).toBe(5000);
    })

    it('should getAvaliableBudget can get value correctly when there are budgets', () => {
        //Arrange
        const facade = new EnvelopBudgetingFacade();
        const assets: Entity.IAsset[] = [
            { name: 'wallet', value: 3000 },
            { name: 'kbank', value: 3000 }
        ];

        const budgets: Entity.IAsset[] = [
            { name: 'Food', value: 1000 },
            { name: 'Transportation', value: 200 }
        ];

        //Act                        
        const result = facade.getAvaliableBudget(assets, budgets)

        //Assert
        expect(result).toBe(4800);
    })
});
