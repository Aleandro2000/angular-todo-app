import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = "http://localhost:8081";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(`${baseUrl}/user/read`);
  }

  getAllTasks(data: any) {
    return this.http.post(`${baseUrl}/task/read`, data);
  }

  getAllPosts(data: any) {
    return this.http.post(`${baseUrl}/post/read`, data);
  }

  createUser(data: any) {
    return this.http.post(`${baseUrl}/user/create`, data);
  }
  
  createTask(data: any) {
    return this.http.post(`${baseUrl}/task/create`, data);
  }
  
  createPost(data: any) {
    return this.http.post(`${baseUrl}/post/create`, data);
  }

  deleteUser(data: any) {
    return this.http.post(`${baseUrl}/user/delete`, data);
  }

  markTask(data: any) {
    return this.http.post(`${baseUrl}/task/mark`, data);
  }

  editUser(data: any) {
    return this.http.post(`${baseUrl}/user/edit`, data);
  }
}
