import React from 'react';

interface IProps {
  getSearchInputTerm: (event: React.FormEvent<HTMLInputElement>) => void;
  handleSearchArticlesbyTerm: () => void;
}

const Header: React.FC<IProps> = ({ getSearchInputTerm, handleSearchArticlesbyTerm }) => {
  return (
    <header>
      <div className="flex items-center justify-around bg-gray-900 h-20">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">FinderHot</span>News.
        </h1>
        <nav className="flex space-x-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <a key={item} className="text-gray-50" href={`#item${item}`}>
              Item {item}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center justify-center bg-gray-700 h-20">
        <div className="relative text-gray-600 focus-within:text-gray-400 w-full max-w-[48rem]">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button onClick={handleSearchArticlesbyTerm} className="p-1 focus:outline-none focus:shadow-outline">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 w-full"
            placeholder="Search for news here..."
            autoComplete="off"
            onChange={getSearchInputTerm}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
