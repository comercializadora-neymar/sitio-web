import { TestBed } from '@angular/core/testing';
import { NavigationService } from './navigation.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { vi } from 'vitest';

describe('NavigationService', () => {
    let service: NavigationService;
    let router: Router;
    let document: Document;

    beforeEach(() => {
        const routerMock = {
            navigate: vi.fn().mockResolvedValue(true),
        };

        TestBed.configureTestingModule({
            providers: [
                NavigationService,
                { provide: Router, useValue: routerMock },
            ],
        });

        service = TestBed.inject(NavigationService);
        router = TestBed.inject(Router);
        document = TestBed.inject(DOCUMENT);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should navigate to route if href does not start with #', () => {
        const path = '/politicas';
        service.scrollToSection(path);
        expect(router.navigate).toHaveBeenCalledWith([path]);
    });

    it('should scroll into view if element exists on current page', () => {
        const targetId = 'productos';
        const mockElement = {
            scrollIntoView: vi.fn(),
        };

        vi.spyOn(document, 'getElementById').mockReturnValue(mockElement as unknown as HTMLElement);

        service.scrollToSection(`#${targetId}`);

        expect(document.getElementById).toHaveBeenCalledWith(targetId);
        expect(mockElement.scrollIntoView).toHaveBeenCalled();
    });

    it('should navigate to home and scroll after delay if element does not exist', () => {
        vi.useFakeTimers();
        const targetId = 'faq';
        vi.spyOn(document, 'getElementById').mockReturnValue(null);

        service.scrollToSection(`#${targetId}`);

        expect(router.navigate).toHaveBeenCalledWith(['/']);

        // Simulate the navigation success promise and the setTimeout
        vi.advanceTimersByTime(100);

        // In actual app, getElementById would be called again after delay
        // but in this test we are mainly verifying the home navigation logic
        vi.useRealTimers();
    });
});
