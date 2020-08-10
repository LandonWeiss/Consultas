import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable()
export class ProductoService {
   constructor(
      private http: HttpClient
      ){
   }
}
