import Book from "../model/book.js"

export const add=async(req,res)=>{
    let book=await new Book({
        bookName:req.body.bookName,
        author:req.body.author,
        publisherYear:req.body.publisherYear
    })
    let saveBook=await book.save()
    res.status(201).json({data:saveBook})
}

export const getAll=async(req,res)=>{
    let book=await Book.find()
    res.status(200).json({data:book})
}

export const getById=async(req,res)=>{
    let id = req.params.id
    let book=await Book.find({"_id":id})
    res.status(200).json({data:book})
}

export const deleteBook=async(req,res)=>{
    let id = req.params.id
    let book=await Book.findByIdAndDelete({"_id":id})
    res.status(200).json({data:book})
}

export const updateBook=async(req,res)=>{
    let id = req.params.id
    // console.log(req.body);
    // let result=await Book.findById({_id:id})
    // console.log(result);
    let book=await Book.findByIdAndUpdate({"_id":id},{$set:req.body},{new:true})
    console.log(book);
    res.status(200).json({data:book})
}
