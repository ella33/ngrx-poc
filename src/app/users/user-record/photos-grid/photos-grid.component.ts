import { Component, Input } from '@angular/core';
import { IPhoto } from '@app/core/types/photos.types';

@Component({
  selector: 'app-photos-grid',
  templateUrl: './photos-grid.component.html',
  styleUrls: ['./photos-grid.component.scss']
})
export class PhotosGridComponent {
  @Input() photos: IPhoto[];

  trackPhotoById(index: number, item: IPhoto): string {
    return item.id.toString();
  }
}
