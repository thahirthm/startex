import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import b1 from "../../../public/assets/images/about/b1.png"

const blogPosts = [
  {
    id: 1,
    title: "Difference Between FZE and FZCO in Dubai",
    date: "20 Mar 2025",
    tag: "Freezone",
    image: b1,
    link: "/blog/fze-vs-fzco"
  },
  {
    id: 2,
    title: "How to Start a Business in UAE Mainland",
    date: "15 Mar 2025",
    tag: "Mainland",
    image: b1,
    link: "/blog/start-business-mainland"
  },
  {
    id: 3,
    title: "Understanding UAE Legal Structures",
    date: "10 Mar 2025",
    tag: "Legal",
    image: b1,
    link: "/blog/uae-legal-structures"
  },
  // Add more as needed
];

function BlogListing() {
  return (
    <div className="pt-10 px-4 md:px-8 lg:px-[90px]">
      <h4 className="md:text-[35px] text-[20px] font-[500] text-gradient">Recent Blog Posts</h4>

      <div className="flex flex-wrap gap-6 pt-10">
        {blogPosts.map((post) => (
          <Link key={post.id} href={post.link} className="md:w-[32%] w-full block group">
            <div className="relative overflow-hidden rounded-md">
              <Image 
                src={post.image}
                width={500}
                height={500}
                alt={post.title}
                className="w-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="bg-[#00000079] border-amber-700 border py-1 px-3 rounded-md w-fit absolute top-5 right-5 z-50">
                <p className="text-white text-sm">{post.tag}</p>
              </div>
            </div>

            <h3 className="text-white text-[20px] font-[400] pt-5 group-hover:text-amber-400 transition-colors">{post.title}</h3>
            <p className="text-[16px] font-[300] pt-3 text-white">{post.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogListing;
