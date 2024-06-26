import { work } from "./Work/EditWork";
import WorkItem from "./WorkItem";

type workItemList = {
  itemList: Array<work>,
  deleteWorkItem:(index:number)=>void
};

const WorkItemList = (props: workItemList) => {
  let loopcount:number = 0;
  return props.itemList.map((workItem: work, i:number) => {
    const index= loopcount;
    console.log(loopcount)
    loopcount++;
    return <WorkItem key={i} id={index} props={workItem} deleteWorkItem={props.deleteWorkItem} />;
  });
};

export default WorkItemList;
