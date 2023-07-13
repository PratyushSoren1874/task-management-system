import Todo from '@/app/model/Todo';
import { redirect } from "next/navigation";
import dbConnect from '@/app/utils/dbConnect';

export default async function edit({params}){
    dbConnect()
    const todos = await Todo.findOne({_id: params.id})

    // function to save the updated
    async function updateTodo(data){
        "use server"
        let title = data.get("title")?.valueOf();
        let description = data.get("description")?.valueOf();
        let status = data.get("status")?.valueOf();
        let updatedTodo = await Todo.findByIdAndUpdate({_id: params.id},{title, description, status});
        console.log(updatedTodo);
        redirect('/show')
    }

    return (
        <main className="m-10 space-y-5">
        <h1 className="text-xl font-bold"> Create Task </h1>
        <form action={updateTodo}>
          <div>
            <label htmlFor="title" className="text-lg"> Title </label>
            <br />
            <input type="text" name="title" id="title" className='w-[100%] md:w-[50%] bg-slate-200 h-10 p-3 rounded-full' defaultValue={todos.title} />
            </div>
            <br/>
            <div>
            <label htmlFor="todo" className="text-lg"> Description </label>
            <br />
            <input type="text" name="description" id="description" className='w-[100%] md:w-[50%] bg-slate-200 h-10 p-3 rounded-full' defaultValue={todos.description} />
            </div>
            <br/>
            <div>
            <label htmlFor="todo" className="text-lg"> Status </label>
            <br />
            <input type="text" name="status" id="status" className='w-[100%] md:w-[50%] bg-slate-200 h-10 p-3 rounded-full' defaultValue={todos.status} />
            </div>
            <br/>
            <br/>
            <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit  tracking-widest rounded-full hover:bg-black hover:text-white"> Submit </button>
        </form>
        </main>
    )
}