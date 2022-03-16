import { getStrapiMedia } from "../lib/media";
import ITenant from "../interfaces/ITenant";

import Image from "next/image";
import NextImage from "./image";

import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import Stack from "@mui/material/Stack";

interface TenantCardProps {
  tenant: ITenant;
}

function TenantCard({ tenant }: TenantCardProps) {
  return (
    <Card>
      {tenant.attributes.featured_image.data === null ? (
        <p>Image is not available</p>
      ) : (
        <Box sx={{ position: "relative", height: { xs: 450 } }}>
          <Image
            src={getStrapiMedia(tenant.attributes.featured_image)}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </Box>
      )}
      <CardContent>
        <Stack>
          <Typography variant="h6" component="h2" sx={{ whiteSpace: "nowrap" }}>
            {tenant.attributes.name}
          </Typography>
          <Typography>{tenant.attributes.job_title}</Typography>
          <Typography sx={{ whiteSpace: "nowrap" }}>
            {tenant.attributes.company}
          </Typography>
          <Stack direction="row" columnGap={1}>
            <div>
              <ContactPhoneIcon />
            </div>
            <Typography sx={{ whiteSpace: "nowrap" }}>
              {tenant.attributes.phone_number}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default TenantCard;
