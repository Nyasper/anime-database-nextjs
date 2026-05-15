export default function Pagination(props: pageInfo) {
  if (props) {
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
    return (
      <ul className="flex gap-8 justify-center py-4 px-8 text-xl lg:w-11/12 max-lg:gap-4 max-sm:2 glass mx-auto md:rounded-xl  max-md:m-0">
        <li>
          <Link href={`./${props.order}-1`}>First</Link>
        </li>
        <li>
          <Link
            href={`./${props.order}-${props.currentPage - 1}`}
            className="text-lg"
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
                  ? 'font-bold bg-white text-black rounded-xl py-1 px-2'
                  : ''
              }
            >
              {pageNumber}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={`./${props.order}-${props.currentPage + 1}`}
            className="text-lg"
          >
            {'>'}
          </Link>
        </li>
        <li>
          <Link href={`./${props.order}-${props.lastPage}`}>Last</Link>
        </li>
      </ul>
    );
  } else return null;
}

import { pageInfo } from '@/app/utils/types';
import Link from 'next/link';
