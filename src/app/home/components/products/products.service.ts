import { Injectable } from '@angular/core';
import { ProductListItem } from './products.type';
import { products } from './products.data';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ProductsService {
  private url = "https://dummyjson.com/products"
  private catUrl = "https://dummyjson.com/products/category/"

  constructor(private http:HttpClient) { }

  getProductList() : Observable<{products:any[],total:number,skip:number,limit:number}> {
    return this.http.get<{products:any[],total:number,skip:number,limit:number}>(this.url).pipe(
      catchError((error)=>{
        return throwError(()=>`error obteniendo los datos`)
      })
    );
  }
  getbyCat(cat:string) : Observable<{products:any[],total:number,skip:number,limit:number}> {
    const catUrl = `${this.catUrl}${cat}}`
    return this.http.get<{products:any[],total:number,skip:number,limit:number}>(catUrl).pipe(
      catchError((error)=>{
        return throwError(()=>`error obteniendo los datos`)
      })
    );
  }

}
