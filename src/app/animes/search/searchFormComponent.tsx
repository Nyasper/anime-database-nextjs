export default async function SearchFormComponent(props: props) {
  return (
    <form
      action={props.action}
      className="lg:text-lg my-6 max-sm:w-full max-sm:text-base max-sm:flex max-sm:flex-col max-sm:items-center"
    >
      <input
        className="text-black lg:sw-96 max-sm:p-2 rounded-md p-1 max-sm:my-4"
        type="text"
        name="search"
        placeholder={'search...'}
      />
      <button
        type="submit"
        className="bg-sky-400 px-4 max-sm:py-2 py-1 sm:ml-2 rounded-md"
      >
        Search
      </button>
    </form>
  );
}
interface props {
  action: (formData: FormData) => void;
}
