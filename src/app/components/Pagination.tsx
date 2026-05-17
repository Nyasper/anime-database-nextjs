import { pageInfo } from '@/app/utils/types';
import Link from 'next/link';

export default function Pagination(props: pageInfo) {
  if (!props) return null;

  const pageShow = 6; //how to links show in the page buttons
  const pageNumbers = []; //Array with the page numbers

  //generate page numbers back
  for (
    let i = props.currentPage;
    i >= Math.max(props.currentPage - pageShow / 2, 1);
    i--
  ) {
    if (i >= 1) {
      pageNumbers.unshift(i);
    }
  }

  //Generate page numbers ahead
  for (
    let i = props.currentPage + 1;
    i <= Math.min(props.currentPage + pageShow / 2, props.lastPage);
    i++
  ) {
    if (i <= props.lastPage) {
      pageNumbers.push(i);
    }
  }

  const baseLinkClass = "flex items-center justify-center min-w-[2.5rem] h-10 px-3 rounded-xl border border-transparent hover:bg-white/10 hover:border-white/20 transition-all duration-300 font-medium text-sm sm:text-base text-slate-300 hover:text-white";
  const activeLinkClass = "flex items-center justify-center min-w-[2.5rem] h-10 px-3 rounded-xl bg-sky-500 text-white font-bold shadow-[0_0_15px_rgba(14,165,233,0.5)] border border-sky-400 transition-all duration-300 text-sm sm:text-base scale-105";

  return (
    <ul className="flex flex-wrap gap-2 sm:gap-3 justify-center items-center py-3 px-0 sm:px-8 mx-auto w-[95%] max-w-3xl backdrop-blur-xl bg-slate-900/70 border border-white/10 shadow-2xl rounded-2xl my-4">
      <li>
        <Link href={`./${props.order}-1`} className={baseLinkClass}>
          First
        </Link>
      </li>
      <li>
        <Link
          href={`./${props.order}-${props.currentPage > 1 ? props.currentPage - 1 : 1}`}
          className={baseLinkClass}
        >
          {'<'}
        </Link>
      </li>
      {pageNumbers.map((pageNumber) => (
        <li key={pageNumber}>
          <Link
            href={`./${props.order}-${pageNumber}`}
            className={
              props.currentPage == pageNumber
                ? activeLinkClass
                : baseLinkClass
            }
          >
            {pageNumber}
          </Link>
        </li>
      ))}
      <li>
        <Link
          href={`./${props.order}-${props.currentPage < props.lastPage ? props.currentPage + 1 : props.lastPage}`}
          className={baseLinkClass}
        >
          {'>'}
        </Link>
      </li>
      <li>
        <Link href={`./${props.order}-${props.lastPage}`} className={baseLinkClass}>
          Last
        </Link>
      </li>
    </ul>
  );
}
