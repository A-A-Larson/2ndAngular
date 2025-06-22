import { Component, inject, EventEmitter, Output } from '@angular/core';
import { PlantList } from '../../../models/plantlist.model';
import { plantListService } from '../../../services/plantList.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})

export class SearchComponent {
  
  filteredPlantList: PlantList['data'][number][];
  plantListService = inject(plantListService);

  constructor() {
    this.filteredPlantList = this.plantListService.plantListServiceSignal().data;
    this.filteredPlantList = this.filteredPlantList;
  }

  @Output() filter = new EventEmitter<string>();

  onFilter(text: string) {
    this.filter.emit(text);
  }

  filterResults(text: string) {
  if (!text) {
    this.filteredPlantList = this.plantListService.plantListServiceSignal().data;
    return;
  }
    
  this.filteredPlantList = this.plantListService.plantListServiceSignal().data.filter(
  plant => (plant?.common_name ?? '').toLowerCase().includes(text.toLowerCase())
);

}
}
