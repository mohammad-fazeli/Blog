import axios from "axios";

const basedURL = "http://localhost:3004/";

const handleSuccess = ({ response, type, next }) => {
  next({
    data: response.data,
    type,
  });
};
const handleFailed = ({ error, type, next }) => {
  next({
    error,
    type,
  });
};

const apiMiddleware = (store) => (next) => (action) => {
  const { isEndpointCall } = action;

  if (isEndpointCall) {
    const { method, type, successType, failedType } = action;
    next({ type });

    axios(`${basedURL}${action.endpoint}`, {
      method,
    })
      .then((response) => handleSuccess({ response, type: successType, next }))
      .catch((error) => handleFailed({ error, type: failedType, next }));
  } else {
    next(action);
  }
};

export default apiMiddleware;
