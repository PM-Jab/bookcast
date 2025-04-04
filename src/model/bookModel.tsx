import NewRelease from "@/components/landing/NewRelease";

export interface BookRecommend {
  infuencerUrl: string;
  opinion: string;
  infuencerName: string;
  infuencerTitle: string;
  book: Book;
  qoute: string;
}

export interface BookCarouselProps {
  bookRecommeds: BookRecommend[];
}

export interface Book {
  title: string;
  imageUrl: string;
}

export interface NewReleaseProps {
  newReleases: Book[];
}
