import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ITodoItem, IPerson } from '../interfaces';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public people: IPerson[];
  private todos: ITodoItem[];

  public isLoading: boolean;

  public filteredTodos: ITodoItem[];

  public newItemDescription: string;
  public newItemAssignedTo: string;

  set filterString(value: string) {
    if (value) {
      const matchString = value.toLowerCase();
      this.filteredTodos = this.todos.filter(t => (t.description.toLowerCase().indexOf(matchString) >= 0) ||
        (t.assignedTo ? t.assignedTo.toLowerCase().indexOf(matchString) >= 0 : false));
    } else {
      this.filteredTodos = this.todos;
    }
  }

  get progress(): number {
    const done = this.filteredTodos.filter(t => t.done === true).length;
    const todos = this.filteredTodos.length;

    return done / todos * 100;
  }

  constructor(private todoService: TodoService) {
  }

  async ngOnInit() {
    this.isLoading = true;

    try {
      this.people = await this.todoService.getPeople();

      await this.loadTodos();

    } catch (e) {
      console.error(e);
    }
    finally {
      this.isLoading = false;
    }
    // const newItem = await this.todoService.addTodoItem({ assignedTo: 'Adam', description: 'Lunch break ;)' });
  }

  private async loadTodos() {
    try {
      this.todos = (await this.todoService.getTodos())
        .map(t => <ITodoItem>{ ...t, finishPercentage: Math.random() * 100 });
      this.filterString = '';
    } catch (e) {
      console.error(e);
    }
    finally {
      this.isLoading = false;
    }
  }

  async removeItem(id: number) {
    // TODO: do you really want to???
    await this.todoService.deleteTodoItem(id);

    await this.loadTodos();
  }

  async toggleState(item: ITodoItem) {
    item.done = !item.done;

    await this.todoService.updateTodoItem(item);
    await this.loadTodos();
  }

  async updateItem(item: ITodoItem) {
    await this.todoService.updateTodoItem(item);
    await this.loadTodos();
  }

  async createTodo() {
    await this.todoService.addTodoItem(
      {
        description: this.newItemDescription,
        assignedTo: this.newItemAssignedTo
      }
    );

    this.newItemDescription = '';
    this.newItemAssignedTo = '';

    await this.loadTodos();
  }
}
