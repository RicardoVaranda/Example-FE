import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent implements OnInit {
  title = 'demo-ui';

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.service
      .getInfo()
      .pipe(
        map((res) => {
          this.title = res.title;
        })
      )
      .subscribe();
  }
}
