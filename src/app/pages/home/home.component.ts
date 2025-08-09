import { Component, inject } from '@angular/core';
import { plantListService } from '../../services/plantList.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SearchComponent } from '../components/search/search.component';
import { MPaginationComponent } from '../components/m-pagination/m-pagination.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, NgOptimizedImage, SearchComponent, MPaginationComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  title = 'Plant App';  
  plantListService = inject(plantListService);

  filteredPlantList: any[] = [];

  ngOnInit() {
    const plantList = this.plantListService.plantListServiceSignal();
    this.filteredPlantList = plantList?.data ?? [];
  }  
  
  onFilter(text: string) {
    const allPlants = this.plantListService.plantListServiceSignal().data;
    if (!text) {
      this.filteredPlantList = allPlants;
      return;
    }
    this.filteredPlantList = allPlants.filter(
      plant => (plant?.common_name ?? '').toLowerCase().includes(text.toLowerCase())
    );
  }

  onPageChange(link: string) {
  this.plantListService.setPayload(
    this.plantListService.formatPayload(link)
  );
  this.plantListService.refreshData();
  this.filteredPlantList = this.plantListService.plantListServiceSignal()?.data ?? [];
  }

  nextPage(): void {
    const nextLink = this.plantListService.plantListServiceSignal()?.links.next;
    if (nextLink) {
      this.plantListService.setPayload(
        this.plantListService.formatPayload(nextLink)
      );
    };    
    this.plantListService.refreshData();
    this.filteredPlantList = this.plantListService.plantListServiceSignal()?.data ?? [];
  }  
}
