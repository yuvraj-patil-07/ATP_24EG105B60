import React, { useEffect, useState, useRef } from "react";
import { useAuth } from "../stores/authStore";
import { useNavigate } from "react-router";
import axios from "axios";
import {
  articleGrid,
  articleCardClass,
  articleTitle,
  ghostBtn,
  loadingClass,
  errorClass,
  timestampClass,
} from "../styles/common.js";

function Home() {
  const currentUser = useAuth((state) => state.currentUser);
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const navigate = useNavigate();
  const articlesRef = useRef(null);

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        let res = await axios.get(
          `${import.meta.env.VITE_API_URL}/user-api/articles`,
          { withCredentials: true }
        );
        if (res.status === 200) {
          setArticles(res.data.payload || []);
        }
      } catch (err) {
        setError(err.response?.data?.error || "Failed to fetch articles");
      } finally {
        setLoading(false);
      }
    };
    getArticles();
  }, []);

  const formatDateIST = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const handleExploreClick = () => {
    articlesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* HERO SECTION */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1d1d1f] tracking-tight leading-tight mb-6">
          Welcome to MyBlog
        </h1>
        <p className="text-lg sm:text-xl text-[#6e6e73] max-w-2xl mx-auto leading-relaxed mb-8">
          A modern blogging platform where thoughts meet readers. Explore articles, share insights, and engage in meaningful conversations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleExploreClick}
            className="bg-[#0066cc] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#004499] transition cursor-pointer text-sm sm:text-base w-full sm:w-auto"
          >
            Explore Articles
          </button>
          {!isAuthenticated && (
            <button
              onClick={() => navigate("/login")}
              className="border border-[#d2d2d7] text-[#1d1d1f] font-semibold px-6 py-3 rounded-full hover:bg-[#f5f5f7] transition cursor-pointer text-sm sm:text-base w-full sm:w-auto"
            >
              Sign In to Write & Comment
            </button>
          )}
        </div>
      </div>

      {/* ARTICLES SECTION */}
      <div ref={articlesRef} className="max-w-5xl mx-auto px-6 py-12 border-t border-[#e8e8ed]">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mb-8 tracking-tight">
            Latest Articles
          </h2>

          {loading && <p className={loadingClass}>Loading latest articles...</p>}
          {error && <p className={errorClass}>{error}</p>}

          {!loading && !error && articles.length === 0 && (
            <p className="text-[#a1a1a6] text-center py-12 text-sm sm:text-base">
              No articles published yet. Check back soon!
            </p>
          )}

          {!loading && !error && articles.length > 0 && (
            <div className={`${articleGrid} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
              {articles.map((articleObj) => (
                <div
                  key={articleObj._id}
                  className={`${articleCardClass} border border-[#e8e8ed] rounded-2xl flex flex-col h-full`}
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <span className="text-[10px] font-semibold text-[#0066cc] uppercase tracking-widest block mb-1">
                        {articleObj.category || "General"}
                      </span>
                      <h3 className={`${articleTitle} line-clamp-2`}>
                        {articleObj.title}
                      </h3>
                      <p className="text-sm text-[#6e6e73] mt-2 line-clamp-3 leading-relaxed">
                        {articleObj.content}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-[#e8e8ed]/60 flex items-center justify-between">
                      <span className={`${timestampClass} text-xs`}>
                        {formatDateIST(articleObj.createdAt)}
                      </span>
                      <button
                        onClick={() =>
                          navigate(`/article/${articleObj._id}`, {
                            state: articleObj,
                          })
                        }
                        className={`${ghostBtn} font-semibold`}
                      >
                        Read Article →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;