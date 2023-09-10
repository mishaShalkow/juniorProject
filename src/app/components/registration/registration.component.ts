import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {

  formRegistration: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10), Validators.pattern(/^[0-9]+$/)]),    
  })

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  saveData() {
    if(this.formRegistration.valid) {
      const formData = this.formRegistration.value
      localStorage.setItem('login', JSON.stringify(formData))
    } 
  }

  async routerPage() {
    await this.router.navigate(['/autorization'])
  }

  submitForm() {
    this.router.navigate(['/autorization'])
  }
}
