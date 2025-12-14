import './Blog.css'

function Blog() {
  return (
    <div className="blog-page">
      <div className="container">
        <section className="blog-hero">
          <h1>Blog</h1>
          <p className="subtitle">
            Thoughts on engineering, investing, and entrepreneurship
          </p>
        </section>
        
        <section className="blog-posts">
          <div className="blog-placeholder">
            <p>Coming soon. I'll be sharing my thoughts and experiences here.</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Blog
