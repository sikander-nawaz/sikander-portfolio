import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'
import Image from 'next/image'

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

interface BlogDetailsPageProps {
    params: { slug: string }
}

export default function BlogDetailsPage({ params }: BlogDetailsPageProps) {
    const blog = blogs.find(b => b.slug === params.slug)
    if (!blog) return notFound()

    return (
        <main className="min-h-screen bg-gradient-to-br from-primary-900 via-dark-900 to-primary-800">
            <Navigation />
            <section className="pt-32 pb-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12 items-start">
                    {/* Blog Content */}
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {blog.title}
                        </h1>
                        <span className="text-sm text-primary-400 block mb-8">{blog.date}</span>
                        <article className="text-lg text-gray-300 leading-relaxed">
                            {blog.excerpt}
                        </article>
                    </div>
                    {/* Images on the right */}
                    <div className="flex flex-col gap-6 w-full md:w-72 items-center md:items-end">
                        <div className="relative w-60 h-40 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/assets/teaching-2.jpeg"
                                alt="Training 1"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 240px"
                            />
                        </div>
                        <div className="relative w-60 h-40 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/assets/teaching-3.jpeg"
                                alt="Training 2"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 240px"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
} 