import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

    private url = 'https://api.pexels.com/v1/search?query=nature&per_page=30';

    private headers;

    constructor(private http: HttpClient) {
        this.headers = {
            Authorization: '563492ad6f9170000100000102443cde24b0465dbfd1386f8ed7eb6d'
        }
    }

    getPhotos() {
        return this.http.get(this.url, { headers: this.headers});
    }
}