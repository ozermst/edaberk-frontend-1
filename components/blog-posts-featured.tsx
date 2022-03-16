import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";

import { getStrapiMedia } from "../lib/media";

import IBlogPost from "../interfaces/IBlogPost";

interface BlogPostFeaturedProps {
  blogPost: IBlogPost;
}

function BlogPostFeatured({ blogPost }: BlogPostFeaturedProps) {
  console.log(
    "Featured Blog URL: ",
    getStrapiMedia(blogPost.attributes.featured_image)
  );

  return (
    <>
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

      <Container maxWidth="md">
        <Stack mt={3}>
          <Typography variant="h4" component="h2" gutterBottom>
            {blogPost.attributes.title}
          </Typography>

          <Typography>{blogPost.attributes.description}</Typography>

          <NextLink href={`/blog/${blogPost.attributes.slug}`} passHref>
            <Link> Devamını okuyun</Link>
          </NextLink>
        </Stack>
      </Container>
    </>
  );
}

export default BlogPostFeatured;
