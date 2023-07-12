import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import{HttpClient, HttpResponse} from '@angular/common/http'
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  constructor(private http: HttpClient) { }

  findAll(): Observable<HttpResponse<Item[]>>{
    return this.http.get<Item[]>("this.url", { observe: 'response' });
  }



}
