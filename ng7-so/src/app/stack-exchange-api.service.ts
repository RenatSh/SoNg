import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StackExchangeApiService {

  constructor(private http: HttpClient) { }

  
  searchUrl: string = "https://api.stackexchange.com/2.2/search?pagesize=100&order=desc&sort=activity&intitle=";

  getSearchResults(searchQuery: string): Observable<searchResultsFromAPI[]> {
      return this.http.get<{items: any[]}>(
        `${this.searchUrl}${searchQuery}&site=stackoverflow`
        ).map(data=>data.items);
        //encodeURIComponent
  }

  /*
  

export const searchSOByUserUrl = function (userId) {
    let url = "http://api.stackexchange.com/2.2/users/"
        + userId
        + "/questions?order=desc&sort=votes&site=stackoverflow";
    return url;
}

export const searchSOByTagUrl = function (tag) {
    let url = "http://api.stackexchange.com/2.2/tags/"
        + encodeURIComponent(tag)
        + "/faq?pagesize=100&site=stackoverflow";
    return url;
}

export const getSOQuestionUrl = function (questionId) {
    let url = "http://api.stackexchange.com/2.2/questions/"
        + questionId
        + "?site=stackoverflow&filter=!9Z(-wwYGT";
    return url;
}

export const getSOAnswersUrl = function (questionId) {
    let url = "http://api.stackexchange.com/2.2/questions/"
        + questionId
        + "/answers?order=desc&sort=votes&site=stackoverflow&filter=!9Z(-wzu0T";
    return url;
}


  */
}
