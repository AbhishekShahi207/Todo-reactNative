//here we will create function to malipulate with database eg:-get,create,delete,update
//get is query
//create,update and delete are Mutation.

import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

//get all todos
export const getTodos = query({
  handler: async (ctx) => {
    const todos = await ctx.db.query("todos").order("desc").collect();
    return todos;
  },
});

//add new todo to database
export const addTodo = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    const todoId = ctx.db.insert("todos", {
      text: args.text,
      isCompleted: false,
    });
    return todoId;
  },
});

//toggle todo
export const toggleTodo = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id);
    if (!todo) throw new ConvexError("Todo not found");

    await ctx.db.patch(args.id, {
      isCompleted: !todo.isCompleted,
    });
  },
});

//delete a todo
export const deleteTodo = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

//update a todo
export const updateTodo = mutation({
  args: {
    id: v.id("todos"),
    text: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { text: args.text });
  },
});


//clear all todo
export const clearAllTodo = mutation({
    handler:async (ctx)=>{
        //fetch all todos
        const todos =await ctx.db.query("todos").collect();

        //delete all todos
        for(const todo of todos){
            await ctx.db.delete(todo._id)
        }
        return {deleteCount:todos.length}
    }
})
