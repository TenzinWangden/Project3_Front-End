import { Injectable } from '@angular/core';
import { Address } from '../models/address';
import { Warehouse } from '../models/warehouse';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  warehouses=[new Warehouse(123, "A", new Address(1234, "123 blvd", "Indianapolis", "Indiana", "47909"), "47000"),
  new Warehouse(123, "Abds", new Address(1234, "123 blvd", "Indianapolis", "Indiana", "47909"), "47000"),
  new Warehouse(123, "Asfldkjfs", new Address(1234, "123 blvd", "Indianapolis", "Indiana", "47909"), "47000"),
  new Warehouse(123, "Adfjmdsajfpeoj", new Address(1234, "123 blvd", "Indianapolis", "Indiana", "47909"), "47000")]
  // constructor() { }

  getWarehouses(){
    return this.warehouses;
  }
  constructor(private http: HttpClient) { }

  findAll(): Observable<HttpResponse<Warehouse[]>>{
    return this.http.get<Warehouse[]>("this.url", { observe: 'response' });
  }
}