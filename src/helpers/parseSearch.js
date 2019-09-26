const parseType = (type, item) => {
  switch (type) {
    case "events":
      return {
        title: item.event.name,
        subtitle: item.venue.name,
        image: item.performers[0].hero_image_url
      };
    case "performers":
      return {
        title: item.name,
        subtitle: item.name,
        image: item.hero_image_url
      };
    case "venues":
      return {
        title: item.name,
        subtitle: item.name,
        image: item.image_url
      };
    default:
      break;
  }
};

export const ParseSearch = response => {
  let results = new Map();

  if (response) {
    Object.keys(response).forEach(type => {
      results.set(
        type,
        response[type]
          .slice(0, 3)
          .map(item => parseType.apply(null, [type, item]))
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
    }

*/
