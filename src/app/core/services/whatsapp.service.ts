import { Injectable } from '@angular/core';
import { APP_SHARED_INFO } from '../config/app-info';

@Injectable({
    providedIn: 'root',
})
export class WhatsappService {
    private readonly config = APP_SHARED_INFO.whatsapp;

    getLink(productName?: string): string {
        const message = this.config.message(productName);
        return `https://wa.me/${this.config.phoneNumber}?text=${message}`;
    }
}
