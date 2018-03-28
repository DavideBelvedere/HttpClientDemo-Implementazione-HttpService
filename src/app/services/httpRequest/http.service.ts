import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { UtilityService } from '../utility.service';
import { LoginOutput } from '../../model/output/LoginOutput';

@Injectable()
export class HttpService {

  private tkn: string;
  constructor(private http: HttpClient, private utilityService: UtilityService) { }

  getAuthHeader(header: HttpHeaders){
    if(header == null || header == undefined){
      header = new HttpHeaders();
    }
    if(this.tkn){
      return header.set('Authorization', 'Bearer '+this.tkn);
    }else{
      return header;
    }
  }

  callGet(url: string, header: HttpHeaders =null, callback =null, errorCallback = null){
    this.http.get(this.utilityService.getBaseUrl()+url, { headers: this.getAuthHeader(header), observe: 'response' }).subscribe(
      response=>{
        if(response.body && response.body as LoginOutput && (response.body as LoginOutput).token){
          this.tkn = (response.body as LoginOutput).token;
        }
        if(response.headers && response.headers.get("jwt")){
          this.tkn = response.headers.get("jwt");
        }
        if(callback)
          callback(response.body);
      },
      error=>{
        if(errorCallback)
          errorCallback(error)
      }
    )
  }

  callPost(body: any, url: string, header: HttpHeaders = null, callback = null, errorCallback = null){
    this.http.post(this.utilityService.getBaseUrl()+url, body, { headers: this.getAuthHeader(header), observe: 'response' }).subscribe(
      response=>{
        if(response.headers && response.headers.get("jwt")){
          this.tkn = response.headers.get("jwt");
        }
        if(callback)
          callback(response)
      },
      error=>{
        if(errorCallback)
          errorCallback(error)
      }
    )
  }

  callPut(body: any, url: string, header: HttpHeaders = null, callback = null, errorCallback = null){
    this.http.put(this.utilityService.getBaseUrl()+url, body, { headers: this.getAuthHeader(header), observe: 'response' }).subscribe(
      response=>{
        if(response.headers && response.headers.get("jwt")){
          this.tkn = response.headers.get("jwt");
        }
        if(callback)
          callback(response)
      },
      error=>{
        if(errorCallback)
          errorCallback(error)
      }
    )
  }

  callDelete(url: string, header: HttpHeaders = null, callback = null, errorCallback = null){
    this.http.delete(this.utilityService.getBaseUrl()+url, { headers: this.getAuthHeader(header), observe: 'response' }).subscribe(
      response=>{
        if(response.headers && response.headers.get("jwt")){
          this.tkn = response.headers.get("jwt");
        }
        if(callback)
          callback(response)
      },
      error=>{
        if(errorCallback)
          errorCallback(error)
      }
    )
  }
}
