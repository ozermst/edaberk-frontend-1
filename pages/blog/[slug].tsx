import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import IBlogPost from "../../interfaces/IBlogPost";

import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import NextImage from "../../components/image";
import Date from "../../components/date";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { NextSeo } from "next-seo";

interface BlogPostProps {
  blogPost: IBlogPost;
}

function BlogPost({ blogPost }: BlogPostProps) {
  const SEO = {
    title: `Eda Ayberkin | ${blogPost.attributes.title}`,
    description: blogPost.attributes.description,
  };

  // const imageUrl: string = getStrapiMedia(blogPost.attributes.featured_image);

  return (
    <>
      <NextSeo {...SEO} />

      {blogPost.attributes.featured_image.data === null ? (
        <p>Image is not available</p>
      ) : (
        <Box sx={{ position: "relative", minHeight: { xs: 300, sm: 600 } }}>
          <Image
            src={getStrapiMedia(blogPost.attributes.featured_image)}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </Box>
      )}

      <Box sx={{ height: "3rem" }}></Box>
      <Container maxWidth="md">
        <Typography variant="h3" component="div" gutterBottom>
          {blogPost.attributes.title}
        </Typography>
        <ReactMarkdown>{blogPost.attributes.content}</ReactMarkdown>
        <Box>
          <Date
            dateString={blogPost.attributes.publishedAt}
            dateFormat="LLLL	d, yyyy"
          />
        </Box>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const blogPostsRes = await fetchAPI("/blog-posts", { fields: ["slug"] });

  return {
    paths: blogPostsRes.data.map(
      (blogPost: { attributes: { slug: string } }) => ({
        params: {
          slug: blogPost.attributes.slug,
        },
      })
    ),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { slug } = params;

  // Run API calls in parallel
  const [blogPostsRes] = await Promise.all([
    fetchAPI("/blog-posts", {
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
      blogPost: blogPostsRes.data[0],
    },
  };
}

/* export async function getServerSideProps({ params }: any) {
  const { slug } = params;

  // Run API calls in parallel
  const [blogPostRes] = await Promise.all([
    fetchAPI("/blog-posts", {
      filters: {
        slug: params.slug,
      },
      populate: "*",
    }),
  ]);

  return {
    props: {
      blogPost: blogPostRes.data[0],
    },
  };
} */

export default BlogPost;
