import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturedServicesComponent } from './featured-services/featured-services.component';
import { CountsComponent } from './counts/counts.component';
import { FeaturesSectionComponent } from './features-section/features-section.component';
import { ServicesComponent } from './services/services.component';
import { DepartmentsComponent } from './departments/departments.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { StaffComponent } from './staff/staff.component';
import { OffersComponent } from './offers/offers.component';
import { FrequentlyAskedComponent } from './frequently-asked/frequently-asked.component';
import { FooterbaseComponent } from './footerbase/footerbase.component';
import { TopheaderComponent } from './topheader/topheader.component';

@NgModule({
    declarations: [
        AppComponent,
        FeaturedServicesComponent,
        CountsComponent,
        FeaturesSectionComponent,
        ServicesComponent,
        DepartmentsComponent,
        TestimonialsComponent,
        StaffComponent,
        OffersComponent,
        FrequentlyAskedComponent,
        FooterbaseComponent,
        TopheaderComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,

    ]
})
export class AppModule { }
