import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About Page Description',
  keywords: ['SEO About Page', 'Learn']
};

export default function AboutPage() {
  return (
    <>
      <span className="text-xl">About Page</span>
    </>
  )
}