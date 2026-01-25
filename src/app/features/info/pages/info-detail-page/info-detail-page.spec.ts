import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoDetailPage } from './info-detail-page';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { InfoFacade } from '../../data-access/info.facade';
import { SeoService } from '../../../../core/services/seo.service';
import { ViewportScroller } from '@angular/common';
import { of } from 'rxjs';
import { signal, Component, input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { INFO_PAGES_DATA } from '../../data-access/info.data';
import { SvgIconComponent } from '../../../../shared/icons/svg-icon.component';

// Mock components
@Component({
    selector: 'app-svg-icon',
    standalone: true,
    template: ''
})
class MockSvgIconComponent {
    icon = input<string>('');
    size = input<string>('');
    viewBox = input<string>('');
}

describe('InfoDetailPage', () => {
    let component: InfoDetailPage;
    let fixture: ComponentFixture<InfoDetailPage>;
    let mockInfoFacade: { getInfoBySlug: (slug: string) => unknown; infoPages: unknown };
    let mockSeoService: { updateSeo: ReturnType<typeof vi.fn> };
    let mockViewportScroller: { scrollToPosition: ReturnType<typeof vi.fn> };

    const testPage = INFO_PAGES_DATA[0];

    beforeEach(async () => {
        mockInfoFacade = {
            getInfoBySlug: (slug: string) => testPage.slug === slug ? testPage : undefined,
            infoPages: signal(INFO_PAGES_DATA).asReadonly()
        };

        mockSeoService = {
            updateSeo: vi.fn()
        };

        mockViewportScroller = {
            scrollToPosition: vi.fn()
        };

        await TestBed.configureTestingModule({
            imports: [InfoDetailPage],
            providers: [
                provideRouter([]),
                {
                    provide: ActivatedRoute,
                    useValue: {
                        paramMap: of(new Map([['slug', testPage.slug]]))
                    }
                },
                { provide: InfoFacade, useValue: mockInfoFacade },
                { provide: SeoService, useValue: mockSeoService },
                { provide: ViewportScroller, useValue: mockViewportScroller }
            ]
        })
            .overrideComponent(InfoDetailPage, {
                remove: { imports: [SvgIconComponent] },
                add: { imports: [MockSvgIconComponent] }
            })
            .compileComponents();

        fixture = TestBed.createComponent(InfoDetailPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render the breadcrumb with correct title', () => {
        const breadcrumbTitle = fixture.debugElement.query(By.css('span.font-bold')).nativeElement;
        expect(breadcrumbTitle.textContent).toContain(testPage.title);
    });

    it('should render page title and subtitle', () => {
        const title = fixture.debugElement.query(By.css('h1')).nativeElement;
        const subtitle = fixture.debugElement.query(By.css('h2')).nativeElement;

        expect(title.textContent).toContain(testPage.title);
        expect(subtitle.textContent).toContain(testPage.subtitle);
    });

    it('should render page content', () => {
        const content = fixture.debugElement.query(By.css('.prose')).nativeElement;
        expect(content.innerHTML).toContain(testPage.content);
    });

    it('should scroll to top when page changes', () => {
        expect(mockViewportScroller.scrollToPosition).toHaveBeenCalledWith([0, 0]);
    });
});
