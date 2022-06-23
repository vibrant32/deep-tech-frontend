import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contact } from './contactdata';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http: HttpClient) { }

  public saveContact(contact: Contact) {
    const url = 'https://deeptech-backend.herokuapp.com/api/adduser';
    return this.http.post<any>(url, contact);
  }

}
