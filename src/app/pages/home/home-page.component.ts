import { AfterViewInit, Component, Inject, PLATFORM_ID, signal } from "@angular/core";
import { HeaderNavComponent } from "../../components/header-nav/header-nav.component";
import { CardComponent } from "../../components/card/card.component";
import { isPlatformBrowser } from "@angular/common";

@Component({
    selector: 'app-home-page',
    imports: [HeaderNavComponent, CardComponent],
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements AfterViewInit{
    private isBrowser = signal(false); 
    public panesForParkinsons = "In partnership with the Parkinson's Foundation, Spotless Sights is proud to support the Panes for Parkinson's initiative. For every window cleaning service booked, we will donate a portion of the proceeds to help fund research and provide resources for those affected by Parkinson's disease. Together, we can make a difference, one pane at a time.";

    public review = [
        "Alex did an amazing job on my windows! He provided great service throughout the transaction; quote to job completion. Not only are my windows & screens beautiful, Alex took the time to show me how to remove the screens. He even fixed a screen! I highly recommend his services!",
        "Alex did a fantastic job cleaning my exterior windows, screens, and sills! I was able to have same day service and they finished the entire job in about 90 minutes. He was courteous, efficient, and brought everything he needed to complete the job (you just have to have an exterior water hook-up). The only thing I regret is not having them do the interior windows too!",
        // "Alex and his associate did a fantastic job on our windows - inside and out! They were both super friendly and very professional. I'd recommend him to anyone. Well done for a fair price.",
        // "Alex and his crew did a wonderful job on our windows! We loved his professional communication, on-time service, competitive pricing, and quality results. Will certainly use them again and recommend their services to our real estate clients",
        // "Alex did an excellent job cleaning our interior windows, exterior windows, window sills and screens! They look brand new. He was very professional and we had I’ll definitely use him again. Highly recommend!",
        // "HIGHLY Recommend!! Alex cleaned all of our interior and exterior windows. He cleaned the tracks, sills and window screens. Alex is professional, courteous and responsive. He is very conscientious (takes off shoes to enter the house, very aware of surroundings so that he is careful with home owner’s belongings, etc)... Will absolutely have him clean our windows again.",
        // "We recently had our windows cleaned by Alex Ray of Spotless Sights. Not only did they do an impeccable job, leaving our windows crystal clear, but they were also very transparent with their pricing and highly communicative throughout the process. Highly recommend!",
        // "Alex with Spotless Sights did a great job cleaning our windows! His price was competitive, his communication great, and he was on time and detailed! Will use his services again.",
        // "Alex was great! He responded to my inquiry quickly, set a date immediately, arrived on time, and did a great job. i highly recommend him for your window cleaning needs!",
        // "Spotless Sights did an excellent job cleaning our windows as well as pressure washing our driveway and porch. Alex was very professional and friendly. Communication was great and the entire process was easy and completed quickly. Highly recommend giving them a call!",
        // "My windows have never looked so good! The entire process was at the highest level of service from responding quickly to my inquiry to scheduling the service to showing up on time and completing the work. Overall great experience! I highly recommend!",
        // "Couldn’t be happier! Alex was professional, kind, and did a fantastic job. Really couldn’t ask for more. I love seeing a young guy that not only has a great work ethic but is honest and cheerful in his work. Our windows have never looked this good we’ll only be using Alex moving forwards. 10/10 can’t recommend enough"
    ]

    public currentReview = this.review[0];

    constructor(@Inject(PLATFORM_ID) platformId: object) {
        this.isBrowser.set(isPlatformBrowser(platformId));  // save isPlatformBrowser in signal
    }
    

    ngAfterViewInit(): void {
        if(this.isBrowser()) { // check it where you want to write setTimeout or setInterval
        setInterval(()=> {
            this.currentReview = this.changeReview();
        }, 6000)
        }
    }
    

    changeReview() : string{
        const randomIndex = Math.floor(Math.random() * this.review.length);
        const nextReview = this.review[randomIndex];

        return nextReview
    }
}
