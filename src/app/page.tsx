"use client";
import FormItem from "@/components/FormWorkItem/Form";
import { work } from "@/components/WorkDone/WorkItem";
import WorkItemList from "@/components/WorkDone/WorkItemList";
import { useState } from "react";

export default function Home() {
  const [workList, setWorkList] = useState<work[]>([
    {
      type: "WORK",
      content: "データ利用申請 No.70",
      time: "1:30",
    },
    {
      type: "WORK",
      content: "CMSメディアアップロード冗長化",
      time: "2:00",
    },
    {
      type: "MEETING",
      content: "ASTERIA⇨DF移行",
      time: "1:00",
    },
    {
      type: "REVIEW",
      content: "ソースコードレビュー",
      time: "0:30",
    },
    {
      type: "INSPECTION",
      content: "パイプライン稼働確認",
      time: "0:30",
    },
  ]);

  const addWorkItemOnClick = (work: work) => {
    // 非破壊的（イミュータブル）にするため、一度配列をコピーし追加する
    const newWorkList = [...workList];
    newWorkList.push(work);
    setWorkList(newWorkList);
  };
  return (
    <>
      <div className="w-100 flex justify-left">
        <div className="mx-5 my-5">
          <h1 className="text-xl font-bold text-gray-800">
            本日の実績
          </h1>
          <WorkItemList itemList={workList} /> {/** 作業実績一覧 */}
          <FormItem addWorkItemOnClick={addWorkItemOnClick}/>{/** 作業内容入力 */}
        </div>
      </div>
    </>
  );
}
