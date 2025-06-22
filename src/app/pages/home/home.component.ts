import { Component, inject } from '@angular/core';
import { plantListService } from '../../services/plantList.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SearchComponent } from '../components/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, NgOptimizedImage, SearchComponent, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  title = 'Plant App';  
  plantListService = inject(plantListService);

  filteredPlantList: any[] = [];

  ngOnInit() {
    this.filteredPlantList = this.plantListService.plantListServiceSignal().data;
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

  nextPage(): void {
    this.plantListService.setPayload(
      this.plantListService.formatPayload(this.plantListService.plantListServiceSignal().links.next)
    );
    this.plantListService.refreshData();
    this.filteredPlantList = this.plantListService.plantListServiceSignal().data;
  };  
}
