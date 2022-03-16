import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = "http://localhost:8081";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(`${baseUrl}/user/read`);
  }

  getAllTasks(data: any) {
    return this.http.get(`${baseUrl}/tasks/read`, data);
  }

  getAllPosts(data: any) {
    return this.http.get(`${baseUrl}/post/read`, data);
  }

  createUser(data: any) {
    return this.http.post(`${baseUrl}/user/read`, data);
  }
  
  createTask(data: any) {
    return this.http.post(`${baseUrl}/task/read`, data);
  }
  
  createPost(data: any) {
    return this.http.post(`${baseUrl}/post/read`, data);
  }

  deleteUser(data: any) {
    return this.http.delete(`${baseUrl}/post/read`, data);
  }

  markTask(data: any) {
    return this.http.put(`${baseUrl}/task/mark`, data);
  }

  editUser(data: any) {
    return this.http.put(`${baseUrl}/user/edit`, data);
  }
}
