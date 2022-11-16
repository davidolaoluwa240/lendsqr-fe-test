// Modules
import React, { useState, useEffect } from "react";

// Interfaces
type UsePaginateReturn<T> = {
  limit: number;
  page: number;
  totalPages: number;
  totalResult: T[];
  paginatedData: T[];
  hasPrevPage: boolean;
  hasNextPage: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
};

const usePaginate = <T>(
  data: T[],
  initialPage: number = 1,
  initiaLimit: number = 10
): UsePaginateReturn<T> => {
  const [page, setPage] = useState<number>(initialPage);
  const [limit, setLimit] = useState<number>(initiaLimit);
  const [paginatedData, setPaginatedData] = useState<T[]>([]);
  const totalPages = Math.ceil(data.length / limit);
  const hasPrevPage = page > 1;
  const hasNextPage = page !== totalPages;

  useEffect(() => {
    const skip = (page - 1) * limit;
    const nextLimit = limit * page;
    setPaginatedData(data.slice(skip, nextLimit) as T[]);
  }, [limit, page, data]);

  return {
    limit,
    setLimit,
    page,
    setPage,
    totalPages,
    totalResult: data,
    paginatedData,
    hasPrevPage,
    hasNextPage,
  };
};

export default usePaginate;
