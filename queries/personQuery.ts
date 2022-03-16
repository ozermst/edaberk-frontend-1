export const personQuery = `
  query PersonQuery {
    person {
      id
      full_name
      title
      bio
      profile_image { id }
      company_id {
          id
          name
          phone {
              number
            }
        }
      expertise {
          id
          area
      }
      job_history {
          id
          date_from
          date_to
          title
          employer
          city
          country
      }
      education {
        id
        date_from
        date_to
        field_of_study
        school_name
        city
        country
    }
    }
  }
`;
