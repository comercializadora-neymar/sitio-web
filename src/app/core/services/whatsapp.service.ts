import { Injectable } from '@angular/core';
import { APP_SHARED_INFO } from '../config/app-info';

@Injectable({
    providedIn: 'root',
})
export class WhatsappService {
    private readonly config = APP_SHARED_INFO.contact;

    getLink(productName?: string): string {
        const message = this.config.whatsapp.message(productName);
        return `https://wa.me/${this.config.phonePrimary}?text=${message}`;
    }
}
