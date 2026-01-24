import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FloatingWhatsapp } from './floating-whatsapp';
import { WhatsappService } from '../../../core/services/whatsapp.service';
import { vi } from 'vitest';

describe('FloatingWhatsapp', () => {
    let component: FloatingWhatsapp;
    let fixture: ComponentFixture<FloatingWhatsapp>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FloatingWhatsapp],
        }).compileComponents();

        fixture = TestBed.createComponent(FloatingWhatsapp);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call WhatsappService.getLink when calling whatsappLink', () => {
        const whatsappService = TestBed.inject(WhatsappService);
        const spy = vi.spyOn(whatsappService, 'getLink');

        component.whatsappLink();

        expect(spy).toHaveBeenCalled();
    });
});
