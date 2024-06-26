type EventHandler = {
  onClick: () => void;
};

const AddButton = (events: EventHandler): JSX.Element => {
  const onClickAddWorkItem = events.onClick;
  return (
    <button
      type="button"
      className="text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-gray-800 dark:border-gray-800 dark:text-white dark:hover:bg-gray-400 dark:hover:text-gray-800 "
      onClick={onClickAddWorkItem}
    >
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <g id="SVGRepo_iconCarrier">
          <path d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"></path>
        </g>
      </svg>
      <span className="sr-only">Icon description</span>
    </button>
  );
};

export default AddButton;
