import { Component } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import {  MatIconRegistry } from '@angular/material' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  


constructor(

private domSanitizer: DomSanitizer,
private matIconRegistry: MatIconRegistry)
{
this.configureCustomSVGIconPaths()
  }
  private 
  configureCustomSVGIconPaths() {
  
  const 
  arr = [
  'Cloud-Drizzle',
  'Cloud-Fog',
  'Cloud-Hail',
  'Cloud-Moon',
  'Cloud-Snow_Alt',
  'Cloud-Sun',
  'Cloud',
  'Moon',
  'Sun',
  'Wind'
  ]
  
  arr.forEach(iconName => {this.matIconRegistry.addSvgIcon(
  iconName,
  this.domSanitizer.bypassSecurityTrustResourceUrl(
  `assets/Icons/${iconName}.svg`
  
  )
  
  )
  
  })
  
}}

