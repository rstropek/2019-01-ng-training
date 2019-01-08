import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPerson, ITodoItem } from '../interfaces';
import { environment } from 'src/environments/environment';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  public async getPeople(): Promise<IPerson[]> {
    return this.http.get<IPerson[]>(environment.baseUrl + '/people').toPromise();
  }

  public async getTodos(): Promise<ITodoItem[]> {
    return this.http.get<ITodoItem[]>(environment.baseUrl + '/todos').toPromise();
  }

  public async getTodo(id: number): Promise<ITodoItem> {
    return this.http.get<ITodoItem>(environment.baseUrl + '/todos/' + id).toPromise();
  }

  public async addTodoItem(item: ITodoItem): Promise<ITodoItem> {
    return this.http.post<ITodoItem>(environment.baseUrl + '/todos', item).toPromise();
  }

  public async updateTodoItem(item: ITodoItem): Promise<ITodoItem> {
    return this.http.patch<ITodoItem>(environment.baseUrl + '/todos/' + item.id, item).toPromise();
  }

  public async deleteTodoItem(id: number): Promise<any> {
    return this.http.delete(environment.baseUrl + '/todos/' + id).toPromise();
  }

}
