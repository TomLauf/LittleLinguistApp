import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'littlelinguistapp',
        appId: '1:998818582528:web:aa405a9bc0a1b9ce3308e5',
        storageBucket: 'littlelinguistapp.appspot.com',
        apiKey: 'AIzaSyDK_UHy2y8u4A6oFPG6pDe3WYTUmQg12Kw',
        authDomain: 'littlelinguistapp.firebaseapp.com',
        messagingSenderId: '998818582528',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
