function ProductItem(props) {
  const { name, cost, imgUrl, handleOnClick } = props;
  return (
    //when html elements are more than one they must be wrraped,
    //the wrraper can be <div></div> or invisible tags for example empty tag <></> or <React.Fragment></React.Fragment>
    <article onClick={handleOnClick}>
      <p>Name: {name}</p>
      <p>Cost: {cost}</p>
      <img width="100" height="100" src={imgUrl} alt="Empty" />
    </article>
  );
}

export default ProductItem;
