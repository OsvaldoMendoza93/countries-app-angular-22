import { Routes } from '@angular/router';
import { CountryLayout } from './layouts/country-layout/country-layout';

export const Countryroutes: Routes = [
    {
        path: '',
        component: CountryLayout,
        children: [
            {
                path: 'capital',
                loadComponent: () => import('./pages/capital-countries/capital-countries').then(c => c.CapitalCountries)
            },
            {
                path: '**',
                redirectTo: 'capital'
            }
        ]
    }
];
