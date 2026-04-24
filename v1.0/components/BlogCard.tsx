'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
    title: string
    excerpt: string
    image: string
    category: string
    date: string
    readTime: string
    slug: string
    featured?: boolean
}

const BlogCard = ({
    title,
    excerpt,
    image,
    category,
    date,
    readTime,
    slug,
    featured = false
}: BlogCardProps) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`group bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500/50 transition-all duration-300 ${featured ? 'ring-2 ring-primary-500/20' : ''
                }`}
        >
            {/* Blog Image */}
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-primary-500 text-dark-900 text-xs font-medium rounded-full">
                        {category}
                    </span>
                </div>

                {featured && (
                    <div className="absolute top-4 right-4">
                        <span className="inline-block px-3 py-1 bg-primary-400 text-dark-900 text-xs font-medium rounded-full">
                            Featured
                        </span>
                    </div>
                )}
            </div>

            {/* Blog Content */}
            <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-dark-600 mb-3">
                    <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{readTime}</span>
                    </div>
                </div>

                <h3 className="text-xl font-semibold text-dark-500 mb-3 group-hover:text-primary-500 transition-colors duration-200 line-clamp-2">
                    {title}
                </h3>

                <p className="text-dark-600 mb-4 line-clamp-3">
                    {excerpt}
                </p>

                {/* Read More Link */}
                <Link
                    href={`/blog/${slug}`}
                    className="inline-flex items-center text-primary-500 hover:text-primary-400 font-medium transition-colors duration-200 group/link"
                >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.article>
    )
}

export default BlogCard 