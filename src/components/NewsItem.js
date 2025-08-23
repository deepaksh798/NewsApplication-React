import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  console.log(imageUrl);
  

  return (
    <article className="group h-full">
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 h-full flex flex-col">
        {/* Source Badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg backdrop-blur-sm">
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
            {source}
          </div>
        </div>

        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={
              !imageUrl 
                ? "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                : imageUrl
            } 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            alt="News"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title */}
          <h2 className="text-xl font-bold text-slate-800 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-3">
            {truncateText(title, 100) || "No title available."}
          </h2>

          {/* Description */}
          <p className="text-slate-600 mb-4 leading-relaxed flex-1 line-clamp-3">
            {truncateText(description, 150) || "No description available."}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-sm text-slate-500 mb-4 pt-4 border-t border-slate-100">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                {(author || "U").charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-medium text-slate-700">
                  {!author ? "Unknown" : truncateText(author, 20)}
                </p>
                <p className="text-xs text-slate-500">
                  {formatDate(date)}
                </p>
              </div>
            </div>
          </div>

          {/* Read More Button */}
          <a 
            rel="noreferrer" 
            href={newsUrl} 
            target="_blank" 
            className="group/btn inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
          >
            Read Full Story
            <svg 
              className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};

export default NewsItem;