import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable()
export class ProveedorService {
   constructor(
      private http: HttpClient
      ){
   }
}
