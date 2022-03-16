import NextLink from "next/link";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Link from "@mui/material/Link";

import IInterests from "../interfaces/IInterest";

interface InterestsProps {
  interests: IInterests[];
}

function Interests({ interests }: InterestsProps) {
  return (
    <Box>
      <List sx={{ columns: { sm: "2 auto", md: "3 auto" } }}>
        {interests.map((each) => (
          <ListItem disablePadding key={each.id}>
            {each.attributes.content ? (
              <NextLink href={`/interests/` + each.attributes.slug} passHref>
                <Link>{each.attributes.name}</Link>
              </NextLink>
            ) : (
              each.attributes.name
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Interests;
