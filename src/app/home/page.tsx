import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex items-center justify-center w-full">
        <section className="flex flex-col items-center justify-center p-4">
          <div className="bg-amber-500 w-96 h-96">
            <Image
              src={"/psychology-money-cover.png"}
              alt={"title"}
              width={340}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
          <div>audio playback</div>
        </section>
        <div className="w-56 bg-amber-300">playlist</div>
      </div>
    </div>
  );
}
