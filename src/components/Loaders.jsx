export const Loaders = () => {
  return (
    <>
      <div className="flex flex-col justify-center bg-neutral-300 w-full h-full animate-pulse rounded-xl p-4 gap-4">
        <div className="bg-neutral-400/50 w-full top-4 h-56 animate-pulse rounded-md"></div>
        <div className="flex flex-col gap-4">
          <div className="bg-neutral-400/50 w-full h-20 animate-pulse rounded-md"></div>
          <div className="bg-neutral-400/50 w-4/5 h-10 animate-pulse rounded-md"></div>
          <div className="bg-neutral-400/50 w-full h-6 animate-pulse rounded-md"></div>
          <div className="bg-neutral-400/50 w-2/4 h-5 animate-pulse rounded-md"></div>
        </div>
      </div>
    </>
  );
};
