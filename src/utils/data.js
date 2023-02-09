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
export const fetchCustomer = (customerId) => {
  const query = `*[_type == "customer" && _id == '${customerId}']`;
  return query;
};
export const fetchUserCustomer = (userId) => {
  const query = `*[_type == "customer" && userId == '${userId}']`;
  return query;
};

export const customerQuery = () => {
  const query = `*[_type == "customer"]`;
  return query;
};

export const customerDetailQuery = (customerId) => {
  const query = `*[_type == "customer" && _id == '${customerId}']{
    _id,
    company, 
    about,
    contactName,
    contactEmail,
    vertical,
    api,
    technicalQual,
    queries,
    notes,
    postedBy,
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
