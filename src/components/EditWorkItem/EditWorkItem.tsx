"use client";

import { Dispatch, SetStateAction } from "react";
import { BsPersonVideo } from "react-icons/bs";
import { GoCodeReview } from "react-icons/go";
import { MdPreview, MdTaskAlt } from "react-icons/md";
import { work } from "../WorkItem/WorkItem";

type useStateWorkItem = {
  newWorkItem: work,
  setNewWorkItem: Dispatch<SetStateAction<work>>;
}
const FormWorkItem = ({newWorkItem,setNewWorkItem}:useStateWorkItem): JSX.Element => {

  const onChangeType = (e: any) => {
    const workitem = { ...newWorkItem };
    workitem.type = e.target.value;
    setNewWorkItem(workitem);
  };

  const onChangeContent = (e: any) => {
    const workitem = { ...newWorkItem };
    workitem.content = e.target.value;
    setNewWorkItem(workitem);
  };

  const onChangeTime = (e: any) => {
    const workitem = { ...newWorkItem };
    workitem.time = e.target.value;
    setNewWorkItem(workitem);
  };

  let statusClassName = {
    text: "",
    textColor: "   ",
    bgColor: "",
    icon: <></>,
  };

  switch (newWorkItem.type) {
    case "WORK":
      statusClassName.text = "ワーク";
      statusClassName.textColor = "text-emerald-500 dark:text-emerald-300";
      statusClassName.bgColor = "bg-emerald-500 dark:bg-emerald-400";
      statusClassName.icon = (
        <MdTaskAlt className="w-6 h-6 text-white fill-current dark:text-black"></MdTaskAlt>
      );
      break;
    case "MEETING":
      statusClassName.text = "ミーティング";
      statusClassName.textColor = "text-blue-500 dark:text-blue-300";
      statusClassName.bgColor = "bg-blue-500 dark:bg-blue-400";
      statusClassName.icon = (
        <BsPersonVideo className="w-6 h-6 text-white fill-current dark:text-black"></BsPersonVideo>
      );
      break;
    case "REVIEW":
      statusClassName.text = "レビュー";
      statusClassName.textColor = "text-yellow-500 dark:text-yellow";
      statusClassName.bgColor = "bg-yellow-500 dark:bg-yellow-400";
      statusClassName.icon = (
        <GoCodeReview className="w-6 h-6 text-white fill-current dark:text-black"></GoCodeReview>
      );
      break;
    case "INSPECTION":
      statusClassName.text = "モニタリング";
      statusClassName.textColor = "text-gray-500 dark:text-white";
      statusClassName.bgColor = "bg-gray-500 dark:bg-gray-400";
      statusClassName.icon = (
        <MdPreview className="w-7 h-7 text-white fill-current dark:text-black"></MdPreview>
      );
      break;
  }

  return (
    <div className="flex mt-1 w-full border border-gray-300  overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div
        className={`flex items-center justify-center w-12 ${statusClassName.bgColor}`}
      >
        {statusClassName.icon}
      </div>

      <div className="px-4 py-2 w-60">
        <div className="mx-3">
          <select
            className={`font-semibold bg-gray-800 ${statusClassName.textColor}`}
            onChange={onChangeType}
          >
            <option value="WORK">ワーク</option>
            <option value="MEETING">ミーティング</option>
            <option value="REVIEW">レビュー</option>
            <option value="INSPECTION">モニタリング</option>
          </select>
          <input
            type="text"
            className="text-sm bg-wite dark:bg-gray-800 dark:text-white"
            placeholder="作業内容を入力"
            onChange={onChangeContent}
          />
        </div>
      </div>
      <div className="flex items-center w-15 border-l border-white">
        <div className="mx-1">
          <input
            type="time"
            className="text-sm bg-wite dark:bg-gray-800 dark:text-white"
            onChange={onChangeTime}
          />
        </div>
      </div>
    </div>
  );
};

export default FormWorkItem;
