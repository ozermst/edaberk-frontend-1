import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import IPost from "../../interfaces/IPost";

import { useRouter } from "next/router";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import NextImage from "../../components/image";
import Date from "../../components/date";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { NextSeo } from "next-seo";

interface PostProps {
  post: IPost;
}

function Post({ post }: PostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // if (!blogPost) return null;

  const SEO = {
    title: `Eda Ayberkin | ${post.attributes.title}`,
    description: post.attributes.description,
  };

  // const imageUrl: string = getStrapiMedia(blogPost.attributes.featured_image);

  return (
    <>
      <NextSeo {...SEO} />

      {post.attributes.featured_image.data === null ? (
        <p>Image is not available</p>
      ) : (
        <Box sx={{ position: "relative", minHeight: { xs: 300, sm: 600 } }}>
          <Image
            src={getStrapiMedia(post.attributes.featured_image)}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </Box>
      )}

      <Box sx={{ height: "3rem" }}></Box>
      <Container maxWidth="md">
        <Typography variant="h3" component="div" gutterBottom>
          {post.attributes.title}
        </Typography>
        <ReactMarkdown>{post.attributes.content}</ReactMarkdown>
        <Box>
          <Date
            dateString={post.attributes.publishedAt}
            dateFormat="LLLL	d, yyyy"
          />
        </Box>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const postsRes = await fetchAPI("/posts", { fields: ["slug"] });

  return {
    paths: postsRes.data.map((post: { attributes: { slug: string } }) => ({
      params: {
        slug: post.attributes.slug,
      },
    })),
    // fallback: false,
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const { slug } = params;

  // Run API calls in parallel
  const [postsRes] = await Promise.all([
    fetchAPI("/posts", {
      filters: {
        slug: {
          $eq: params.slug,
        },
      },
      populate: "*",
    }),
  ]);

  return {
    props: {
      post: postsRes.data[0],
    },
    revalidate: 60,
  };
}

export default Post;
