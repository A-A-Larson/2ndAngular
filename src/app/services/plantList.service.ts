import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {  BehaviorSubject, switchMap } from 'rxjs';
import { PlantList } from '../models/plantlist.model';
import { toSignal } from '@angular/core/rxjs-interop';

// This code defines an Angular service called plantListService that manages
// fetching and storing a list of plants from a remote API. The service is 
// decorated with @Injectable({ providedIn: 'root' }), making it available 
// application-wide as a singleton. It uses Angular's dependency injection 
// to obtain an instance of HttpClient for making HTTP requests.

@Injectable({
    providedIn: 'root'
})

export class plantListService {

    // The service constructs the API endpoint using three private 
    // properties: baseUrl, which is built from an environment variable 
    // and points to the plants endpoint; key, which appends an 
    // authentication token from the environment; and payload, which can
    // be set dynamically to add additional query parameters. The 
    // plantList property provides an initial structure for the plant 
    // data, ensuring the service always has a valid shape for its data, 
    // even before any API calls are made.

    private baseUrl: string = `${environment.apiUrl}/plants`; // Uses apiUrl from environment
    private key: string = `?token=${environment.key}`;
    private payload: string = '';
    private http = inject(HttpClient);
    private refresh$ = new BehaviorSubject<void>(undefined); // To manage data refreshes, the service uses a private BehaviorSubject called refresh$. This subject emits a value whenever data should be re-fetched from the API.
    private plantList: PlantList = {
        data: [
        {            
            id: 0,
            common_name: null,
            slug: '',
            scientific_name: '',
            year: null,
            bibliography: null,
            author: null,
            status: '',
            rank: '',
            family_common_name: null,
            family: '',
            genus_id: 0,
            genus: '',            
            image_url: '',
            links: {
                self: '',
                genus: '',
                plant: '',
            },            
            synonyms: null,
        },        
    ],
    links: {
        self: '',
        first: '',
        next: '',
        prev: '',
        last: '',
    },
    meta: {
        total: 0
      }};

    // The formatPayload method helps extract query parameters from a 
    // given string.

    formatPayload(unformattedPayload: string): string {

        const index = unformattedPayload.indexOf('?');

        if (index === -1) {
            return "Error: no '?' found in payload";
          }
          
          const formattedPayload: string = unformattedPayload.substring(index + 1);
          return formattedPayload;
        
    };

    // The setPayload allows updating the payload for future API requests

    setPayload(payload: string) {
        this.payload = "&" + payload;
    };

    // The plantListServiceObservable$ property is an Observable that 
    // listens to refresh$ and, using the switchMap operator, performs 
    // an HTTP GET request to fetch the latest plant list. This 
    // ensures that only the most recent request is processed, which 
    // is useful if refreshes happen in quick succession.

    plantListServiceObservable$ = this.refresh$.pipe(
        switchMap(() => this.http.get<PlantList>(`${this.baseUrl}${this.key}${this.payload}`))); // now uses full API URL
    
    // The service also exposes a signal, plantListServiceSignal, 
    // created from the Observable using toSignal. This allows Angular 
    // components to reactively consume the plant list data, with an 
    // initial value provided by the default plantList. 

    plantListServiceSignal = toSignal(this.plantListServiceObservable$, { initialValue: this.plantList as PlantList });

    // Finally, the refreshData method triggers a new emission on refresh$,
    // causing the service to fetch the latest data from the API. This 
    // design makes the service flexible, reactive, and easy to integrate 
    // with Angular's modern reactive features.

    refreshData() {
        this.refresh$.next();
    };
};