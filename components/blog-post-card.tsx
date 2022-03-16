import { getStrapiMedia } from "../lib/media";
import IBlogPost from "../interfaces/IBlogPost";

import React from "react";
import NextLink from "next/link";
import Image from "next/image";

import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";

interface BlogPostCardProps {
  blogPost: IBlogPost;
}

function BlogPostCard({ blogPost }: BlogPostCardProps) {
  return (
    <>
      <Card sx={{ maxWidth: 275 }}>
        {blogPost.attributes.featured_image.data === null ? (
          <p>Image is not available</p>
        ) : (
          <Box sx={{ position: "relative", height: { xs: 140 } }}>
            <Image
              src={getStrapiMedia(blogPost.attributes.featured_image)}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </Box>
        )}

        {/*         <CardMedia
          component="img"
          height="140"
          image={getStrapiMedia(blogPost.attributes.featured_image)}
          alt="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {blogPost.attributes.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {blogPost.attributes.description}
          </Typography>
        </CardContent>
        <CardActions>
          <NextLink href={`/blog/${blogPost.attributes.slug}`} passHref>
            <Link> Devamını okuyun</Link>
          </NextLink>
        </CardActions>
      </Card>
    </>
  );
}

export default BlogPostCard;
