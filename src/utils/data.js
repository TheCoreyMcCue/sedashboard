export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const productQuery = () => {
  const query = `*[_type == "product"]`;
  return query;
};
export const fetchProduct = (productId) => {
  const query = `*[_type == "product" && _id == '${productId}']`;
  return query;
};

export const customerQuery = () => {
  const query = `*[_type == "customer"]`;
  return query;
};

export const customerDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
    _id,
    title, 
    about,
    category,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    }
  }`;
  return query;
};
