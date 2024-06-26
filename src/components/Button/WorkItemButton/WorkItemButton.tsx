import { Dispatch, SetStateAction, } from "react";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";
import SaveButton from "../SaveButton/SaveButton";

type Boolean = {
	editing: boolean,
	setEditing: Dispatch<SetStateAction<boolean>>;
}
const WorkItemButton = ({editing,setEditing}: Boolean): JSX.Element => {

	const onClickEditButton = () => {};
	const onClickSaveButton = () => {};
	const onClickDeleteButton = () => {};
  return (
    <>
      {editing ?<SaveButton onClick={onClickSaveButton}/> : <EditButton onClick={onClickEditButton}/> }
      <DeleteButton onClick={onClickDeleteButton}/>
    </>
  );
};

export default WorkItemButton;
