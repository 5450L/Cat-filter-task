import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  filterForm = new FormGroup({
    breeds: new FormControl(''),
    amountPhotos: new FormControl(2),
  });
  breedList: any = [];

  catPhotos: any = null;

  constructor(private dataService: DataService) {}

  onShowCats(form: FormGroup) {
    console.log(form.value);
    this.catPhotos = null;
    let breedsToShow: string[] = [];
    let amountPhotos = form.value.amountPhotos;

    form.value.breeds.forEach((breed: any) => {
      breedsToShow.push(breed.id);
    });

    console.log(breedsToShow);
    console.log(amountPhotos);
    this.catPhotos = this.dataService.fetchPhotos(amountPhotos, breedsToShow);
  }

  ngOnInit(): void {
    this.breedList = this.dataService.fetchBreeds();
  }
}
