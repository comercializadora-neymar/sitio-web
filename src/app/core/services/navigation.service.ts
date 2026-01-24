import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    private readonly document = inject(DOCUMENT);
    private readonly router = inject(Router);

    scrollToSection(href: string): void {
        if (!href.startsWith('#')) {
            this.router.navigate([href]);
            return;
        }

        const targetId = href.replace('#', '');
        const element = this.document.getElementById(targetId);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            // Si no estamos en la página donde existe el ID, vamos a la home
            this.router.navigate(['/']).then(() => {
                // Un pequeño delay para esperar a que el DOM cargue en la nueva ruta
                setTimeout(() => {
                    const newElement = this.document.getElementById(targetId);
                    if (newElement) {
                        newElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            });
        }
    }
}
