const CGHeroVideoBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-20">
        <source src="/video/big-circle.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
export default CGHeroVideoBackground;
