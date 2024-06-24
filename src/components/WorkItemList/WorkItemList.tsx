import WorkItem, { work } from "../WorkItem/WorkItem";

type workItemList = {
  itemList: Array<work>;
};

const WorkItemList = (props: workItemList) => {
  return props.itemList.map((workItem: work, i) => {
    return <WorkItem key={i} {...workItem} />;
  });
};

export default WorkItemList;
