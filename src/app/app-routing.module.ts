import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        canActivate: [authGuard],
        loadComponent: () =>
            import('./layouts/blank-layout/blank-layout.component').then(
                (m) => m.BlankLayoutComponent
            ),
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                loadComponent: () =>
                    import('./components/home/home.component').then(
                        (m) => m.HomeComponent
                    ),
                title: 'Home',
            },
            {
                path: 'products',
                loadComponent: () =>
                    import('./components/products/products.component').then(
                        (m) => m.ProductsComponent
                    ),
                title: 'Products',
            },
            {
                path: 'categories',
                loadComponent: () =>
                    import('./components/categories/categories.component').then(
                        (m) => m.CategoriesComponent
                    ),
                title: 'Categories',
            },
            {
                path: 'brands',
                loadComponent: () =>
                    import('./components/brands/brands.component').then(
                        (m) => m.BrandsComponent
                    ),
                title: 'Brands',
            },
            {
                path: 'cart',
                loadComponent: () =>
                    import('./components/cart/cart.component').then(
                        (m) => m.CartComponent
                    ),
                title: 'Cart',
            },
            {
                path: 'details/:id',
                loadComponent: () =>
                    import(
                        './components/product-details/product-details.component'
                    ).then((m) => m.ProductDetailsComponent),
            },
            {
                path: 'checkout/:id',
                loadComponent: () =>
                    import('./components/checkout/checkout.component').then(
                        (m) => m.CheckoutComponent
                    ),
                title: 'checkout',
            },
            {
                path: 'allorders',
                loadComponent: () =>
                    import('./components/all-orders/all-orders.component').then(
                        (m) => m.AllOrdersComponent
                    ),
                title: 'All Orders',
            }
        ],
    },
    {
        path: '',
        loadComponent: () =>
            import('./layouts/auth-layout/auth-layout.component').then(
                (m) => m.AuthLayoutComponent
            ),
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {
                path: 'login',
                loadComponent: () =>
                    import('./components/login/login.component').then(
                        (m) => m.LoginComponent
                    ),
                title: 'Login',
            },
            {
                path: 'register',
                loadComponent: () =>
                    import('./components/register/register.component').then(
                        (m) => m.RegisterComponent
                    ),
                title: 'Register',
            },
            {
                path: 'forget-password', loadComponent: () => import('./components/forget-password/forget-password.component').then(m => m.ForgetPasswordComponent), title: 'Forget Password'
            }
        ],
    },
    {
        path: '**',
        loadComponent: () =>
            import('./components/not-found/not-found.component').then(
                (m) => m.NotFoundComponent
            ),
        title: 'Not-Found',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
