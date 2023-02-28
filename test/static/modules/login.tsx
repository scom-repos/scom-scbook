import {customElements, Control, Module} from '@ijstech/components';
import  './login.css';

const googleKey = '614435015447-90u2398dllljsvfpnab80kjb2qf0q8k0.apps.googleusercontent.com';

//github Client Id
const clientID = '601f68543b5cd9c30d1d';
var $ = require('jQuery');
@customElements('i-login-module')
export class LoginModule extends Module{        
    constructor(parent?: Control, options?: any) {        
        super(parent, options, {
            width: 800,
            height: 420,
        });   
    }
    loginAccount(){
        // console.log('login account');
    }
    init(){
        //add title 
        let title = this.createElement('div', this);
        title.classList.add('title');
        title.innerHTML = 'Log in';

        //login google
        let meta = this.createElement('meta', this);
        meta.setAttribute('name', 'google-signin-client_id');
        meta.setAttribute('content', googleKey);
        let google = this.createElement('div', this);
        google.setAttribute('data-onsuccess', 'onSignIn');
        google.setAttribute('data-theme', 'dark');
        google.setAttribute('data-context', 'Log in with Google');
        // google.setAttribute('data-login_uri', 'http://localhost:8070/modules/login.html');
        google.setAttribute('data-auto_prompt', 'false');
        google.classList.add('g-signin2');

        //login github
        let warpperGithub = this.createElement('div', this);
        let gitHub = this.createElement('a', warpperGithub); 
        gitHub.setAttribute('href', 'https://github.com/login/oauth/authorize?client_id=' + clientID);
        warpperGithub.classList.add('git-hub');
        
        // let svg = this.createElement('svg', gitHub);
        // svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        // svg.setAttribute('viewBox', '0 0 24 24');
        // svg.setAttribute('height', '24px');
        // svg.setAttribute('width', '24px');
        // svg.classList.add('text-white');
        // let path = this.createElement('path', svg);
        // path.setAttribute('fill', '#fff');
        // path.setAttribute('d', 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12');
        
        let svgHtml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="text-white" height="24px" width="24px" data-v-413ff555=""><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>`
        $('.git-hub a').append(svgHtml);
        let warpperGithub2 = this.createElement('div', gitHub); 
        warpperGithub2.innerHTML = 'Login with Github';
        
        //login account
        let form = this.createElement('form', this);
        let label1 = this.createElement('label', form);
        let wrapperDiv1 = this.createElement('div', label1);
        wrapperDiv1.innerHTML = 'Email (or username)';
        let input1 = this.createElement('input', label1);
        input1.setAttribute('type', 'text');
        input1.setAttribute('placeholder', 'Email (or username)');
        input1.setAttribute('autocomplete', 'email');
        
        let label2 = this.createElement('label', form);
        let wrapperDiv2 = this.createElement('div', label2);
        wrapperDiv2.innerHTML = 'Password';
        let input2 = this.createElement('input', label2);
        input2.setAttribute('type', 'password');
        input2.setAttribute('placeholder', 'Password');
        input2.setAttribute('autocomplete', 'current-password');

        let wrapperDiv3 = this.createElement('div', form);
        let forgotPs = this.createElement('a', wrapperDiv3);
        forgotPs.setAttribute('href', '#');
        forgotPs.innerHTML = 'Forgot password?';

        let wrapperDiv4 = this.createElement('div', form);
        let button = this.createElement('button', wrapperDiv4);
        button.addEventListener("click", (e) => {
            e.preventDefault();
            this.loginAccount();
        });
        button.innerHTML = 'Log In';
        super.init();
    }  
}
