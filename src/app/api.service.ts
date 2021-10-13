import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  link = "http://localhost:3000/";

  constructor(private http: HttpClient ) { }

  postData(data:any) {
    return this.http.post<any>(this.link+"signup",data)
    .pipe( map((res:any)=>{
      return res;
    }) )

  }

  getData() {
    return this.http.get<any>(this.link+"signup")
    .pipe( map((res:any)=>{
      return res;
    }) )

  }

  updateData(data:any,id:number) {
    return this.http.put<any>(this.link+"signup/"+id,data)
    .pipe( map((res:any)=>{
      return res;
    }) )

  }

  deleteData(id:number) {
    return this.http.delete<any>(this.link+"signup/"+id)
    .pipe( map((res:any)=>{
      return res;
    }) )

  }


getValues(id:any){
  return this.http.get<any>(this.link+"signup/"+id)
  .pipe( map((res:any)=>{
    return res;
  }) )
}
}


