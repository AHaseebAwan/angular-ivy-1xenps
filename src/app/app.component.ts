import { ChangeDetectionStrategy, Component, VERSION } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  select = new FormControl('Option A');

  selectedOption$ = this.select.valueChanges.pipe(
    startWith(['Option A']),
    map((v) => v)
  );
}
