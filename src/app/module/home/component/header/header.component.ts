import { Component, OnInit } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { filter, mapTo, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isLoading!: Observable<boolean>;
  private showLoader!: Observable<boolean>;
  private hideLoader!: Observable<boolean>;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.showLoader = this.router.events
      .pipe(filter((e) => e instanceof ResolveStart), mapTo(true));
    this.hideLoader = this.router.events.pipe(filter((e) => e instanceof ResolveEnd), mapTo(false));

    this.isLoading = merge(this.hideLoader, this.showLoader);
  }

}
