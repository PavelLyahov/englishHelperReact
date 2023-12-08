let bearerToken = '';

getBearerToken = () => {
	return bearerToken;
};

setBearerToken = (token) => {
	bearerToken = token;
};

getheaders = () => {
	return {
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json'
        }
      };
};

module.exports = { getBearerToken, setBearerToken, getheaders };
