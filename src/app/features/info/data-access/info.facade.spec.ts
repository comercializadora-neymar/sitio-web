import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { InfoFacade } from './info.facade';
import { INFO_PAGES_DATA } from './info.data';

describe('InfoFacade', () => {
    let service: InfoFacade;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(InfoFacade);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should initialize with info pages data', () => {
        expect(service.infoPages()).toEqual(INFO_PAGES_DATA);
    });

    it('should return a page by valid slug', () => {
        const firstPage = INFO_PAGES_DATA[0];
        const result = service.getInfoBySlug(firstPage.slug);
        expect(result).toEqual(firstPage);
    });

    it('should return undefined for invalid slug', () => {
        const result = service.getInfoBySlug('non-existent-slug');
        expect(result).toBeUndefined();
    });
});
