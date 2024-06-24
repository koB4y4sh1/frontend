"use client";
import { useEffect, useState } from "react";
import { work } from "../WorkDone/WorkItem";
import FormWorkItem from "./WorkItem";

type addWorkItem = {
  addWorkItemOnClick: (work: work) => void;
};

const defaultValeu: work = {
  type: "WORK",
  content: "",
  time: "00:00",
};
const FormItem = (props: addWorkItem): JSX.Element => {
  const [newWorkItem, setNewWorkItem] = useState<work>(defaultValeu);

  const [Editing, setEditing] = useState(false);

  const onClickAddButton = () => {
    setEditing(true);
  };
  const onClickSaveButton = () => {
    props.addWorkItemOnClick(newWorkItem);
    setEditing(false);
  };
  const onClickCancelButton = () => {
    setEditing(false);
  };

  useEffect(() => {
    const workitem: work = defaultValeu;
    setNewWorkItem(workitem);
  }, [Editing]);

  return (
    <div className="w-full py-2 overflow-hidden ">
      {Editing ? (
        <>
          <form id="newWorkItem">
            <FormWorkItem
              newWorkItem={newWorkItem}
              setNewWorkItem={setNewWorkItem}
            ></FormWorkItem>
          </form>
          <div
            id="save-cancel-button"
            className="flex font-semibold items-center justify-center"
          >
            <button
              type="submit"
              form="newWorkItem"
              className="w-40 border border-blue-300 text-blue-300 rounded-lg shadow-md bg-white dark:bg-blue-600 dark:text-white"
              onClick={onClickSaveButton}
            >
              保存
            </button>
            <button
              className="w-40 border bg-red-600 border-red-300 text-white rounded-lg shadow-md"
              onClick={onClickCancelButton}
            >
              キャンセル
            </button>
          </div>
        </>
      ) : (
        <div
          id="add-button"
          className="flex font-semibold items-center justify-center"
        >
          <button
            className="w-40 border border-gray-800 rounded-lg shadow-md bg-gray-800 dark:bg-gray-800 dark:text-white"
            onClick={onClickAddButton}
          >
            追加
          </button>
        </div>
      )}
    </div>
  );
};

export default FormItem;
