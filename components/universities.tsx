import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import IUniversity from "../interfaces/IUniversity";
import UniversityCard from "./university-card";

interface UniversitiesProps {
  universities: IUniversity[];
}

function Universities({ universities }: UniversitiesProps) {
  return (
    <div>
      <List>
        {universities.map((each) => (
          <ListItem disableGutters key={each.id}>
            <UniversityCard university={each} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Universities;
