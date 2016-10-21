import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { ErrorNotifier } from './services/error-notifier.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private errorNotifier: ErrorNotifier, private router: Router, private authService: AuthService) { }

  ngOnInit(){
    this.errorNotifier.onError((err) => {
      console.log('ERROR NOTIFIER:');
      console.log(err);
      
      let url = this.router.routerState.snapshot.url;
      if (url != '/login' && url != '/register'){
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
      }
    })
  }
}
