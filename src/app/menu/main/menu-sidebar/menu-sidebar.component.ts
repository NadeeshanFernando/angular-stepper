import {AppState} from '@/store/state';
import {UiState} from '@/store/ui/state';
import {Component, HostBinding, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppService} from '@services/app.service';
import {Observable} from 'rxjs';

const BASE_CLASSES = 'main-sidebar elevation-4';
@Component({
    selector: 'app-menu-sidebar',
    templateUrl: './menu-sidebar.component.html',
    styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {
    @HostBinding('class') classes: string = BASE_CLASSES;
    public ui: Observable<UiState>;
    public user;
    public menu = MENU;

    constructor(
        public appService: AppService,
        private store: Store<AppState>
    ) {}

    ngOnInit() {
        this.ui = this.store.select('ui');
        this.user = this.appService.user;
    }
}

export const MENU = [
    {
        name: 'Dashboard',
        iconClasses: 'fas fa-tachometer-alt',
        path: ['/']
    },
    // {
    //     name: 'Blank',
    //     iconClasses: 'fas fa-file',
    //     path: ['/blank']
    // },
    {
        name: 'User Management',
        iconClasses: 'fas fa-users',        
        children: [
            {
                name: 'Onboard',
                iconClasses: '',
                path: ['/onboard-forms-tab']
            },
            {
                name: 'Mover',
                iconClasses: '',
                path: ['/ims-user-form']
            },
            {
                name: 'Leaver',
                iconClasses: '',
                path: ['/application-user-form']
            }
        ]
    },
    {
        name: 'Employee Management',
        iconClasses: 'fas fa-user',        
        children: [
            {
                name: 'Add Employee',
                iconClasses: '',
                path: ['/test-tab']
            },
            {
                name: 'All Employees',
                iconClasses: '',
                // path: ['']
            },
            {
                name: 'Update Employee',
                iconClasses: '',
                // path: ['']
            },
            {
                name: 'Remove Employee',
                iconClasses: '',
                // path: ['']
            }
        ]
    },
    {
        name: 'Asset Management',
        iconClasses: 'fas fa-folder',        
        children: [
            {
                name: 'Add Asset',
                iconClasses: '',
                // path: ['']
            },
            {
                name: 'All Assets',
                iconClasses: '',
                // path: ['']
            },
            {
                name: 'Update Asset',
                iconClasses: '',
                // path: ['']
            },
            {
                name: 'Remove Asset',
                iconClasses: '',
                // path: ['']
            }
        ]
    },
    {
        name: 'Product Management',
        iconClasses: 'fas fa-folder',        
        children: [
            {
                name: 'Add Product',
                iconClasses: '',
                // path: ['']
            },
            {
                name: 'All Products',
                iconClasses: '',
                // path: ['']
            }
            ,
            {
                name: 'Update Product',
                iconClasses: '',
                // path: ['']
            }
            ,
            {
                name: 'Remove Product',
                iconClasses: '',
                // path: ['']
            }
        ]
    }
];
