import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Http } from './http.model';

@Injectable()
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  myInfo: Http | undefined;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    console.log("send get request to server")
    this.getUserInfo();
    console.log("Register as subscriber")
    this.showUserInfo();
  }
  getUserInfo(){
    return this.http.get<Http>('https://target-app-e7920-default-rtdb.firebaseio.com/My-Info.json')
  }
  showUserInfo(){
    this.getUserInfo().subscribe((data: Http)=>{
      console.log(data);
      this.myInfo = data;
    })
  }


}
