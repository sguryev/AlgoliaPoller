import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { IAlgoliaResponse } from '../models/algolia.models';

@Injectable({
  providedIn: 'root'
})
export class AlgoliaService {

  constructor(private readonly httpClient: HttpClient) {
  }

  get(): Promise<IAlgoliaResponse> {

    return new Promise((resolve, reject) => {
      this.httpClient.get<IAlgoliaResponse>('https://hn.algolia.com/api/v1/search_by_date?tags=story')
        .subscribe(
          result => {
            resolve(result);
            return;
          },
          error => {
            console.error(error);
            reject();
            return;
          });
    });
  }

}
