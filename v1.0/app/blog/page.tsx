import Navigation from '@/components/Navigation'
import Link from 'next/link'

const blogs = [
    {
        title: 'Building Scalable React Applications',
        date: 'Dec 15, 2024',
        excerpt: 'Learn the best practices for building large-scale React applications with proper state management and performance optimization.',
        slug: 'building-scalable-react-applications'
    },
    {
        title: "Next.js 14: What's New and Exciting",
        date: 'Dec 10, 2024',
        excerpt: 'Explore the latest features in Next.js 14 including the new app router, server components, and improved performance.',
        slug: 'nextjs-14-whats-new'
    },
    {
        title: 'Mastering TypeScript for Better Code',
        date: 'Dec 5, 2024',
        excerpt: 'A comprehensive guide to using TypeScript effectively in your projects for better type safety and developer experience.',
        slug: 'mastering-typescript'
    }
]

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-dark-900">
            <Navigation />
            <section className="pt-32 pb-20 bg-dark-900">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center">
                        My <span className="text-primary-500">Blog</span>
                    </h1>
                    <p className="text-xl text-dark-600 mb-12 text-center">
                        Insights, tutorials, and thoughts on web development and technology.
                    </p>
                    <div className="space-y-10">
                        {blogs.map((blog, idx) => (
                            <div key={idx} className="bg-dark-800 rounded-xl border border-dark-700 p-8 hover:border-primary-500/50 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                    <h2 className="text-2xl font-semibold text-dark-500 mb-2 md:mb-0">{blog.title}</h2>
                                    <span className="text-sm text-primary-500">{blog.date}</span>
                                </div>
                                <p className="text-dark-600 mb-4">{blog.excerpt}</p>
                                <Link href={`/blog/${blog.slug}`} className="text-primary-500 hover:text-primary-400 font-medium transition-colors duration-200">
                                    Read More &rarr;
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
} 