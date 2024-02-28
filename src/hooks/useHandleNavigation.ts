import { MouseEventHandler } from 'react';

export const redirectTo = (path: string): MouseEventHandler<HTMLDivElement> => {
  return (event) => {
    event.preventDefault();
    window.location.href = path; // Directly change the URL
  };
};