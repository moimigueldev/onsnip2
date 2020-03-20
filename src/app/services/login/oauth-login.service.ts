import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OauthLoginService {

  constructor(
    private http: HttpClient
  ) {

  }


  fetchUser() {

    // const httpOptions = {
    //   constheaders: new HttpHeaders({
    //     'Content-Type': 'text/html',
    //     // 'Authorization': 'my-auth-token'
    //     'Access-Control-Allow-Origin': '*'
    //   })
    // };

    const headers = new HttpHeaders({ "Access-Control-Allow-Origin": "*" });


    return this.http.get('https://accounts.spotify.com/authorize?client_id=c593349cdedd4cc5883b81baf1f76345&redirect_uri=http://localhost:4200/dashboard&scope=user-read-private%20user-read-email&response_type=token', { headers: headers, responseType: 'text' })
      .subscribe((res) => {
        console.log('the subscriptikon', res)
      })
  }

}
