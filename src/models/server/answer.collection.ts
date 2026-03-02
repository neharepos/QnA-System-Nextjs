import { IndexType, Permission } from "node-appwrite";
import {db, answersCollection} from "@/src/models/name"
import {databases} from "./config";

export default async function createAnswerCollection(){
    //create collection
    await databases.createCollection(db, answersCollection, answersCollection, [
        Permission.read("any"),
        Permission.read("users"),
        Permission.create("users"),
        Permission.update("users"),
        Permission.delete("users")
    ])
    console.log("Answer collecction is created");

    //creating attributes and Indexes
    await Promise.all([
        databases.createStringAttribute(db, answersCollection,
        "content", 10000, true),                
        databases.createStringAttribute(db, answersCollection,
        "authorId", 50, true),
        databases.createStringAttribute(db, answersCollection,
        "questionId", 50, true),
        
    ]);
    console.log("Answer Attributes created")

}