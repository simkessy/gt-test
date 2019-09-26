import React from "react";

export default function SearchResults(props) {
  const { results } = props;

  let data = [];

  results.forEach(item => (data = [...data, ...item]));

  // if (data.length === 0) return <div className="no-results">No Results</div>;

  return (
    <div className="search-results">
      {data &&
        data.map(item => {
          return <Item key={item.id} {...item} />;
        })}
    </div>
  );
}

const Item = ({ title, subtitle, image, id }) => {
  return (
    <div key={id} className="search-item">
      <div className="img-container">
        <img
          src={image}
          alt={title}
          onError={e =>
            (e.target.src =
              "http://vyfhealth.com/wp-content/uploads/2015/10/yoga-placeholder1.jpg")
          }
        />
      </div>
      <div className="item-text-container">
        <p className={`item-title`}>{title}</p>
        <p className={`item-subtitle`}>{subtitle}</p>
      </div>
    </div>
  );
};
