import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable()
export class VentaService {
   constructor(
      private http: HttpClient
      ){
   }
}
