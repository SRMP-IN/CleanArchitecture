import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let body = document.getElementsByTagName('body')[0];
    if (body.classList.contains('sidebar-icon-only')) {
      document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
        el.addEventListener('mouseover', function () {
          el.classList.add('hover-open');
        });
        el.addEventListener('mouseout', function () {
          el.classList.remove('hover-open');
        });
      });
    }

  }

  
  toggleMenu(): void {

    let body = document.getElementsByTagName('body')[0];
    // if (body.classList.contains("sidebar-icon-only"))
    //   body.classList.remove("sidebar-icon-only")
    // else
    //   body.classList.add("sidebar-icon-only")

    document.getElementsByClassName('sidebar-offcanvas')[0].classList.toggle('active');
    body.classList.toggle('sidebar-icon-only');
    if (body.classList.contains('sidebar-icon-only')) {
      document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
        el.addEventListener('mouseover', function () {
          el.classList.add('hover-open');
        });
        el.addEventListener('mouseout', function () {
          el.classList.remove('hover-open');
        });
      });
    }




  }

}
