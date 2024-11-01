import { Observable } from '@nativescript/core';
import { restaurants, Restaurant } from '../models/restaurant';

export class HomeViewModel extends Observable {
    private _restaurants: Restaurant[];
    private _selectedCuisine: string = 'All';

    constructor() {
        super();
        this._restaurants = restaurants;
    }

    get restaurants(): Restaurant[] {
        if (this._selectedCuisine === 'All') {
            return this._restaurants;
        }
        return this._restaurants.filter(r => r.cuisine === this._selectedCuisine);
    }

    get cuisines(): string[] {
        return ['All', ...new Set(this._restaurants.map(r => r.cuisine))];
    }

    filterByCuisine(cuisine: string) {
        this._selectedCuisine = cuisine;
        this.notifyPropertyChange('restaurants', this.restaurants);
    }
}