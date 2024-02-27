import {
  Component,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SortOrder } from 'src/app/models/sort-order.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  readonly query = input('');
  readonly order = input<SortOrder>('asc');

  @Output() readonly queryChange = new EventEmitter<string>();
  @Output() readonly orderChange = new EventEmitter<SortOrder>();

  onQueryChange(query: string) {
    this.queryChange.emit(query.trim().toLowerCase());
  }

}
