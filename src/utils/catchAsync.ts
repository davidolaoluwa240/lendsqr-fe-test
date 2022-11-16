// Modules
import React from "react";

/**
 * Catch Asynchronous Error
 */
export default (
  fn: (...data: any[]) => Promise<unknown>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return async (...data: any[]) => {
    try {
      setLoading(true);
      await fn(...data);
    } catch (err) {
      // Generic Error
      console.log("Something went wrong while fetching data");
    } finally {
      setLoading(false);
    }
  };
};
