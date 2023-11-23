import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "./../../config/index";

const Comment = ({ CourseId }) => {
  const [comment, setComment] = useState(null);
  const [showReplies, setShowReplies] = useState(false);

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/Course/GetCourseCommnets/${CourseId}`
        );
        setComment(response.data);
      } catch (error) {
        console.error("Error fetching comment:", error);
      }
    };

    fetchComment();
  }, [CourseId]);

  const fetchReplies = async ({ CommentId }, { CourseId }) => {
    try {
      const response = await axios.get(
        `${baseUrl}/Course/GetCourseReplyCommnets/${CourseId}/${CommentId}`
      );
      setComment((prevComment) => ({ ...prevComment, replies: response.data }));
    } catch (error) {
      console.error("Error fetching replies:", error);
    }
  };

  if (!comment) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{comment.text}</p>
      <button onClick={toggleReplies}>
        {showReplies ? "Hide Replies" : "Show Replies"}
      </button>

      {showReplies && (
        <div>
          {comment.replies.map((reply, index) => (
            <Reply key={index} reply={reply} />
          ))}
          {comment.replies.length > 2 && (
            <button onClick={fetchReplies}>
              {showReplies ? "Hide Replies" : "Show More Replies"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const Reply = ({ reply }) => {
  return <p style={{ marginLeft: "20px" }}>{reply.text}</p>;
};

const CourseTestimonial = () => {
  // Assuming you have a list of comment IDs to fetch from the API
  const commentIds = [1, 2];

  return (
    <div>
      {commentIds.map((commentId) => (
        <Comment key={commentId} commentId={commentId} />
      ))}
    </div>
  );
};

export default CourseTestimonial;
