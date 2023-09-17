import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Gatekeeper} from 'gatekeeper-client-sdk';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public user: any = null;
    private baseUrl = 'https://reqres.in/api/login';

    constructor(private router: Router, private toastr: ToastrService, private http: HttpClient) {}

    // async loginByAuth({email, password}) {
    //     try {
    //         const token = await Gatekeeper.loginByAuth(email, password);
    //         localStorage.setItem('token', token);
    //         await this.getProfile();
    //         this.router.navigate(['/']);
    //         this.toastr.success('Login success');
    //     } catch (error) {
    //         this.toastr.error(error.message);
    //     }
    // }

    async loginByAuth({email, password}){
        // eve.holt@reqres.in
        // cityslicka
        try{
            const response = await this.http.post(`${this.baseUrl}`, { email, password }).toPromise();
            const token = response['token'];
            localStorage.setItem('token', token);
            await this.getProfile();
            this.router.navigate(['/']);
            this.toastr.success('Login success');
        }catch (error) {
            this.toastr.error(error.message);
        }
    }

    async registerByAuth({email, password}) {
        try {
            const token = await Gatekeeper.registerByAuth(email, password);
            localStorage.setItem('token', token);
            await this.getProfile();
            this.router.navigate(['/']);
            this.toastr.success('Register success');
        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    async getProfile() {
        try {
            // this.user = await Gatekeeper.getProfile();
            this.user = 'anton';
        } catch (error) {
            this.logout();
            throw error;
        }
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('gatekeeper_token');
        this.user = null;
        this.router.navigate(['/login']);
    }
}
