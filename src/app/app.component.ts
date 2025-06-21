import { Component, OnInit, inject } from '@angular/core';
import { plantListService } from './services/plantList.service';
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
  plantListService = inject(plantListService);

  ngOnInit() {
    // this.plantList = this.plantListService.data();
    // console.log("This plantlist on load: ", this.plantList)
  }

  nextPage(): void {
    this.plantListService.setPayload(
      this.plantListService.formatPayload(this.plantListService.plantListServiceSignal().links.next)
    );
    this.plantListService.refreshData();
    // this.plantList = this.plantListService.data();
    // console.log("This plant list after next page: ", this.plantList);
  };

};