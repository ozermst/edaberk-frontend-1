import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import WorkExperienceCard from "./work-experience-card";

import IWorkExperience from "../interfaces/IWorkExperience";

interface JobHistoryProps {
  workExperiences: IWorkExperience[];
}

function WorkExperiences({ workExperiences }: JobHistoryProps) {
  return (
    <div>
      <List>
        {workExperiences.map((each) => (
          <ListItem disableGutters key={each.id}>
            <WorkExperienceCard workExperience={each} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default WorkExperiences;
