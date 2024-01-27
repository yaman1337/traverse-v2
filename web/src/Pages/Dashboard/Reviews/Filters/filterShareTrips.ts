function filterByActive(params: { data: any[] }) {
  const { data } = params;
  const newData = data.filter((item) => item.status === "active");
  return newData;
}

// filter by total number of proposals.
function filterByProposal(params: { data: any[] }) {
  const { data } = params;
  const newData = data.slice().sort((a, b) => {
    if (a.total_proposals === null) {
      a.total_proposals = 0;
    }

    if (b.total_proposals === null) {
      b.total_proposals = 0;
    }

    return a.total_proposals - b.total_proposals;
  });

  return newData;
}

function filterShareTrips(data: any[], filterType: string) {
  const params = { data, filterType };

  let newData: any[] = [];
  switch (filterType) {
    case "Active":
      newData = filterByActive(params);
      break;
    case "Proposal":
      newData = filterByProposal(params);
      break;
    default:
      newData = data.slice(); // Use slice to create a copy of the array
  }
  return newData;
}

export default filterShareTrips;