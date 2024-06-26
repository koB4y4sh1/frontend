type EventHandler = {
  onClick: () => void;
};

const SaveButton = (events: EventHandler): JSX.Element => {
  const onClickSaveButton  = events.onClick;

  return (
    <div className="inline-flex items-center rounded-md shadow-sm">
      <button
        className="text-slate-800 hover:text-slate-100 text-sm bg-blue-500 hover:bg-blue-600 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center"
        onClick={onClickSaveButton}
      >
        <span>
          <svg
            viewBox="-1.2 -1.2 26.40 26.40"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            strokeLinecap="round"
            strokeLinejoin="miter"
          >
            <polygon points="17 2 2 2 2 22 7 22 7 13 17 13 17 22 22 22 22 7 17 2"></polygon>
            <line x1="7" y1="7" x2="15" y2="7"></line>
            <line x1="7" y1="22" x2="17" y2="22"></line>
          </svg>
        </span>
        <span className="hidden md:inline-block">Save</span>
      </button>
    </div>
  );
};

export default SaveButton;
