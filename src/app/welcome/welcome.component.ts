import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public todos:any = []
  constructor() { }


  public username: string = '';
  clickme() {
    let newTodo:string = this.username
    this.todos.push(newTodo)
    console.log(this.todos);
    this.username = ''
  }
  ngOnInit(): void {
  }
  delete(i:number):void {
    console.log(i);
    let deleteResult = this.todos.filter((el:string, index:number) => i !== index)
    this.todos = deleteResult
  }

}
