import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autorization',
  templateUrl: './autorization.component.html',
  styleUrls: ['./autorization.component.scss']
})

export class AutorizationComponent implements OnInit {

  autorizationForm: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10), Validators.pattern(/^[0-9]+$/)]),    
  })

  constructor(private router: Router) {
  }
  
  ngOnInit(): void {
    
  }

  log(): void {
    const dataForms = this.autorizationForm.value
    const dataLocalStorage = JSON.parse(localStorage.getItem('login')!)
    if(JSON.stringify(dataForms) === JSON.stringify(dataLocalStorage)) {
      this.router.navigate(['/main'])
      localStorage.clear()
    } else {
      alert('Пользователь не найден')
    }
    console.log(dataForms)
    console.log(dataLocalStorage)
  }

  async routerRegistrPage() {
    await this.router.navigate(['/registration'])
  }

  async homePage() {
    await this.router.navigate(['/main'])
  }
}