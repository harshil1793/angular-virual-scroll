import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos-list.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photos: any;

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos() {
    this.photosService.getPhotos().subscribe(
      (data: any) => this.photos = data,
      err => console.log(err)
    )
  }

}
