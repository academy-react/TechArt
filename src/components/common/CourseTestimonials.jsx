import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "./../../config/index";
import { useParams } from "react-router-dom";

const CourseTestimonial = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Function to fetch comments from the first API
    const fetchComments = async () => {
      try {
        const courseId = "6c0a12ea-6a73-ee11-b6c7-ca6d3e095898";
        const response = await axios.get(
          `${baseUrl}/Course/GetCourseCommnets/${courseId}`
        );
        const commentsWithReplies = await Promise.all(
          response.data.map(async (comment) => {
            const replies = await fetchReplies(courseId, comment.id);
            return { ...comment, replies };
          })
        );
        setComments(commentsWithReplies);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    // Function to fetch replies from the second API
    const fetchReplies = async (courseId, commentId) => {
      try {
        const response = await axios.get(
          `${baseUrl}/Course/GetCourseReplyCommnets/${courseId}/${commentId}`
        );
        return response.data;
      } catch (error) {
        console.error(
          `Error fetching replies for comment ${commentId}:`,
          error
        );
        return []; // Return an empty array if fetching replies fails
      }
    };

    // Fetch comments from the first API when the component mounts
    fetchComments();
  }, []); // Empty dependency array to trigger the effect only once when the component mounts

  const handleLike = (commentId) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
    );
  };

  const toggleReplies = async (courseId, commentId) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, showReplies: !comment.showReplies }
          : comment
      )
    );
  };

  const handleReply = (commentId) => {
    console.log(`Replying to comment with ID ${commentId}`);
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      {comments.map((comment) => (
        <div key={comment.id} className="bg-white p-4 rounded-lg shadow mb-4">
          {/* Comment header with user information */}
          <div className="flex items-center mb-2">
            <img
              src={comment.profilePic}
              alt={`${comment.title}'s profile`}
              className="w-8 h-8 rounded-full mr-2"
            />
            <p className="font-bold">{comment.title}</p>
          </div>

          {/* Comment text */}
          <p className="text-gray-700">{comment.discribe}</p>

          {/* Like and Show Replies buttons */}
          <div className="flex items-center mt-4">
            <button
              onClick={() => handleLike(comment.id)}
              className="flex items-center text-gray-500 mr-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 mr-1 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              {comment.likes}
            </button>
            <button
              onClick={() => toggleReplies(comment.courseId, comment.id)}
              className="flex items-center text-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-1 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
              {comment.showReplies ? "Hide Replies" : "Show Replies"}
            </button>
          </div>

          {/* Render replies if visible */}
          {comment.showReplies && (
            <div className="ml-8 mt-4 text-gray-500">
              {comment.replies.map((reply) => (
                <div key={reply.id} className="mb-2">
                  <div className="flex items-center mb-2">
                    <img
                      src={reply.profilePic}
                      alt={`${reply.title}'s profile`}
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <p className="font-semibold">{reply.title}</p>
                  </div>
                  <p>{reply.discribe}</p>
                  <button
                    onClick={() => handleLike(reply.id)}
                    className="text-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 mr-1 inline-block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                    {reply.likes}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseTestimonial;
