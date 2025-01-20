import { notFound } from "next/navigation"
import PostFooter from "@/app/components/PostFooter"

const posts = {
  "singularity-how-close": {
    title: "সিঙ্গুলারিটি: আমরা কতটা কাছে?",
    date: "ডিসেম্বর ৭, ২০২৩",
    content: `
      টেকনোলজিক্যাল সিঙ্গুলারিটি - সেই মুহূর্ত যখন কৃত্রিম বুদ্ধিমত্তা মানুষের 
      বুদ্ধিমত্তাকে ছাড়িয়ে যাবে। কিন্তু প্রশ্ন হল, আমরা কি সত্যিই সেই মুহূর্তের 
      কাছাকাছি এসে গেছি?

      গত কয়েক বছরে জেনারেটিভ এআই এর অভূতপূর্ব উন্নতি দেখে অনেকেই মনে করছেন 
      যে সিঙ্গুলারিটি আমাদের ভাবনার চেয়েও অনেক কাছে। GPT-4, Claude, এবং 
      অন্যান্য উন্নত ল্যাঙ্গুয়েজ মডেলগুলি ইতিমধ্যেই জটিল সমস্যা সমাধানে সক্ষম।

      তবে এখনও অনেক চ্যালেঞ্জ রয়েছে। এআই সিস্টেমগুলি এখনও সত্যিকারের বোধশক্তি 
      অর্জন করেনি। তারা তথ্যের উপর ভিত্তি করে সিদ্ধান্ত নিতে পারে, কিন্তু 
      সত্যিকারের "বুঝতে" পারে না।

      তাহলে আমরা কি করব? আমাদের উচিত:

      ১. এআই গবেষণায় নৈতিক দিকগুলি বিবেচনা করা
      ২. এআই সিস্টেমগুলির সীমাবদ্ধতা বোঝা
      ৩. মানব-কেন্দ্রিক এআই উন্নয়নে জোর দেওয়া

      সিঙ্গুলারিটি যখনই আসুক, আমাদের প্রস্তুত থাকতে হবে।
    `,
  },
  "programming-in-ai-era": {
    title: "জেনারেটিভ এআই এর যুগে প্রোগ্রামিং",
    date: "ডিসেম্বর ১, ২০২৩",
    content: `প্রোগ্রামিং এর ভবিষ্যৎ এখন এআই এর হাতে...`,
  },
  "ai-ethics": {
    title: "কৃত্রিম বুদ্ধিমত্তার নৈতিকতা",
    date: "নভেম্বর ২৯, ২০২৩",
    content: `এআই এর নৈতিক দিকগুলি নিয়ে আলোচনা...`,
  },
  "deep-learning-perspective": {
    title: "ডিপ লার্নিং: একটি নতুন দৃষ্টিভঙ্গি",
    date: "নভেম্বর ২০, ২০২৩",
    content: `ডিপ লার্নিং কীভাবে আমাদের জীবন বদলে দিচ্ছে...`,
  },
}

// Generate static params for all possible slugs
export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug: slug,
  }))
}

type Props = {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: Props) {
  const post = posts[params.slug as keyof typeof posts]

  if (!post) {
    notFound()
  }

  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-600 text-sm mb-8">{post.date}</div>
      <div className="whitespace-pre-wrap text-base leading-relaxed">{post.content}</div>
      <PostFooter />
    </article>
  )
}

