import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PlantLinks } from '../../../models/plantlist.model';

@Component({
  selector: 'app-m-pagination',
  standalone: true,
  imports: [],
  templateUrl: './m-pagination.component.html',
  styleUrl: './m-pagination.component.scss'
})
export class MPaginationComponent {
  @Input() links: PlantLinks | null = null;
  @Output() pageChange = new EventEmitter<string>();

  goTo(link: string | null | undefined) {
    if (link) {
      this.pageChange.emit(link);
    }
  }
}
