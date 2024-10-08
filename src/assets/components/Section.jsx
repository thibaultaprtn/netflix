const Section = (props) => {
  console.log("props de section :", props);
  console.log("props.category de section :", props.category);
  console.log("props.movies de section :", props.movies);
  return (
    <>
      <h2>{props.category}</h2>
      <div className="carroussel">
        {props.movies.map((elem, index) => {
          return (
            <>
              <div key={index}>
                <img src={elem} alt="" />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Section;
