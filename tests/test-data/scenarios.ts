import { FilterBy } from '../../src/model/filter-by';
import { ExpectedProductCategory } from '../../src/model/expected-product-category';

export const scenarios = [
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