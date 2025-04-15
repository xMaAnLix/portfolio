export default function Content() {
  return (
    <div className="flex justify-center items-center">
      <div className="container mx-auto px-4 pt-8 max-w-4xl bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
        <div className="bg-black px-6 py-4 border-b border-blue-400">
          <h2
            className="text-xl font-semibold text-white hover:text-cyan-400 text-center rounded-lg transition-all duration-300 px-4 py-2 hover:scale-110 hover:shadow-lg"
            id="cardtitle"
          >
            Card Title
          </h2>
        </div>
        <div className="p-6">
          <p className="text-gray-800 text-center" id="contents">
            This is the main content of the card.
          </p>
        </div>
      </div>
    </div>
  );
}
