import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { IHit } from '../../models/algolia.models';

@Component({
  selector: 'app-hit-modal-content',
  templateUrl: './hit-modal-content.component.html'
})
export class HitModalContentComponent {

  @Input() hit: IHit;

  constructor(
    readonly activeModal: NgbActiveModal) {
  }

  getRawJson(): string {
    return JSON.stringify(this.hit, null, 4);
  }
}
