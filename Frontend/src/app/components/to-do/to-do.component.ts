import { Component, OnInit } from "@angular/core";
import * as data from "../../shared/data/todo/todo";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { CommonModule,  } from "@angular/common";
import { ToDoFilterComponent } from "./to-do-filter/to-do-filter.component";
import { BreadcrumbComponent } from "../../shared/components/breadcrumb/breadcrumb.component";

const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

@Component({
    selector: "app-to-do",
    templateUrl: "./to-do.component.html",
    styleUrls: ["./to-do.component.scss"],
    imports: [
        BreadcrumbComponent,
        ToDoFilterComponent,
        CommonModule,
        RouterLink,
        FormsModule,
    ]
})
export class ToDoComponent implements OnInit {
  public d = new Date();
  public myDate = `${this.d.getDate()} ${Months[this.d.getMonth() - 1]?.slice(0, 3)}`;
  public text: string = "";
  public todos = data.task;
  public completed: boolean = false;
  public red_border: boolean = false;
  public visible: boolean = false;
  public objToAdd: object = {
    text: "",
    objToAdd: "",
    Date: "",
    completed: "",
    badgeClass: "",
  };

  constructor() {}

  ngOnInit() {}

  public addTask(text: any) {
    let someData = {
      text: text,
    };
    this.todos.push(text);
  }

  public taskCompleted(task: any) {
    task.completed = !task.completed;
  }

  public taskDeleted(index: any) {
    this.todos.splice(index, 1);
  }

  public markAllAction(action: any) {
    this.todos.filter((task) => {
      task.completed = action;
    });
    this.completed = action;
  }
}
