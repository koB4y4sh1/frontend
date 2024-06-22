const TodoItem = () => {
    return (
        <div className="w-full p-2 mt-5 overflow-hidden border border-solid border-gray-200 bg-white rouded-lg shadow-md dark:bg-gray-800">
            <div className="px-4 py-2 -mx-3">
                <form className="mx-3 ">
                    <div>
                        <input type="text" className="w-full" placeholder="本日の実績を入力してください。"></input>
                    </div>
                    <div className="mt-3">
                    <button type="submit" className="w-full bg-stone-300 rounded-lg shadow-md " >追加</button>
                    </div>
           
                </form>
            </div>
        </div>
    )
}

export default TodoItem;
