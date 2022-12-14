import { Component, Input, OnInit } from '@angular/core';
import { TodoApiService } from '../todo-api.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public test:any = 0;
  public todos:any = []
  constructor(private apiCall:TodoApiService) { }

  public username: string = '';
  clickme() {
    let newTodo:{} = {}
    if( this.username ==='') {
      this.username = this.test
      newTodo = this.username
      this.todos.push(newTodo)
    }else {
      newTodo = this.username
      this.todos.push(newTodo)
    }
    this.username = ''
  }
  ngOnInit(): void {
    setInterval(() => {
      this.test++
    }, 1000)
    this.apiCall.getApiData().subscribe((res) => {
      this.todos = res.data
      console.log(this.todos);
      
      
    })
   
  }
  delete(i:number):void {
    console.log(i);
    let deleteResult = this.todos.filter((el:string, index:number) => i !== index)
    this.todos = deleteResult
  }
  oncheckboxChange(){

  }

}
