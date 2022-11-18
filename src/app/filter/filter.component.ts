import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { CatFilterState } from '../store/reducers/cat-filter.reducer';
import * as CatFilterActions from '../store/actions/cat-filter.actions';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  filterForm = new FormGroup({
    breeds: new FormControl(''),
    amountPhotos: new FormControl(10),
  });

  breedList = [{ name: '', id: '' }];

  catPhotos: any = null;

  constructor(
    private dataService: DataService,
    private store: Store<{ catFilter: CatFilterState }>
  ) {}

  onShowCats(form: FormGroup) {
    this.catPhotos = null;
    let breedsToShow: string[] = [];
    let amountPhotos = form.value.amountPhotos;

    if (form.value.breeds) {
      form.value.breeds.forEach((breed: any) => {
        breedsToShow.push(breed.id);
      });
    }

    this.subscriptions.push(
      this.dataService
        .fetchPhotos(amountPhotos, breedsToShow)
        .subscribe((photos) => {
          this.store.dispatch(new CatFilterActions.FetchPhotos(photos));
        })
    );

    this.subscriptions.push(
      this.store.select('catFilter').subscribe((storeData) => {
        this.catPhotos = storeData.photos;
      })
    );

  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.dataService.fetchBreeds().subscribe((breeds) => {
        this.store.dispatch(new CatFilterActions.FetchBreeds(breeds));
      })
    );

    this.subscriptions.push(
      this.store.select('catFilter').subscribe((storeData) => {
        this.breedList = storeData.breeds;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
