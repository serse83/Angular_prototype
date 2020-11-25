import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service'
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  fileToUpload: File = null;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

  constructor() { }

  ngOnInit() {
    
  }
  uploadFileToActivity() {
    //this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
      //}, error => {
      //  console.log(error);
     // });

     console.log(localStorage)
  }

}
