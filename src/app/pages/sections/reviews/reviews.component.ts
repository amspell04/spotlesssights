import { Component, Inject, PLATFORM_ID, signal } from "@angular/core";

import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-review',
    imports: [CommonModule],
    standalone: true,
    templateUrl: './review.component.html',
    styleUrl: './review.component.scss',
})
export class ReviewComponent{

    public reviews = [
        "Alex did an amazing job on my windows! He provided great service throughout the transaction; quote to job completion...I highly recommend his services!",
        "Alex did a fantastic job cleaning my exterior windows, screens, and sills!...He was courteous, efficient, and brought everything he needed to complete the job...",
        "Alex and his associate did a fantastic job on our windows - inside and out! They were both super friendly and very professional. I'd recommend him to anyone.",
        "We loved his professional communication, on-time service, competitive pricing, and quality results.",
        "Alex did an excellent job cleaning our interior windows, exterior windows, window sills and screens! They look brand new.",
        "Alex with Spotless Sights did a great job cleaning our windows! His price was competitive, his communication great, and he was on time and detailed!",
        "Communication was great and the entire process was easy and completed quickly. Highly recommend giving them a call!",
        "My windows have never looked so good! The entire process was at the highest level of service from responding quickly to my inquiry...I highly recommend!",
        "Couldn’t be happier! Alex was professional, kind, and did a fantastic job. Really couldn’t ask for more.",
        "Alex did an amazing job on my windows! He provided great service throughout the transaction; quote to job completion...I highly recommend his services!",
        "Alex did a fantastic job cleaning my exterior windows, screens, and sills!...He was courteous, efficient, and brought everything he needed to complete the job...",
        "Alex and his associate did a fantastic job on our windows - inside and out! They were both super friendly and very professional. I'd recommend him to anyone.",
        "We loved his professional communication, on-time service, competitive pricing, and quality results.",
        "Alex did an excellent job cleaning our interior windows, exterior windows, window sills and screens! They look brand new.",
        "Alex with Spotless Sights did a great job cleaning our windows! His price was competitive, his communication great, and he was on time and detailed!",
        "Communication was great and the entire process was easy and completed quickly. Highly recommend giving them a call!",
        "My windows have never looked so good! The entire process was at the highest level of service from responding quickly to my inquiry...I highly recommend!",
        "Couldn’t be happier! Alex was professional, kind, and did a fantastic job. Really couldn’t ask for more."
    ]

    public currentReview = this.reviews[0];
      private perItemSeconds = 3; // adjust to taste
    public animationDuration = `${this.perItemSeconds * this.reviews.length}s`;



    changeReview() : string{
        const randomIndex = Math.floor(Math.random() * this.reviews.length);
        const nextReview = this.reviews[randomIndex];

        return nextReview
    }
}
