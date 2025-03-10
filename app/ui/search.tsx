"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const timeOutIdRef = useRef<number | null>(null);

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathName}?${params.toString()}`);
  };

  const debouncedHandleSearch = (term: string) => {
    if (timeOutIdRef.current) {
      clearTimeout(timeOutIdRef.current);
    }

    timeOutIdRef.current = window.setTimeout(() => handleSearch(term), 300);
  };

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm text-gray-900 outline-2 placeholder:text-skin-muted"
        placeholder={placeholder}
        onChange={(e) => {
          debouncedHandleSearch(e.target.value);
        }}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-skin-muted peer-focus:text-gray-900" />
    </div>
  );
}
