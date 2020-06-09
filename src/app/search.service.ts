import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, observable, of, empty } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public baseUrl = "http://www.omdbapi.com/?apikey=f79aeba3&";
  public searchResults: any;

  constructor(private httpClient: HttpClient) { }


  //makes the HTTP request to get the resources and returns the response as observable;  
  public searchEntries(term): Observable<any>{
    if (term === "" ){
      console.log("Not defined");
      return of(null);
      //return empty();
    }else{
      let params = {s: term }
      return this.httpClient.get(this.baseUrl, {params}).pipe(
        map(response => {
          console.log(response)
          return this.searchResults = response["Search"];
        })
      );
    }
    
  }

  //returns the response for the first method
  public _searchEntries(term){
    return this.searchEntries(term);
  }
}
