import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apiKey = "665c3eb9dbd54d9eb5bca1cef906bf5f";
  constructor(private httpClient : HttpClient) { }

  //To get news
  getNewsApiData(page : number ,query:string = 'all' ){
    const headers = new HttpHeaders({
      'X-Api-key': this.apiKey
    })
    console.log(query);
    const params = new HttpParams()
    // .set('country', 'us')
    .set('q',query )
    .set('pageSize',20)
    .set('page',page)
    
    return this.httpClient.get(`https://newsapi.org/v2/everything`, { headers , params} );
  }

  //To get filtered headlines
  getNewsHeadlines(country:string, category:string ,query:string = 'all', page : number  ){
    const headers = new HttpHeaders({
      'X-Api-key': this.apiKey
    })
    const params = new HttpParams()
    .set('country',country)
    .set('category',category) 
    .set('q',query)
    .set('pageSize',20)
    .set('page',page)
    
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines`,{ headers , params });

  }
}
