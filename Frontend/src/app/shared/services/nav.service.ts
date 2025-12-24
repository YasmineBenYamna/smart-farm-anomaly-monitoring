import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, fromEvent, Subject } from "rxjs";
import { takeUntil, debounceTime } from "rxjs/operators";
import { AuthService } from "../../services/auth.service";
import { FarmService, Farm } from "../../services/farm.service";

export interface Menu {
  headTitle1?: string;
  headTitle2?: string;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  children?: Menu[];
  roles?: string[];
  queryParams?: any; 
}

@Injectable({
  providedIn: "root",
})
export class NavService {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

  public search: boolean = false;
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;
  public horizontal: boolean = window.innerWidth < 991 ? false : true;
  public fullScreen: boolean = false;

  constructor(
    private router: Router, 
    private authService: AuthService,
    private farmService: FarmService
  ) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, "resize")
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
        }
      });
    
    if (window.innerWidth < 991) {
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
      });
    }
    
    this.initializeMenu();
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  private originalMenuItems: Menu[] = [
    { 
      path: "/sample-page", 
      title: "Home", 
      icon: "home", 
      type: "link" 
    },
    { 
      path: "/project/project-list", 
      title: "My Plots", 
      icon: "grid", 
      type: "link", 
      roles: ["farmer"]  
    },
  ];

  items = new BehaviorSubject<Menu[]>(this.originalMenuItems);

  private initializeMenu(): void {
  const role = this.authService.getRole();
  console.log('🔍 DEBUG - User role:', role);  // ✅ ADD THIS
  
  if (role === 'admin') {
    console.log('🔍 DEBUG - Loading farms for admin');  // ✅ ADD THIS
    this.farmService.getAllFarms().subscribe({
      next: (farms: Farm[]) => {
        console.log('🔍 DEBUG - Farms loaded:', farms);  // ✅ ADD THIS
        const farmMenuItems: Menu[] = farms.map(farm => ({
          path: "/project/project-list",
          title: farm.farm_name,
          icon: "users",
          type: "link",
          roles: ["admin"],
          queryParams: { farm: farm.id }
        }));

        const fullMenu = [...this.originalMenuItems, ...farmMenuItems];
        this.setMenuItems(role, fullMenu);
      },
      error: (err) => {
        console.error('Failed to load farms', err);
        this.setMenuItems(role, this.originalMenuItems);
      }
    });
  } else {
    console.log('🔍 DEBUG - Using base menu for farmer');  // ✅ ADD THIS
    this.setMenuItems(role || 'farmer', this.originalMenuItems);
  }
}

  public setMenuItems(userRole?: string, menuItems?: Menu[]): void {
    const currentRole = (userRole || this.authService.getRole() || 'farmer') as string;
    const itemsToFilter = menuItems || this.originalMenuItems;

    const filteredItems = this.filterMenuByRoles(itemsToFilter, currentRole);
    this.items.next(filteredItems);
  }

  private filterMenuByRoles(items: Menu[], userRole: string): Menu[] {
    return items.filter(item => {
      if (item.children) {
        item.children = this.filterMenuByRoles(item.children, userRole);
      }
      
      return (!item.roles || item.roles.includes(userRole)) && 
             (!item.children || item.children.length > 0);
    });
  }

  public refreshMenu(): void {
    this.initializeMenu();
  }
}