function Loader() {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-white text-[#101010]">
      <div className="flex w-[min(90vw,360px)] flex-col items-center text-center">
        <img
          className="mb-2 w-35 h-auto object-contain"
          src="/logo_exp.png"
          alt="Quinta Corral de Piedra"
        />
        <h1 className="m-0 font-['Cinzel'] text-[40px] leading-none tracking-[0.08em]">QUINTA</h1>
        <h2 className="m-0 font-['Cinzel'] text-[16px] tracking-[0.28em]">CORRAL DE PIEDRA</h2>

        <div className="mt-1.5 flex w-full items-center gap-3">
          <span className="h-px flex-1 bg-[#cfcfcf]" aria-hidden="true" />
          <span className="whitespace-nowrap font-['Manrope'] text-[10px] font-bold tracking-[0.28em] text-[#6e6e6e]">
            RESTAURANT &amp; CABAÑAS
          </span>
          <span className="h-px flex-1 bg-[#cfcfcf]" aria-hidden="true" />
        </div>

        <div className="my-2 text-[#101010]" aria-hidden="true">
          <svg className="h-7 w-7 fill-current" viewBox="0 0 64 64" role="presentation">
            <path d="M20 12v14c0 4.4-3.6 8-8 8v16h-4V12h4v18c1.1 0 2-.9 2-2V12h6zm28 0v6c0 6.1-4.3 11.2-10 12.7V50h-4V12h14zm-4 16h-6V16h6v12z" />
            <path d="M44 12h4v18c0 4.4 3.6 8 8 8v16h-4V30c-4.4 0-8-3.6-8-8V12z" />
          </svg>
        </div>

        <div
          className="mt-2.5 h-0.75 w-[min(70%,280px)] overflow-hidden rounded-full bg-[#efefef]"
          role="progressbar"
          aria-label="Cargando"
        >
          <span className="block h-full w-[40%] rounded-full bg-[#d11212] animate-loader-bar" />
        </div>

        <div className="mt-2.5 flex items-center gap-2.5 font-['Manrope'] text-[10px] tracking-[0.28em] text-[#6e6e6e]" aria-live="polite">
          <span className="inline-flex gap-1.5" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d11212] animate-loader-dots" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#d11212] animate-loader-dots [animation-delay:200ms]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#d11212] animate-loader-dots [animation-delay:400ms]" />
          </span>
          <span>CARGANDO...</span>
        </div>
      </div>
    </div>
  )
}

export default Loader
