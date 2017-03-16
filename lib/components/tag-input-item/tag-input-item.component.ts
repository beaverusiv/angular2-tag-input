import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'rl-tag-input-item',
  template: `
    {{text}}
    <span
    class="ng2-tag-input-remove"
    (click)="removeTag()">&times;</span>
  `,
  styles: [`
    :host {
      height: 32px;
      line-height: 32px;
      display: inline-block;
      padding: 0 12px;
      border-radius: 90px;
      margin-right: 10px;
    }
    
    :host.ng2-tag-input-item-selected {
      background: #0d8bff;
    }

     :host .ng2-tag-input-remove {
      border-radius: 50%;
      cursor: pointer;
      display: inline-block;
      height: 24px;
      line-height: 24px;
      margin-left: 6px;
      margin-right: -6px;
      text-align: center;
      width: 24px;
    }
  `]
})
export class TagInputItemComponent {
  @Input() selected: boolean;
  @Input() text: string;
  @Input() index: number;
  @Output() tagRemoved: EventEmitter<number> = new EventEmitter<number>();
  @HostBinding('class.ng2-tag-input-item-selected') get isSelected() { return !!this.selected; }

  constructor() { }

  removeTag(): void {
    this.tagRemoved.emit(this.index);
  }
}
