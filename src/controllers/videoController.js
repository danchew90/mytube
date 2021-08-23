const videos = [
  {
    title: "first",
    rating: 5,
    comment: 4,
    createdAt: "1 minutes ago",
    views: 49,
    id: 1,
  },
];

export const home = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {};

export const getSearch = (req, res) => {};

export const getVideoEdit = (req, res) => {};
export const postVideoEdit = (req, res) => {};

export const getUpload = (req, res) => {};
export const postUpload = (req, res) => {};

export const deleteVideo = (req, res) => {};
