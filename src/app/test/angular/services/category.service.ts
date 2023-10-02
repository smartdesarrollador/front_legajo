import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  url = environment.apiUrl;

  selectCategory: Category = new Category();

  reqHeader = new HttpHeaders({
    'Content-Type': 'aplication/json',
  });

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category> {
    return this.http.get(this.url);
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post(this.url, category, { headers: this.reqHeader });
  }

  updateCategory(id: number, category: Category) {
    return this.http.put(this.url + '/' + id + '/', category, {
      headers: this.reqHeader,
    });
  }

  deleteCategory(id: number) {
    return this.http.delete(this.url + '/' + id + '/');
  }
}
