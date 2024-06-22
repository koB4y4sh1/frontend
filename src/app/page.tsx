
import TodoForm from "@/components/Todo/TodoForm";
import { TodoItemProps } from "@/components/Todo/TodoItem";
import TodoItemList from "@/components/Todo/TodoItemList";
const todoItemList: TodoItemProps[] = [
  {
    type: "WORK",
    content: "データ利用申請 No.70",
    time: "1:30"
  },
  {
    type: "WORK",
    content: "【開発】CMSメディアアップロード冗長化",
    time: "2:00"
  },
  {
    type: "MEETING",
    content: "【エンハンス課題】ASTERIA⇨DF移行",
    time: "1:00",
  },
  {
    type: "REVIEW",
    content: "ソースコードレビュー",
    time: "0:30",
  },
  {
    type: "INSPECTION",
    content: "【監視】パイプライン稼働確認",
    time: "0:30"
  }
]
export default function Home() {
  return (
    <>
      <div className="w-100 flex justigy-center">
        <div className="mx-5 my-5">
          <h1 className="text-xl font-bold text-green-500">本日の実績になります。</h1>
          {/* // フォントサイズ大きめ、緑で太文字のHelloWorld */}
          <TodoItemList data={todoItemList}/>
          <TodoForm />
        </div>
      </div>
    </>
  );
}
