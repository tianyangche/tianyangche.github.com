import './Blog.css'

const teasers = [
  {
    title: 'Designing For Scale Without Losing Velocity',
    tag: 'Engineering',
    meta: 'Drafting now',
  },
  {
    title: 'How I Evaluate Long-Term Investment Moats',
    tag: 'Investing',
    meta: 'Coming soon',
  },
  {
    title: 'Building Ventures With Real User Pull',
    tag: 'Entrepreneurship',
    meta: 'In progress',
  },
]

function Blog() {
  return (
    <div className="blog-page">
      <div className="container">
        <section className="blog-hero reveal">
          <span className="section-label">Writing</span>
          <h1>Blog</h1>
          <p className="subtitle">Notes on engineering, investing, and building durable products.</p>
        </section>

        <section className="blog-posts reveal">
          <div className="teaser-grid">
            {teasers.map((post) => (
              <article key={post.title} className="teaser-card surface">
                <p className="teaser-tag">{post.tag}</p>
                <h3>{post.title}</h3>
                <p className="teaser-meta">{post.meta}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Blog
