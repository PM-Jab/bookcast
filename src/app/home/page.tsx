export default function Home() {
  return (
    <div className="flex items-center justify-center h-hidden-nav bg-gray-100">
      {/* generate podcast from uploaded book */}
      <div id="generate-podcast" className="bg-gray-300 border-2 w-96">
        <div>Generate a podcast from an uploaded book</div>
        <div>Should style</div>
        <button className="btn btn-primary">Start</button>
      </div>
      <div id="audio-player" className="bg-gray-300 border-2 w-96">
        <div>Audio player</div>
        <button className="btn btn-primary">Re-generate</button>
        <button className="btn btn-primary">Save</button>
      </div>
    </div>
  );
}
