import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';
import { provideHttpClient } from '@angular/common/http';




export const appConfig: ApplicationConfig = {

 providers: [

 provideRouter(routes),

 provideHttpClient(),

 provideAuth0({

 domain: 'dev-6jqjc8tqco8ywqrn.us.auth0.com',

 clientId: 'yuRPTwY1iCnDC2am4vDb8cLsNokvj4kM',

 authorizationParams: {

 redirect_uri: window.location.origin,

 },

 }),

 ],

};

