import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  apiUrl:string="https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/"

  constructor(private http:HttpClient) { }

  getVideo(){
    return this.http.get(this.apiUrl+"videos.json")
  }
}
