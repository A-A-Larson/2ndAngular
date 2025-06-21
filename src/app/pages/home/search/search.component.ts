import { Component, inject } from '@angular/core';
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
  filteredPlantList: PlantList['data'];
  plantListService = inject(plantListService);

  constructor() {
    this.filteredPlantList = this.plantListService.plantListServiceSignal().data;
    this.filteredPlantList = this.filteredPlantList;
  }

}
