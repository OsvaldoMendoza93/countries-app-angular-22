import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'country-menu',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './country-menu.html',
  styleUrl: './country-menu.css',
})
export class CountryMenu { }
