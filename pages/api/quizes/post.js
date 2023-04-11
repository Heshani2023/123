/**

Updates the marks of a quiz in the MongoDB database.
@param {Object} req - The HTTP request object containing the query parameters and the request body.
@param {Object} res - The HTTP response object.
@returns {Promise} A Promise that resolves with the updated quiz object in JSON format.
@throws {Error} If an error occurs while updating the quiz object.

*/

import clientPromise from "../../../src/lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("test");

    // Extract the quiz ID and marks from the HTTP request
    const { id } = req.query;
    const { marks } = req.body;

    // Update the quiz marks in the "quizes" collection
    const post = await db.collection("users").updateOne(
      {
        _id: ObjectId(id),
      },
      {
        $set: {
          marks: marks,
        },
      }
    );

    
  // Return the updated quiz object as JSON
    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};