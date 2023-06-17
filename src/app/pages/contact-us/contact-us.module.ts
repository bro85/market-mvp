import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { IntroModule } from '../../components/intro/intro.module';
import { OurContactsModule } from '../../components/our-contacts/our-contacts.module';
import { SocialIconsModule } from '../../components/social-icons/social-icons.module';
import { ContactUsRoutingModule } from './contact-us-routing.module';

@NgModule({
  declarations: [
    ContactUsComponent
  ],
  exports: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    IntroModule,
    OurContactsModule,
    SocialIconsModule,
    ContactUsRoutingModule,
  ]
})
export class ContactUsModule { }
