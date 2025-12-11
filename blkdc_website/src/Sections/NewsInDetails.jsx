import React from "react";
import { MessageCircle, Share2, ThumbsUp, ThumbsDown, User } from "lucide-react";

const NewsInDetails = ({
  image = "/src/assets/Images/news.webp",
  postedBy = "Balaka District Council",
  title = "News Title Goes Here",
  details = "This is the full detailed paragraph for the news. It can be several sentences or paragraphs describing the news in detail. You can pass this as a prop or fetch from your backend.",
  author = "Story Author",
  comments = 12,
  shares = 8,
  likes = 34,
  dislikes = 2,
}) => {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      {/* News Image */}
      <div className="w-full h-[540px] rounded-xl overflow-hidden mb-8">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Posted By */}
      <p className="text-sm text-[#4a4a4a] mb-2">
        Posted by: <span className="font-semibold">{postedBy}</span>
      </p>
      {/* News Title */}
      <h1 className="text-3xl font-bold text-[#003521] mb-4">{title}</h1>
      {/* News Details */}
      <p className="text-lg text-[#0b0b0d] mb-8 leading-relaxed">{details}</p>
      {/* Author */}
      <h4 className="text-base font-semibold text-[#4880b1] mb-8 flex items-center gap-2">
        <User className="w-5 h-5" />
        {author}
      </h4>
      {/* Stats Row */}
      <div className="flex items-center gap-8 border-t pt-6">
        <div className="flex items-center gap-2 text-[#003521]">
          <MessageCircle className="w-5 h-5" />
          <span>{comments} Comments</span>
        </div>
        <div className="flex items-center gap-2 text-[#4880b1]">
          <Share2 className="w-5 h-5" />
          <span>{shares} Shares</span>
        </div>
        <div className="flex items-center gap-2 text-green-600">
          <ThumbsUp className="w-5 h-5" />
          <span>{likes} Likes</span>
        </div>
        <div className="flex items-center gap-2 text-red-500">
          <ThumbsDown className="w-5 h-5" />
          <span>{dislikes} Dislikes</span>
        </div>
      </div>
    </section>
  );
};

export default NewsInDetails;