import { TestBed } from '@angular/core/testing';
import { WhatsappService } from './whatsapp.service';
import { APP_SHARED_INFO } from '../config/app-info';

describe('WhatsappService', () => {
    let service: WhatsappService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(WhatsappService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should generate a link without product name', () => {
        const link = service.getLink();
        expect(link).toContain(`wa.me/${APP_SHARED_INFO.contact.phonePrimary}`);
        expect(link).toContain('text=Hola,%20quisiera%20información');
    });

    it('should generate a link with product name', () => {
        const productName = 'Bagre';
        const link = service.getLink(productName);
        expect(link).toContain('text=Quiero%20comprar%20Bagre');
    });
});
