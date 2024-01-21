import { FilterBy } from '../src/model/filter-by';
import { ExpectedProductCategory } from '../src/model/expected-product-category';
import { anonymousBuyerParfumFixture } from './fixtures';

const scenarios = [
    {
        criteria: [
            {
                filterType: FilterBy.ProductType,
                filterValue: 'Eau de Parfum'
            },
            {
                filterType: FilterBy.Brand,
                filterValue: 'Armani'
            },
            {
                filterType: FilterBy.ForWhom,
                filterValue: 'Männlich'
            }
        ],
        expectedSpecialCategory: ExpectedProductCategory.Sale
    },
    {
        criteria: [
            {
                filterType: FilterBy.ProductType,
                filterValue: 'Eau de Parfum'
            },
            {
                filterType: FilterBy.ForWhom,
                filterValue: 'Unisex'
            }
        ],
        expectedSpecialCategory: ExpectedProductCategory.New
    },
    {
        criteria: [
            {
                filterType: FilterBy.ProductType,
                filterValue: 'Eau de Parfum'
            },
            {
                filterType: FilterBy.Brand,
                filterValue: 'Acqua di Parma'
            },
            {
                filterType: FilterBy.ForWhom,
                filterValue: 'Unisex'
            },
            {
                filterType: FilterBy.PresentFor,
                filterValue: 'Valentinstag'
            }
        ],
        expectedSpecialCategory: ExpectedProductCategory.Offer
    }
];

anonymousBuyerParfumFixture.describe('Select Parfum feature tests', () => {
    anonymousBuyerParfumFixture.afterEach('Clear filters after each test',
        async ({ app: { parfumPage } }) => {
            await parfumPage.clearAllFilters();
        });

    for (const scenario of scenarios) {
        anonymousBuyerParfumFixture(`Select Parfum product to match ${scenario.expectedSpecialCategory}`,
            async ({ app: { parfumPage } }) => {
                for (const filter of scenario.criteria) {
                    await parfumPage.productSelect.expectLoaded();
                    await parfumPage.productSelect.clickSelectByCriteria(filter.filterType);
                    await parfumPage.productSelect.selectByCriteriaOption(filter.filterValue);
                    await parfumPage.productSelect.dismissDropdown();
                }

                await parfumPage.expectEyeCatcherProductsAppear(scenario.expectedSpecialCategory);
            });
    }
});