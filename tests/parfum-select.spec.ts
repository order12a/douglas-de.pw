import { FilterBy } from '../src/model/FilterBy';
import { ExpectedProductCategory } from '../src/model/ExpectedProductCategory';
import { anonymousBuyerFixture } from './fixtures';

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
                filterValue: 'Männlich'
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
                filterValue: 'Männlich'
            },
            {
                filterType: FilterBy.PresentFor,
                filterValue: 'Valentinstag'
            }
        ],
        expectedSpecialCategory: ExpectedProductCategory.Offer
    }
];

anonymousBuyerFixture.describe('Select Parfum feature tests', () => {
    anonymousBuyerFixture.afterEach('Clear filters after each test',
        async ({ app: { parfumPage } }) => {
            await parfumPage.clearAllFilters();
        });

    anonymousBuyerFixture(`Select Parfum product to match random params`,
        async ({ app: { parfumPage } }) => {
            await parfumPage.productSelect.expectLoaded();
            await parfumPage.productSelect.clickSelectByCriteria(FilterBy.ProductType);
            await parfumPage.productSelect.selectByCriteriaOption('Eau de Parfum');
            await parfumPage.productSelect.dismissDropdown();

            await parfumPage.expectEyeCatcherProductsAppear(ExpectedProductCategory.Sale);
        });

    for (const scenario of scenarios) {
        anonymousBuyerFixture(`Select Parfum product to match ${scenario.expectedSpecialCategory}`,
            async ({ app: { parfumPage } }) => {
                for (const filter of scenario.criteria) {
                    await parfumPage.productSelect.expectLoaded();
                    await parfumPage.productSelect.clickSelectByCriteria(filter.filterType);
                    await parfumPage.productSelect.selectByCriteriaOption(filter.filterValue);
                    await parfumPage.productSelect.dismissDropdown();
                }

                await parfumPage.expectEyeCatcherProductsAppear(ExpectedProductCategory.Sale);
            });
    }
});