function CharacterCard({
  character,
  src,
  status,
  species,
  lastLocation,
  firstSeen,
}) {
  return (
    <div className="text-white bg-[#3C3E44] flex shadow-2xl font-mono border-black border-2 rounded-2xl">
      <div className="w-[300px] rounded-l-2xl overflow-hidden">
        <img src={src} alt="img" />
      </div>
      <div className="p-3 w-[350px]">
        <h1 className="text-3xl font-bold">{character}</h1>

        <span className="flex gap-10 mb-3 font-bold">
          {status} {species}
        </span>

        <div>
          <p className="flex flex-col text-l mb-3">
            Last known location:
            <span className="text-lg">{lastLocation}</span>
          </p>

          <p className="flex flex-col text-l">
            First seen in:
            <span className="text-lg">{firstSeen}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
