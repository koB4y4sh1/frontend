"use client";
import AddButton from "@/components/Button/AddButton/AddButton";
import { work } from "@/components/WorkItem/Work/EditWork";
import WorkItemList from "@/components/WorkItem/WorkItemList";
import { useState } from "react";

export default function Home() {
  const [workList, setWorkList] = useState<work[]>([
    {
      type: "WORK",
      content: "データ利用申請 No.70",
      time: "01:30",
    },
    {
      type: "WORK",
      content: "CMSメディアアップロード冗長化",
      time: "02:00",
    },
    {
      type: "MEETING",
      content: "ASTERIA⇨DF移行",
      time: "01:00",
    },
    {
      type: "REVIEW",
      content: "ソースコードレビュー",
      time: "00:30",
    },
    {
      type: "INSPECTION",
      content: "パイプライン稼働確認",
      time: "00:30",
    },
  ]);

  const setNewWorkItem = () => {
    const work: work = {
      type: "WORK",
      content: "",
      time: "00:00",
    };
    // 非破壊的（イミュータブル）にするため、一度配列をコピーし追加する
    const newWorkList = [...workList];
    newWorkList.push(work);
    setWorkList(newWorkList);
  };

  const deleteWorkItem = (index:number) => {
    // 非破壊的（イミュータブル）にするため、一度配列をコピーし追加する
    const newWorkList = [...workList];
    newWorkList.splice(1,1);
    setWorkList(newWorkList);
  };

  
  return (
    <>
      <div className="w-100 flex justify-left">
        <div className="mx-5 my-5">
          <h1 className="text-xl font-bold text-gray-800">本日の実績</h1>
          <WorkItemList itemList={workList} deleteWorkItem={deleteWorkItem}/> {/** 作業実績一覧 */}
          <div className="flex justify-center">
            <AddButton onClick={setNewWorkItem} />
          </div>
        </div>
      </div>
    </>
  );
}
