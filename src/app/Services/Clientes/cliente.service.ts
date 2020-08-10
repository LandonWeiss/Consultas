import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable()
export class ClienteService {
   constructor(
      private http: HttpClient
      ){
   }
}
