import Todo from "./model/Todo";
import { redirect } from "next/navigation";
import dbConnect from "./utils/dbConnect";

export default function Home() {
// Function to save todo
async function newTodo(data){
  "use server"
  let title = data.get("title")?.valueOf();
  let description = data.get("description")?.valueOf();
  let status = data.get("status")?.valueOf();

  try {
    dbConnect()
    let newTodo = new Todo ({ title, description, status });
    await newTodo.save()
    console.log(newTodo)
  } catch (error) {
    console.error(error)
  }
  redirect("/show");
}

  return (
    <main className="m-10 space-y-5">
    <h1 className="text-xl font-bold"> Create Task </h1>
    <form action={newTodo}>
      <div>
        <label htmlFor="title" className="text-lg"> Title </label>
        <br />
        <input type="text" name="title" id="title" className='w-[100%] bg-slate-200 h-10 p-3 rounded-full' />
        </div>
        <br/>
        <div>
        <label htmlFor="todo" className="text-lg"> Description </label>
        <br />
        <input type="text" name="description" id="description" className='w-[100%] bg-slate-200 h-10 p-3 rounded-full' />
        </div>
        <br/>
        <div>
        <label htmlFor="todo" className="text-lg"> Status </label>
        <br />
        <input type="text" name="status" id="status" className='w-[100%] bg-slate-200 h-10 p-3 rounded-full' />
        </div>
        <br/>
        <br/>
        <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit tracking-widest rounded-full hover:bg-black hover:text-white"> Submit </button>
    </form>
    </main>
  )
}