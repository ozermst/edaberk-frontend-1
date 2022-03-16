import { getStrapiMedia } from "../lib/media";
import IBlogPost from "../interfaces/IBlogPost";

import React from "react";
import NextLink from "next/link";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Link from "@mui/material/Link";

interface FeaturedBlogPosts {
  featuredBlogPosts: IBlogPost[];
}

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function FeaturedBlogPosts({ featuredBlogPosts }: FeaturedBlogPosts) {
  let cols: number = 1;
  let rows: number = 1;

  return (
    <ImageList
      sx={{ width: "100%", height: 500 }}
      variant="quilted"
      cols={4}
      rowHeight={250}
    >
      {featuredBlogPosts.map((each, index) => {
        return (
          <>
            <NextLink href={"/blog/" + each.attributes.slug} passHref>
              <ImageListItem
                key={each.id}
                // index = 0, pass: rows: 2, cols: 2
                // index = 1, pass: rows: "", cols: ""
                // index = 2, pass: rows: "", cols: ""
                // index = 3, pass: rows: "", cols: 2
                cols={
                  index == 0
                    ? 2
                    : index == 1
                    ? cols
                    : index == 2
                    ? cols
                    : index == 3
                    ? 2
                    : cols
                }
                rows={
                  index == 0
                    ? 2
                    : index == 1
                    ? rows
                    : index == 2
                    ? rows
                    : index == 3
                    ? rows
                    : rows
                }
                // cols={each.cols || 1}
                // rows={each.rows || 1}
              >
                <img
                  {...srcset(
                    getStrapiMedia(each.attributes.featured_image),
                    121,
                    rows,
                    cols
                  )}
                  alt={each.attributes.title}
                  loading="lazy"
                />
                <NextLink href={"/blog/" + each.attributes.slug}>
                  <a>
                    <ImageListItemBar title={each.attributes.title} />
                  </a>
                </NextLink>
              </ImageListItem>
            </NextLink>
          </>
        );
      })}
    </ImageList>
  );
}

export default FeaturedBlogPosts;
