import useSettings from '../hooks/useSettings';

const Banner = () => {
  const { banner, acceptAll, rejectAll, setModal }  = useSettings();

  return (
    <div class="fixed z-[9998] bottom-0 left-0 max-w-md bg-background m-2 px-5 py-4 space-y-4 font-primary text-foreground rounded-md">
      <h3 class="m-0 font-primary font-semibold text-lg md:text-xl">
        {banner.title}
      </h3>

      <p class="m-0 leading-snug font-primary text-sm md:text-base">
        {banner.description}
      </p>

      <div class="pt-2 space-y-2">
        <button
          type="button"
          class="rounded mr-2 bg-background font-primary font-semibold text-primary px-2 md:px-3.5 py-1.5 md:py-2.5 text-sm border-2 border-solid border-primary hover:border-primary-hover hover:text-primary-hover active:border-primary-active active:text-primary-active transition-colors"
          onClick={() => setModal(true)}
        >
          {banner.customise}
        </button>
        <button
          type="button"
          class="rounded mr-2 bg-background font-primary font-semibold text-primary px-2 md:px-3.5 py-1.5 md:py-2.5 text-sm border-2 border-solid border-primary hover:border-primary-hover hover:text-primary-hover active:border-primary-active active:text-primary-active transition-colors"
          onClick={rejectAll}
        >
          {banner.reject}
        </button>
        <button
          type="button"
          class="rounded mr-2 bg-primary font-primary font-semibold text-background px-2 md:px-3.5 py-1.5 md:py-2.5 text-sm border-2 border-solid border-primary hover:bg-primary-hover hover:border-primary-hover active:bg-primary-active active:border-primary-active transition-colors"
          onClick={acceptAll}
        >
          {banner.accept}
        </button>
      </div>
    </div>
  );
};

export default Banner;
