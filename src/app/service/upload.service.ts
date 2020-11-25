import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private httpClient: HttpClient) { }

//  postFile(fileToUpload: File): Observable<boolean> {
    //const endpoint = '';
   // const formData: FormData = new FormData();
   // formData.append('fileKey', fileToUpload, fileToUpload.name);
    //return this.httpClient
//      .post(endpoint, formData, { headers: 'dn' })
  ////  .catch((e) => this.handleError(e));
//}
}
