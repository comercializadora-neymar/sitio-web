import { TestBed } from '@angular/core/testing';
import { LandingFacade } from './landing.facade';
import { LANDING_PAGES_DATA } from './landing.data';

describe('LandingFacade', () => {
    let facade: LandingFacade;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LandingFacade],
        });
        facade = TestBed.inject(LandingFacade);
    });

    it('should be created', () => {
        expect(facade).toBeTruthy();
    });

    describe('Signals', () => {
        it('should expose hero data', () => {
            expect(facade.hero()).toEqual(LANDING_PAGES_DATA.hero);
        });

        it('should expose about data', () => {
            expect(facade.about()).toEqual(LANDING_PAGES_DATA.about);
        });

        it('should expose products data', () => {
            expect(facade.products()).toEqual(LANDING_PAGES_DATA.products);
        });

        it('should expose services data', () => {
            expect(facade.services()).toEqual(LANDING_PAGES_DATA.services);
        });

        it('should expose seo data', () => {
            expect(facade.seo()).toEqual(LANDING_PAGES_DATA.seo);
        });

        it('should expose map data', () => {
            expect(facade.map()).toEqual(LANDING_PAGES_DATA.map);
        });

        it('should expose faq data', () => {
            expect(facade.faq()).toEqual(LANDING_PAGES_DATA.faq);
        });
    });

    describe('Computed Signals', () => {
        it('should compute productItems correctly', () => {
            expect(facade.productItems()).toEqual(LANDING_PAGES_DATA.products.items);
        });

        it('should compute serviceItems correctly', () => {
            expect(facade.serviceItems()).toEqual(LANDING_PAGES_DATA.services.items);
        });
    });
});
