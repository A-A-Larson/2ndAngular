import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {  BehaviorSubject, switchMap } from 'rxjs';
import { PlantList } from '../models/plantlist.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    private baseUrl: string = `${environment.apiUrl}/plants`; // Uses apiUrl from environment
    private key: string = `?token=${environment.key}`;
    private payload: string = '';
    private http = inject(HttpClient);
    private refresh$ = new BehaviorSubject<void>(undefined);
    private plantList: PlantList = {data: [
        {            
            id: null,
            common_name: null,
            slug: null,
            scientific_name: null,
            year: null,
            bibliography: null,
            author: null,
            status: null,
            rank: null,
            family_common_name: null,
            family: null,
            genus: null,
            genus_id: null,
            image_url: '',
            links: {
                genus: null,
                plant: null,
                self: null
            },
            plant_id: null,
            synonyms: [],
        },        
    ],
    links: {
        first: '',
        last: '',
        next: '',
        self: ''
    },
    meta: {
        total: 0
      }};

    formatPayload(unformattedPayload: string): string {

        const index = unformattedPayload.indexOf('?');

        if (index === -1) {
            return "Error: no '?' found in payload";
          }
          
          const formattedPayload: string = unformattedPayload.substring(index + 1);
          return formattedPayload;
        
    };

    setPayload(payload: string) {
        this.payload = "&" + payload;
    };

    data$ = this.refresh$.pipe(
        switchMap(() => this.http.get<PlantList>(`${this.baseUrl}${this.key}${this.payload}`))); // now uses full API URL
    
    data = toSignal(this.data$, { initialValue: this.plantList as PlantList });

    refreshData() {
        this.refresh$.next();
    };
};