import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyInjectabelService {
    constructor(public http: HttpClient) {
    }
    postData(data) {
        return new Promise((resolve, reject) => {
            this.http.post('https://jsonplaceholder.typicode.com/posts', data)
                .subscribe(
                    (response) => {
                        resolve(response);
                    },
                    (error) => {
                        this.handelReject(error);
                        reject(error);

                    },
                    () => {
                        console.log('comple');
                    });
        });
    }
    handelReject(err) {
        alert('this is error');
    }
}
