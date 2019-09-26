// Handles predetermined event types and the paths to needed variables
// Not properly set up for error handling if something undefined
// _.get(item, path, default) could be used
const parseType = (type, item) => {
  switch (type) {
    case "events":
      return {
        id: item.event.id,
        title: item.event.name,
        subtitle: item.venue.name,
        image: item.performers[0].hero_image_url
      };
    case "performers":
      return {
        id: item.id,
        title: item.name,
        subtitle: item.category,
        image: item.hero_image_url
      };
    case "venues":
      return {
        id: item.id,
        title: item.name,
        subtitle: item.city,
        image: item.image_url
      };
    default:
      break;
  }
};

// Build map of responses using only first 3 items from each type of event
export const ParseSearch = response => {
  let results = new Map();

  if (response) {
    // Loop over response types
    Object.keys(response).forEach(type => {
      // Add type to map
      results.set(
        type,
        // For each response parse using pre-designed type object
        // only handle the first 3 items in response (assuming they're in order from more recent to least)
        response[type].slice(0, 3).map(item => parseType(type, item))
      );
    });
  }
  return results;
};

/* DATA
    {
        events: [],
        performers: [], 
        venues: []
        .
        .music?
        .art?
    }

*/
