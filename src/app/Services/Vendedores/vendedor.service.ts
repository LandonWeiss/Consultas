import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable()
export class VendedorService {
   constructor(
      private http: HttpClient
      ){
   }
}
