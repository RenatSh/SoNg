import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })

export interface SearchResult {
    items:           Item[];
    has_more:        boolean;
    quota_max:       number;
    quota_remaining: number;
}

export interface Item {
    tags:               string[];
    owner:              Owner;
    is_answered:        boolean;
    view_count:         number;
    answer_count:       number;
    score:              number;
    last_activity_date: number;
    creation_date:      number;
    last_edit_date?:    number;
    question_id:        number;
    link:               string;
    title:              string;
}

export interface Owner {
    reputation:    number;
    user_id:       number;
    user_type:     string;
    profile_image: string;
    display_name:  string;
    link:          string;
    accept_rate?:  number;
}

export class StackExchangeApiService {

  constructor(private http: HttpClient) { }

  searchUrl = 'https://api.stackexchange.com/2.2/search?pagesize=100&order=desc&sort=activity&intitle=';

  getSearchResults(searchQuery: string) {
      return this.http.get<SearchResult>(
        `${this.searchUrl}${searchQuery}&site=stackoverflow`);
        // ).map(data=>data.items);
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
