export default function MovieCard({ movie }) {
  const { Poster, Title, Year, Type } = movie;

  return (
    <div className="bg-gray-900 text-white rounded overflow-hidden flex">
      <div className="w-1/4">
        <img src={Poster} alt={Title} className="w-full" />
      </div>
      <div className="p-4 flex-1">
        <p>{Title}</p>

        <div className="flex text-xs gap-2 mt-2">
          <p className="bg-gray-700 px-2 rounded">{Year}</p>
          <p className="bg-gray-700 px-2 rounded">{Type}</p>
        </div>
      </div>
    </div>
  );
}
