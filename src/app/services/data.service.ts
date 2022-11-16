import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  fetchBreeds() {
    return this.http.get('https://api.thecatapi.com/v1/breeds').pipe(
      map((breedsInfo: any) => {
        let necessaryInfo: any[] = [];
        breedsInfo.forEach((breed: any) => {
          necessaryInfo.push({ name: breed.name, id: breed.id });
        });
        return necessaryInfo;
      })
    );
  }

  fetchPhotos(amountPhotos: number, breedsToShow: string[]) {
    return this.http.get(
      `https://api.thecatapi.com/v1/images/search?limit=${amountPhotos}&breed_ids=${breedsToShow}`
    );
  }
}
