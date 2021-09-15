import axios from "axios";

const basedURL = "http://localhost:3004/";

const handleSuccess = ({ response, type, next, reduxData }) => {
  next({
    data: response.data,
    type,
    ...response,
    ...reduxData,
  });

  return new Promise((resolve, reject) => {
    resolve(response);
  });
};
const handleFailed = ({ error, type, next }) => {
  next({
    error,
    type,
  });
  return new Promise((resolve, reject) => {
    reject(error);
  });
};

const apiMiddleware = (store) => (next) => (action) => {
  const { isEndpointCall } = action;

  if (isEndpointCall) {
    const { method, type, successType, failedType, reduxData = {} } = action;
    next({ type });

    return axios(`${basedURL}${action.endpoint}`, {
      method,
    })
      .then((response) =>
        handleSuccess({ response, type: successType, next, reduxData })
      )
      .catch((error) => handleFailed({ error, type: failedType, next }));
  } else {
    next(action);
  }
};

export default apiMiddleware;
