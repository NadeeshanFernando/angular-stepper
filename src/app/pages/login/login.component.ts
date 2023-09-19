import {
    Component,
    OnInit,
    OnDestroy,
    Renderer2,
    HostBinding
} from '@angular/core';
import {UntypedFormGroup, UntypedFormControl, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AppService} from '@services/app.service';
import { tap } from 'rxjs';
import { User } from '@/module/user';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    @HostBinding('class') class = 'login-box';
    public loginForm: UntypedFormGroup;
    public isAuthLoading = false;
    user: User = new User();

    constructor(
        private renderer: Renderer2,
        private toastr: ToastrService,
        private appService: AppService
        
    ) {}

    ngOnInit() {
        this.user.email='eve.holt@reqres.in';
        this.user.password='cityslicka'
        this.renderer.addClass(
            document.querySelector('app-root'),
            'login-page'
        );
        this.loginForm = new UntypedFormGroup({
            email: new UntypedFormControl(null, Validators.required),
            password: new UntypedFormControl(null, Validators.required)
        });
    }

    // async loginByAuth() {
    //     if (this.loginForm.valid) {
    //         this.isAuthLoading = true;
    //         await this.appService.loginByAuth(this.loginForm.value);
    //         this.isAuthLoading = false;
    //     } else {
    //         this.toastr.error('Form is not valid!');
    //     }
    // }

    async login(){
        if (this.loginForm.valid) {
            this.isAuthLoading = true;
            await this.appService.login(this.user);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Welcome Back!',
              })
            this.isAuthLoading = false;
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Form is not valid!',
              })
            // this.toastr.error('Form is not valid!');
        }
    }

    // async loginByAuth() {
    //     if (this.loginForm.valid) {
    //         this.isAuthLoading = true;
    //         this.appService.login(this.loginForm.value);
    //         this.isAuthLoading = false;
    //     } else {
    //         this.toastr.error('Form is not valid!');
    //     }
    // }

    // ngOnDestroy() {
    //     this.renderer.removeClass(
    //         document.querySelector('app-root'),
    //         'login-page'
    //     );
    // }
}
