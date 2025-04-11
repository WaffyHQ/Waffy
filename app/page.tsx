
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300/10 via-blue-500/5 to-zinc-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
      <main className="flex  justify-center flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-6xl font-sans font-extrabold">WAFFY.io</h1>
        <h1 className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          We are focused on AI & Innovation
          </h1>
        <div className="flex gap-4 justify-center items-center flex-col sm:flex-row">
        
          <a
            className="rounded-full mx-auto border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://github.com/WaffyHQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="flex flex-col mt-20 items-center justify-center text-sm text-[#666] dark:text-[#999] row-start-3">
        <p className="text-center">
          © 2025 Waffy.io. All rights reserved.
        </p>
        <p className="text-center">
          Built with ❤️ by Waffy Team
        </p>
        </footer>
    </div>
  );
}
