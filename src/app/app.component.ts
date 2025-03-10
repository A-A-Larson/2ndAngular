import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from './services/plantList.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  
  title = '2ndAngular';  
  apiService = inject(ApiService);
//   plantList: PlantList = {data: [
//     {
//         author: '',
//         bibliography: '',
//         common_name: null,
//         family: '',
//         family_common_name: null,
//         genus: '',
//         genus_id: 0,
//         id: 0,
//         links: {
//             genus: '',
//             plant: '',
//             self: ''
//         },
//         plant_id: 0,
//         rank: '',
//         scientific_name: '',
//         slug: '',
//         status: '',
//         synonyms: [],
//         year: 0
//     },        
// ],
// links: {
//     first: '',
//     last: '',
//     next: '',
//     self: ''
// },
// meta: {
//     total: 0
//   }};

  ngOnInit() {
    // this.plantList = this.apiService.data();
    // console.log("This plantlist on load: ", this.plantList)
  }

  nextPage(): void {
    this.apiService.setPayload(
      this.apiService.formatPayload(this.apiService.data().links.next)
    );
    this.apiService.refreshData();
    // this.plantList = this.apiService.data();
    // console.log("This plant list after next page: ", this.plantList);
  };

};