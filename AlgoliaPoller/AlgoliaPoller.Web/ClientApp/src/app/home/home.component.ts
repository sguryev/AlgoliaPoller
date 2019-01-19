import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AlgoliaService } from '../services/algolia.service';
import { IHit } from '../models/algolia.models';
import { HitModalContentComponent } from './hit-modal-content/hit-modal-content.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  hits: IHit[] = [];

  constructor(
    private readonly modalService: NgbModal,
    private readonly algoliaService: AlgoliaService) {
  }

  ngOnInit() {
    this.algoliaService.get()
      .then(response => {
        this.hits = response.hits;
      });
  }

  open(hit: IHit) {
    const modalRef = this.modalService.open(HitModalContentComponent, { centered: true });
    modalRef.componentInstance.hit = hit;
  }
}
