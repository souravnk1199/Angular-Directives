import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'Parked Boat',
      url: 'https://img.freepik.com/premium-photo/fishing-wooden-boats-are-parked-beach_52075-761.jpg?w=2000',
    },
    {
      title: 'Beach Chairs',
      url: 'https://www.miamiherald.com/reviews/wp-content/uploads/2022/01/beach-chair-mh.jpg',
    },
    {
      title: 'Green coconut tree near body of water',
      url: 'https://w0.peakpx.com/wallpaper/707/245/HD-wallpaper-leaning-coconut-trees-on-body-of-water-with-beautiful-blue-sky-beach.jpg',
    },
    {
      title: 'A beautiful island resort',
      url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/7d/b0/07/beach-area-1st-december.jpg?w=700&h=-1&s=1',
    },
    {
      title: 'Parked Boat',
      url: 'https://img.freepik.com/premium-photo/fishing-wooden-boats-are-parked-beach_52075-761.jpg?w=2000',
    },
    {
      title: 'Beach Chairs',
      url: 'https://www.miamiherald.com/reviews/wp-content/uploads/2022/01/beach-chair-mh.jpg',
    },
    {
      title: 'Green coconut tree near body of water',
      url: 'https://w0.peakpx.com/wallpaper/707/245/HD-wallpaper-leaning-coconut-trees-on-body-of-water-with-beautiful-blue-sky-beach.jpg',
    },
    {
      title: 'A beautiful island resort',
      url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/7d/b0/07/beach-area-1st-december.jpg?w=700&h=-1&s=1',
    },
    {
      title: 'Green coconut tree near body of water',
      url: 'https://w0.peakpx.com/wallpaper/707/245/HD-wallpaper-leaning-coconut-trees-on-body-of-water-with-beautiful-blue-sky-beach.jpg',
    },
    {
      title: 'A beautiful island resort',
      url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/7d/b0/07/beach-area-1st-december.jpg?w=700&h=-1&s=1',
    },
  ];

  checkWindowIndex(index: number) {
    const limit = 5;

    const lowerBound = Math.floor(this.currentPage / limit) * limit;
    const upperBound = lowerBound + limit;

    return lowerBound <= index && index < upperBound;
  }
}
