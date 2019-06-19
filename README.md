## ANGULAR 2++
##### list of decorators and there use
- [x] @NgModule
- [x] @Component
- [x] @Injectable
- [x] @Directive
- [x] @Pipe
- [x] @Input - property binding
    - Pass data from the parent component to the child component.
    - The @Input Decorator decleared in the child component.
    - [see example](https://gist.github.com/mdabdulripon/dd1dbe30d9a30967616ea2256b5938ef)
- [x] @Output & EventEmitter — event binding 
    - pass data from the child component to the parent component.
    - The @Output Decorator & EventEmitter decleared in the child component.
    - [see example](https://gist.github.com/mdabdulripon/dd1dbe30d9a30967616ea2256b5938ef)
- [x] @ViewChild & AfterviewInit
- [x] @ViewChildren
- [x] @HostBinding
- [x] @HostListener
- [x] @ContentChild
- [x] @ContentChildren


### Data Binding
*Data binding provides communication between a component and the DOM. There are four forms of data binding.*
- [x] Interpolation: {{ value }} - [class => template] 
- [x] Property binding: [property]=”value” [class => template]
- [x] Event binding: (event)=”function” [DOM => Component ]
- [x] Two-way data binding: [(ngModel)]=”value” [Dom <=> Component]

*The Interpolation, Property binding and the Event binding is providing one way data binding.*
[See Example](https://gist.github.com/mdabdulripon/cfbe2162afe90f1ad96c236b5e9573b9)

**what is ViewEncapsulation?**

**Angular animations**

**What is async pipe?**

**What is Router!**

**What are the differences between Observables & Promises?**

**What is Dependency Injection!**

**What is ElementRef**

**What is Renderer2**




**Set Base Path::**
- [x] if we have sub folder set base path as sub folder name
```<base href='/dashboard/'>```
- [x] or use Angular CLI 
> ng build --base-href /dashboard/

**Router module provide two methods**
*RouterModule.forRoot()*
- [x] Declared the router Directives 
- [x] Manage Our Route Configuration
- [x] Register Router Services 
- [x] Used once for the application 

*RouterModule.forChild()*
- [x] Declared the router Directives 
- [x] Manage Our Route Configuration
- [x] Does not Register Router Services 
- [x] Used in the feature module


**What does BrowserModule does** 
*Browser Module pull in basic directives such as ngIf ngFor*

**What does HttpClientModule does** 
*HttpClientModule to access http client services and get and set data*

**How to redirect old welcome route to the new home route**
```
    // Redirect to new route name Home 
    [
        { path: 'home', component: HomeComponent }, 
        { path: 'welcome' redirect: 'home', pathMatch: 'full'},
        { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]    

    // Old Route 
    [
        { path: 'welcome' component: WelcomeComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' }
    ]
```
> Note: '' path is for default route and ** path for page not found route


**What does RouterOutlet directive does?**
*Identifies where to display the routed component's template.*

**What does RouterLink directive does?**
*RouterLink Directive activate a route.*

**Angular provides two type of routes**
- [x] HTML 5 style
- [x] Hash base 

**What is root Module?**
*Every angular application has at least one angular module. it is call AppModule*

**What is Feature Module?**
*Feature modules are NgModules for the purpose of organizing code. For Example*
- [x] product module
- [x] user module
