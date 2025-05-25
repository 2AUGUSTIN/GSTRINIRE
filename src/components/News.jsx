import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample news data - replace with API call in production
  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          const mockNews = [
            {
              id: 1,
              title: "Annual Science Fair Winners Announced",
              excerpt: "Students showcase innovative projects at the 2024 Science Fair with record participation.",
              content: "Full content about the science fair winners...",
              date: "2024-05-15",
              category: "academics",
              image: "https://gstrinire.vercel.app/assets/download1-2FIkN524.jpg",
              featured: true
            },
            {
              id: 2,
              title: "School Football Team Wins Regional Championship",
              excerpt: "Our team brought home the trophy after an exciting final match.",
              content: "Details about the football championship...",
              date: "2024-05-10",
              category: "sports",
              image: "https://gstrinire.vercel.app/assets/download1-2FIkN524.jpg"
            },
            {
              id: 3,
              title: "New Library Resources Available",
              excerpt: "The school library has added 500 new books to its collection.",
              content: "Information about new library resources...",
              date: "2024-05-05",
              category: "facilities",
              image: "https://gstrinire.vercel.app/assets/download1-2FIkN524.jpg"
            },
            {
              id: 4,
              title: "Cultural Week Celebration Photos",
              excerpt: "View photos from our vibrant Cultural Week celebrations.",
              content: "Cultural week event details...",
              date: "2024-04-28",
              category: "events",
              image: "https://gstrinire.vercel.app/assets/download1-2FIkN524.jpg",
              featured: true
            }
          ];
          setNews(mockNews);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'academics', name: 'Academics' },
    { id: 'sports', name: 'Sports' },
    { id: 'events', name: 'Events' },
    { id: 'facilities', name: 'Facilities' }
  ];

  const filteredNews = news.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = news.filter(item => item.featured);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-4 text-gray-600">Loading news...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            School News & Announcements
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Stay updated with the latest happenings at our school
          </p>
        </header>

        {/* Featured News Slider */}
        {featuredNews.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredNews.map(item => (
                <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full mb-2">
                        {categories.find(cat => cat.id === item.category)?.name}
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        <Link to={`/news/${item.id}`} className="hover:underline">
                          {item.title}
                        </Link>
                      </h3>
                      <p className="text-gray-200 mt-1 line-clamp-2">{item.excerpt}</p>
                      <p className="text-gray-300 text-sm mt-2">{new Date(item.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* News Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  activeCategory === category.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="Search news..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* News Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.length > 0 ? (
            filteredNews.map(item => (
              <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-blue-600 uppercase">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <Link to={`/news/${item.id}`} className="hover:text-blue-600 hover:underline">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                  <Link 
                    to={`/news/${item.id}`} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No news found</h3>
              <p className="mt-1 text-gray-500">Try changing your search or filter criteria</p>
            </div>
          )}
        </section>

        {/* Newsletter Subscription */}
        <section className="mt-16 bg-blue-50 rounded-xl p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900">Stay Updated</h2>
            <p className="mt-2 text-gray-600">
              Subscribe to our newsletter to receive the latest news and announcements directly in your inbox
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

NewsPage.propTypes = {
  // Add prop types if needed
};

export default NewsPage;