import { Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { MatCard, MatCardContent } from "@angular/material/card";

@Component({
    selector: 'app-review',
    imports: [MatCard, MatCardContent],
    standalone: true,
    templateUrl: './review.component.html',
    styleUrl: './review.component.scss',
})
export class ReviewComponent implements OnInit, OnDestroy {

    currentIndex = 0;
    visibleCount = 1;
    private autoplayTimer: ReturnType<typeof setInterval> | null = null;
    private touchStartX = 0;

    public reviews = [
        "Alex did an amazing job on my windows! He provided great service throughout the transaction; quote to job completion...I highly recommend his services!",
        "Alex did a fantastic job cleaning my exterior windows, screens, and sills! He was courteous, efficient, and brought everything he needed to complete the job.",
        "Alex and his associate did a fantastic job on our windows - inside and out! They were both super friendly and very professional. I'd recommend him to anyone.",
        "We loved his professional communication, on-time service, competitive pricing, and quality results.",
        "Alex did an excellent job cleaning our interior windows, exterior windows, window sills and screens! They look brand new.",
        "Alex with Spotless Sights did a great job cleaning our windows! His price was competitive, his communication great, and he was on time and detailed!",
        "Communication was great and the entire process was easy and completed quickly. Highly recommend giving them a call!",
        "My windows have never looked so good! The entire process was at the highest level of service from responding quickly to my inquiry...I highly recommend!",
        "Couldn't be happier! Alex was professional, kind, and did a fantastic job. Really couldn't ask for more.",
        "Spotless Sights was recommended by a neighbor and I am so glad I hired this company. Communication was excellent. The automated text confirming details of the cleaning appointment was a nice touch.",
        "Excellent service. Alex was prompt, professional, and provided a great value. Always great to support local businesses!"
    ];

    constructor(@Inject(PLATFORM_ID) private platformId: object) {}

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.updateVisibleCount();
            this.startAutoplay();
        }
    }

    ngOnDestroy(): void {
        this.stopAutoplay();
    }

    @HostListener('window:resize')
    onResize(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.updateVisibleCount();
        }
    }

    get trackTransform(): string {
        return `translateX(-${this.currentIndex * (100 / this.visibleCount)}%)`;
    }

    get maxIndex(): number {
        return Math.max(0, this.reviews.length - this.visibleCount);
    }

    get dotIndices(): number[] {
        return Array.from({ length: this.maxIndex + 1 }, (_, i) => i);
    }

    next(): void {
        this.currentIndex = this.currentIndex >= this.maxIndex ? 0 : this.currentIndex + 1;
    }

    prev(): void {
        this.currentIndex = this.currentIndex <= 0 ? this.maxIndex : this.currentIndex - 1;
    }

    goTo(index: number): void {
        this.currentIndex = index;
    }

    pause(): void { this.stopAutoplay(); }
    resume(): void { this.startAutoplay(); }

    onTouchStart(e: TouchEvent): void {
        this.touchStartX = e.touches[0].clientX;
    }

    onTouchEnd(e: TouchEvent): void {
        const diff = this.touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            diff > 0 ? this.next() : this.prev();
        }
    }

    private updateVisibleCount(): void {
        const w = window.innerWidth;
        if (w >= 992) this.visibleCount = 3;
        else if (w >= 600) this.visibleCount = 2;
        else this.visibleCount = 1;
        this.currentIndex = Math.min(this.currentIndex, this.maxIndex);
    }

    private startAutoplay(): void {
        this.stopAutoplay();
        this.autoplayTimer = setInterval(() => this.next(), 5000);
    }

    private stopAutoplay(): void {
        if (this.autoplayTimer) {
            clearInterval(this.autoplayTimer);
            this.autoplayTimer = null;
        }
    }
}
