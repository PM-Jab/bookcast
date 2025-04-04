export default function Generate() {
  return (
    <div className="flex flex-col items-center justify-center h-hidden-nav bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">
        Create a podcast from a summary of a book
      </h1>
      <section className="flex items-center justify-center">
        <div id="generate-podcast" className="bg-gray-300 border-2 w-96">
          <div>Upload book</div>
          <div>Should style</div>
          <button className="btn btn-primary">Start</button>
        </div>
        <div id="audio-player" className="bg-gray-300 border-2 w-96">
          <div>Audio player</div>
          <button className="btn btn-primary">Re-generate</button>
          <button className="btn btn-primary">Save</button>
        </div>
      </section>
    </div>
  );
}
