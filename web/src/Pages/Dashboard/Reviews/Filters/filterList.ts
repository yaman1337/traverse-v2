function filterByRecent(params: { data: any[] }) {
  const { data } = params;
  console.log("filter by recent.");
  const newData = data.slice().sort((a, b) => {
    const dateA = new Date(a.$createdAt);
    const dateB = new Date(b.$createdAt);
    return dateB.getTime() - dateA.getTime();
  });

  return newData;
}

function filterByRating(params: { data: any[] }) {
  const { data } = params;
  console.log("filter by rating.");
  const newData = data.slice().sort((a, b) => b.rating - a.rating);
  return newData;
}

function filterByOldest(params: { data: any[] }) {
  const { data } = params;
  console.log("filter by oldest.");
  const newData = data.slice().sort((a, b) => {
    const dateA = new Date(a.$createdAt);
    const dateB = new Date(b.$createdAt);
    return dateA.getTime() - dateB.getTime();
  });

  return newData;
}

function filterData(data: any[], filterType: string) {
  const params = { data };
  let newData: any[] = [];

  switch (filterType) {
    case "Recent":
      newData = filterByRecent(params);
      break;
    case "Oldest":
      newData = filterByOldest(params);
      break;
    case "Ratings":
      newData = filterByRating(params);
      break;
    default:
      newData = data;
  }

  return newData;
}

export default filterData;