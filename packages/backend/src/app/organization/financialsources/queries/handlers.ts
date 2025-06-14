import { FinancialSourceOptionsQueryHandler } from './financialsource-options';
import { FinancialSourceProfileQueryHandler } from './financialsource-profile';
import { FinancialSourcesViewQueryHandler } from './financialsources-view';
import { ValidateFinancialSourceNameQueryHandler } from './validate-financialsource-name';

export const queryHandlers = [
    ValidateFinancialSourceNameQueryHandler,
    FinancialSourcesViewQueryHandler,
    FinancialSourceOptionsQueryHandler,
    FinancialSourceProfileQueryHandler,
];
