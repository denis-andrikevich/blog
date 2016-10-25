import { ApiHttp } from './services/apiHttp.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private apiHttp: ApiHttp, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.apiHttp.onError((err) => {
      console.error('error in app')
      let url = this.router.routerState.snapshot.url;
      if (url !== '/login' && url !== '/register') {
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
      }
    });
  }
}
