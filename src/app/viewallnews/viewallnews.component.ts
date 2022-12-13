import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallnews',
  templateUrl: './viewallnews.component.html',
  styleUrls: ['./viewallnews.component.css']
})
export class ViewallnewsComponent implements OnInit {

  constructor(private api:ApiService) { this.datafromapi()}

  datafromapi=()=>{
    this.api.fetchnews().subscribe(
      (Response:any)=>{
        this.news=Response.news
      }
    )
  }


  news:any=[]

  ngOnInit(): void {
  }

}
