const Sections = (props) => {
  console.log(props);
  return (
    <>
      {props.data.map((elem, index) => {
        return (
          <>
            <div key={index}>
              <h2>{elem.category}</h2>
              <div className="carroussel">
                {elem.images.map((elem2, index2) => {
                  return (
                    <>
                      <div key={index2}>
                        <img src={elem2} alt="" />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Sections;
