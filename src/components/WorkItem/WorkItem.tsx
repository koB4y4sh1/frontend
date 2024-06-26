// import { FaCheckCircle } from "react-icons/fa";
// import { FaRegCheckCircle } from "react-icons/fa";

import { useState } from "react";
import DeleteButton from "../Button/DeleteButton/DeleteButton";
import EditButton from "../Button/EditButton/EditButton";
import SaveButton from "../Button/SaveButton/SaveButton";
import EditWorkItem, { work } from "./Work/EditWork";
import DisplayWorkItem from "./Work/Work";

type workItemtype ={
  id:number,
  props:work,
  deleteWorkItem:(index:number)=>void
};

const WorkItem = (workItemProps: workItemtype): JSX.Element => {
  const {props} =workItemProps;
  const {deleteWorkItem}=workItemProps;
  const {id} = workItemProps;

  const [workItem, setWorkItem] = useState<work>(props);
  const [buttonIsShow, setButtonIsShow] = useState(false);
  const [editing, setEditing] = useState(false);
  const onClickEditButton = () => {
    setEditing(true);
  };
  const onClickSaveButton = () => {
    setEditing(false);
    setButtonIsShow(false);
  };
  const onClickDeleteButton = () => {
  console.log(workItemProps.id)
    deleteWorkItem(workItemProps.id);
  };
  /**
   * WorkItemクリック時にに編集,削除ボタンがフェードインされる。
   */
  const onClickWorkItem = () => {
    setButtonIsShow(true);
  };

  return (
    <>
      {editing ? (
        <EditWorkItem workItem={workItem} setWorkItem={setWorkItem} />
      ) : (
        <DisplayWorkItem {...workItem} onClick={onClickWorkItem} />
      )}
      {buttonIsShow && (
        <div id="work-item-button">
          {editing ? (
            <SaveButton onClick={onClickSaveButton} />
          ) : (
            <EditButton onClick={onClickEditButton} />
          )}
          <DeleteButton onClick={onClickDeleteButton} />
        </div>
      )}
    </>
  );
};

export default WorkItem;
