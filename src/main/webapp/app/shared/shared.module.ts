import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FirstappSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [FirstappSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [FirstappSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FirstappSharedModule {
  static forRoot() {
    return {
      ngModule: FirstappSharedModule
    };
  }
}
