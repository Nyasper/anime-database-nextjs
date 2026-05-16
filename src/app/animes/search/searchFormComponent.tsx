export default async function SearchFormComponent(props: props) {
  return (
    <form
      action={props.action}
      className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full"
    >
      <div className="relative w-full group">
        <input
          className="w-full bg-slate-900/50 border border-white/10 text-white placeholder-slate-400 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all duration-300 backdrop-blur-sm"
          type="text"
          name="search"
          placeholder="Type a title..."
        />
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-sky-500/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-300" />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto bg-sky-500 hover:bg-sky-400 text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}

interface props {
  action: (formData: FormData) => void;
}
