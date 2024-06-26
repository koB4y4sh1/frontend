// import { FaCheckCircle } from "react-icons/fa";
// import { FaRegCheckCircle } from "react-icons/fa";
import { BsPersonVideo } from "react-icons/bs";
import { GoCodeReview } from "react-icons/go";
import { MdPreview, MdTaskAlt } from "react-icons/md";

type workType = "WORK" | "MEETING" | "REVIEW" | "INSPECTION";

type Props = {
  type: workType;
  content: string;
  time: string;
  onClick: () => void;
};
const Work = (props: Props): JSX.Element => {
  const onClickWorkItem = props.onClick;
  let statusClassName = {
    text: "",
    textColor: "",
    bgColor: "",
    icon: <></>,
  };

  switch (props.type) {
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
    <label onClick={onClickWorkItem}>
      <div className="flex mt-1 w-full border border-gray-300  overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div
          className={`flex items-center justify-center w-12 ${statusClassName.bgColor}`}
        >
          {statusClassName.icon}
        </div>

        <div className="px-4 py-2 w-60">
          <div className="mx-3">
            <p className={`font-semibold ${statusClassName.textColor}`}>
              {statusClassName.text}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-100">
              {props.content}
            </p>
          </div>
        </div>
        <div className="flex items-center w-15 border-l border-white">
          <div className="mx-3">
            <span className="text-sm text-gray-600 dark:text-gray-100">
              {props.time}
            </span>
          </div>
        </div>
      </div>
    </label>
  );
};

export default Work;
