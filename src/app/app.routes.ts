import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindComponent } from './components/data-bind/data-bind.component';
import { DOMComponent } from './components/dom/dom.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { APIComponent } from './components/api/api.component';

export const routes: Routes = [
    {
        path: 'add-emp',
        component: AddEmployeeComponent
    },
    {
        path: 'data-bind',
        component: DataBindComponent
    },
    {
        path: 'dom',
        component: DOMComponent
    },
    {
        path: 'emp-list',
        component: EmployeeListComponent
    },
    {
        path: 'form',
        component: ReactiveComponent
    },
    {
        path: 'api',
        component: APIComponent
    }
];
