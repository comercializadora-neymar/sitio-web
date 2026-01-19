import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../../icons/svg-icon.component';

@Component({
  selector: 'app-floating-whatsapp',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SvgIconComponent],
  template: `
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      class="group fixed bottom-6 right-6 z-50 flex items-center h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#20bd5a] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] p-4 overflow-hidden"
      aria-label="Contactar por WhatsApp"
    >
      <app-svg-icon 
        icon="whatsapp" 
        ariaLabel="whatsapp icono"
        viewBox="simpleIcons"
        size="24px" 
        class="fill-current shrink-0"
      ></app-svg-icon>
      
      <span 
        class="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-3 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap font-semibold text-sm"
      >
        Escríbenos al WhatsApp
      </span>
    </a>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class FloatingWhatsapp {}
