import { SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ClickOutsideDirective } from '../../../../directive/outside.directive';
import { Menu, NavService } from '../../../../services/nav.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    imports: [FormsModule, AngularSvgIconModule, RouterLink, SlicePipe, ClickOutsideDirective]
})
export class SearchComponent implements OnInit {

  public menuItems: Menu[];
  public items: Menu[];

  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;
  public text: string;

  constructor(public navServices: NavService) {
    this.navServices.items.subscribe(menuItems => this.items = menuItems);
  }

  searchToggle() {
    this.navServices.search = false;
    document.getElementsByTagName('body')[0].classList.remove('offcanvas');
  }

  searchTerm(term: any) {
    term ? this.addFix() : this.removeFix();
    if (!term) return this.menuItems = [];
    let items: Menu[] = [];
    term = term.toLowerCase();
    this.items.filter(menuItems => {
      if (!menuItems?.title) return false
      if (menuItems.title.toLowerCase().includes(term) && menuItems.type === 'link') {
        items.push(menuItems);
      }
      if (!menuItems.children) return false
      menuItems.children.filter(subItems => {
        if (subItems.title?.toLowerCase().includes(term) && subItems.type === 'link') {
          subItems.icon = menuItems.icon
          items.push(subItems);
        }
        if (!subItems.children) return false
        subItems.children.filter(suSubItems => {
          if (suSubItems.title?.toLowerCase().includes(term)) {
            suSubItems.icon = menuItems.icon
            items.push(suSubItems);
          }
        })
        return
      })
      this.checkSearchResultEmpty(items)
      this.menuItems = items
      return
    }
    );
    return
  }

  checkSearchResultEmpty(items: any) {
    if (!items.length)
      this.searchResultEmpty = true;
    else
      this.searchResultEmpty = false;
  }

  clickOutside(): void {
    this.text = "";
    this.searchResult = false;
    this.searchResultEmpty = false;
    document.body.classList.remove("offcanvas");
  }

  addFix() {
    this.searchResult = true;
    document.body.classList.add('offcanvas')
  }

  removeFix() {
    this.searchResult = false;
    document.body.classList.remove('offcanvas')
    this.text = "";
  }

  ngOnInit() {
  }

}
