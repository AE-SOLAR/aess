export const fetchPanels = async () => {
  try {
    return (await fetch(`${process.env.REACT_APP_API_URL}/panels`)).json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const apiSignUp = async (data) => {
  console.log(data);
  console.log("Aaaa", JSON.stringify(data));
  try {
    return await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getTags = () => {
  return [
    "#Practical",
    "#Practical",
    "#Practical",
    "#Practical",
    "#Solar panels",
  ];
};

export const getPosts = () => {
  return ["Post 1", "Post 2", "Post 3", "Post 4"];
};

export const fertchUserFavarites = async (user = null) => {
  // В localStorage хранится массив ID избранных товаров
  // Если пользователь не авторизован, то берем из localStorage список избранных товаров и оправляем их на сервер
  // Иначе отправляем запрос без параметров
  const favIDs = [];
  if (!user) {
    favIDs.push(...(localStorage.getItem("favorites") || []));
  }

  try {
    return await fetch(`${process.env.REACT_APP_API_URL}/favorites`, {
      favIDs,
    });
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const addToFavorites = async (productId) => {
  try {
    return await fetch(`${process.env.REACT_APP_API_URL}/favorites`, {
      method: "POST",
      body: JSON.stringify({ productId }),
    });
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getNews = async () => {
  try {
    // READ STRAPI DOCUMENTATION TO KNOW HOW TO FETCH DATA
    return await fetch(`${process.env.REACT_APP_WEBSITE_STRAPI_URL}/news`);
  } catch (error) {
    console.error(error);
    return [];
  }
};
