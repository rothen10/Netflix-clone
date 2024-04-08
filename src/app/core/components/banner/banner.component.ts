import { DomSanitizer } from '@angular/platform-browser';
import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnChanges {

  @Input({required: true}) bannerTitle = '';
  @Input() bannerOverview = '';
  
  private sanitizer = inject(DomSanitizer)
  videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/watch?v=wS_qbDztgVY?autoplay=1&mute=1&loop=1&controls=0`)

  ngOnChanges(): void {
    
  }

}
