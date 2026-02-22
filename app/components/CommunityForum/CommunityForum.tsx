import React from "react";
import { MessageCircle, Share2, Eye, ChevronDown, Plus } from "lucide-react";

interface Post {
  id: number;
  name: string;
  avatar?: string;
  date: string;
  title: string;
  content: string;
  views: number;
  comments: number;
  likes: number;
}

const posts: Post[] = [
  {
    id: 1,
    name: "Daniel Jefferson",
    date: "Feb 19, 2:51 PM",
    title: "What's the one thing you wish existed that doesn't yet?",
    content: "Who do you think will win the FIFA World Cup 2026?",
    views: 3146,
    comments: 2,
    likes: 9,
  },
  {
    id: 2,
    name: "Rush Kumar",
    date: "Feb 12, 2:17 AM",
    title: "What's in your mind right now?",
    content:
      "I wish there was an affordable, non-invasive continuous health monitoring system that could detect diseases years before symptoms appear - like an early warning system for your body. It would help everyone, especially those without regular...",
    views: 3247,
    comments: 0,
    likes: 110,
  },
];

export default function CommunityForum() {
  return (
    <div className=" px-3 py-1">
      <div className="max-w-4xl mx-auto border border-teal-500 rounded-2xl p-6 bg-gradient-to-b from-teal-50 to-white">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-xs tracking-widest text-gray-400 font-semibold">
              MAIN FEED
            </p>

            <h1 className="text-xl font-semibold text-gray-800">
              Community Forum
            </h1>
          </div>

          <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-xl shadow-md font-medium">
            <Plus size={18} />
            New Post
          </button>
        </div>

        <div className="space-y-5 max-h-[500px] overflow-y-auto pr-2">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border border-teal-400 rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full border-2 border-teal-400 flex items-center justify-center bg-teal-100 font-semibold text-teal-700">
                  {post.name.charAt(0)}
                </div>

                <div>
                  <p className="font-medium text-gray-800">{post.name}</p>

                  <p className="text-xs text-gray-400">{post.date}</p>
                </div>
              </div>

              <h3 className="font-semibold text-gray-800 mb-1">{post.title}</h3>

              <p className="text-gray-600 text-sm mb-2">{post.content}</p>

              <button className="text-teal-600 text-sm font-medium hover:underline mb-3">
                View Post
              </button>

              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
                    ⬆ {post.likes}
                  </div>

                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
                    <MessageCircle size={16} />
                    {post.comments}
                    <ChevronDown size={14} />
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-500">
                  <Share2
                    size={18}
                    className="cursor-pointer hover:text-teal-500"
                  />

                  <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm">
                    <Eye size={16} />
                    {post.views}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
