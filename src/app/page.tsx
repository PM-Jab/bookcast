import BookCarousel from "@/components/landing/BookCarousel";
import { BookRecommend, Book } from "@/model/bookModel";
import NewRelease from "@/components/landing/NewRelease";

const bookRecommeds: BookRecommend[] = [
  {
    infuencerUrl: "/Bill-Gates-PNG-File.svg",
    opinion:
      "The psychology of money is bursting with interesting ideas and practical takeaways. Quite simply, it is essential reading for anyone interested in being better with money.",
    infuencerName: "Bill Gates",
    infuencerTitle: "CEO of Microsoft",
    book: {
      imageUrl: "/psychology-money-cover.png",
      title: "Book 1",
    },
    qoute: "Better with money",
  },
  {
    infuencerUrl: "/Bill-Gates-PNG-File.svg",
    opinion:
      "The psychology of money is bursting with interesting ideas and practical takeaways. Quite simply, it is essential reading for anyone interested in being better with money.",
    infuencerName: "Bill Gates",
    infuencerTitle: "CEO of Microsoft",
    book: {
      imageUrl: "/psychology-money-cover.png",
      title: "Book 2",
    },
    qoute: "This is a quote from Book 2.",
  },
  {
    infuencerUrl: "/Bill-Gates-PNG-File.svg",
    opinion:
      "The psychology of money is bursting with interesting ideas and practical takeaways. Quite simply, it is essential reading for anyone interested in being better with money.",
    infuencerName: "Bill Gates",
    infuencerTitle: "CEO of Microsoft",
    book: {
      imageUrl: "/psychology-money-cover.png",
      title: "Book 3",
    },
    qoute: "This is a quote from Book 3.",
  },
];

const newBooks: Book[] = [
  {
    imageUrl: "/psychology-money-cover.png",
    title: "Book 1",
  },
  {
    imageUrl: "/psychology-money-cover.png",
    title: "Book 2",
  },
  {
    imageUrl: "/psychology-money-cover.png",
    title: "Book 3",
  },
  {
    imageUrl: "/psychology-money-cover.png",
    title: "Book 4",
  },
  {
    imageUrl: "/psychology-money-cover.png",
    title: "Book 5",
  },
  {
    imageUrl: "/psychology-money-cover.png",
    title: "Book 6",
  },
  {
    imageUrl: "/psychology-money-cover.png",
    title: "Book 7",
  },
  {
    imageUrl: "/psychology-money-cover.png",
    title: "Book 8",
  },
  {
    imageUrl: "/psychology-money-cover.png",
    title: "Book 9",
  },
  {
    imageUrl: "/psychology-money-cover.png",
    title: "Book 10",
  },
  {
    imageUrl: "/psychology-money-cover.png",
    title: "Book 11",
  },
  {
    imageUrl: "/psychology-money-cover.png",
    title: "Book 12",
  },
  {
    imageUrl: "/psychology-money-cover.png",
    title: "Book 13",
  },
  {
    imageUrl: "/psychology-money-cover.png",
    title: "Book 14",
  },
  {
    imageUrl: "/psychology-money-cover.png",
    title: "Book 15",
  },
  {
    imageUrl: "/psychology-money-cover.png",
    title: "Book 16",
  },
  {
    imageUrl: "/psychology-money-cover.png",
    title: "Book 17",
  },
  {
    imageUrl: "/psychology-money-cover.png",
    title: "Book 18",
  },
];

const mockBook = (amount: number) => {
  const books: Book[] = [];
  for (let i = 0; i < amount; i++) {
    books.push({
      imageUrl: "/psychology-money-cover.png",
      title: `The Psychology of Money By Morgan Housel ${i + 1}`,
    });
  }
  return books;
};

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 pt-24">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
        What do you fill right now?
      </h2>
      <div className="w-full max-w-6xl">
        <BookCarousel bookRecommeds={bookRecommeds} />
      </div>
      <section>
        {/* <div>Best sellers</div>
        <div className="flex items-center justify-center">
          <div className="w-fit bg-amber-500 px-20 py-28">book</div>
        </div> */}
        <NewRelease newReleases={mockBook(21)} />
      </section>
    </div>
  );
}
