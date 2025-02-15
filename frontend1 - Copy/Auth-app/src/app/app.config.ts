import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay} from '@angular/platform-browser';
import { provideHttpClient,withFetch  } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()),SlickCarouselModule,provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay())]
};
