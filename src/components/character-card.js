function CharacterCard({
  character,
  src,
  status,
  species,
  lastLocation,
  firstSeen,
}) {
  return (
    <div className="text-white flex m-10 shadow-2xl font-mono">
      <div className="w-[300px]">
        <img src={src} alt="img" />
      </div>
      <div className="flex flex-col gap-2 bg-[#3C3E44] p-3 h-[300px] w-[350px]">
        <h1 className="text-3xl font-bold hover:text-[#FF9800] cursor-pointer">
          {character}
        </h1>
        <p className="flex gap-10 mb-3 font-bold">
          {status} {species}
        </p>
        <div className="flex flex-col gap-3">
          <p className="flex flex-col text-xl">
            Last known location:
            <span className="hover:text-[#FF9800] cursor-pointer text-lg">
              {lastLocation}
            </span>
          </p>
          <p className="flex flex-col text-xl">
            First seen in:
            <span className="hover:text-[#FF9800] cursor-pointer text-lg">
              {firstSeen}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
