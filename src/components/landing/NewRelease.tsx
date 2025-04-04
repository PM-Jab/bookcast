import { FC } from "react";
import { NewReleaseProps } from "@/model/bookModel";

const NewRelease: React.FC<NewReleaseProps> = ({ newReleases }) => {
  return (
    <div>
      <div>New Releases</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 p-4">
        {/* <div className="w-fit bg-amber-500 px-20 py-28">book</div> */}
        {newReleases.map((book, index) => (
          <div className="flex flex-col items-center w-48" key={index}>
            <div key={index} className="flex flex-col items-center h-44">
              <img
                src={book.imageUrl}
                alt={book.title}
                width={340}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-center text-sm mt-2">{book.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewRelease;
