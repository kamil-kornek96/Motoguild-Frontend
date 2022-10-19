export async function getGroup(currentGroup) {
  try {
    const res = await fetch(
      `https://localhost:3333/api/groups/${currentGroup}`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getRoutesForSlider() {
  try {
    const res = await fetch(
      "https://localhost:3333/api/routes?page=1&itemsperpage=5&orderByRating=true",
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllRoutes() {
  try {
    const res = await fetch("https://localhost:3333/api/routes/all", {
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getGroups(currentPage, itemsPerPage) {
  try {
    const res = await fetch(
      `https://localhost:3333/api/groups?page=${currentPage}&itemsperpage=${itemsPerPage}`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function createNewRoute(newRoute) {
  try {
    const res = await fetch("https://localhost:3333/api/routes/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(newRoute),
    });
    const data = await res.json();
    return data.id;
  } catch (error) {
    console.log(error);
  }
}

export async function createNewGroup(newGroup) {
  try {
    const res = await fetch("https://localhost:3333/api/groups/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(newGroup),
    });
    const data = await res.json();
    return data.id;
  } catch (error) {
    console.log(error);
  }
}

export async function createNewRide(newRide) {
  try {
    const res = await fetch("https://localhost:3333/api/rides", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(newRide),
    });
    const data = await res.json();
    return data.id;
  } catch (error) {
    console.log(error);
  }
}

export async function joinRide(userId) {
  try {
    const res = await fetch("https://localhost:3333/api/rides", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(newRide),
    });
    const data = await res.json();
    return data.id;
  } catch (error) {
    console.log(error);
  }
}

export async function getComments(postId) {
  try {
    const res = await fetch(
      `https://localhost:3333/api/post/${postId}/comment`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createNewComment(postId, comment) {
  try {
    const res = await fetch(
      `https://localhost:3333/api/post/${postId}/comment`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(comment),
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function getPosts(route, id) {
  try {
    const res = await fetch(`https://localhost:3333/api/${route}/${id}/post`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createNewPost(route, id, post) {
  try {
    const res = await fetch(`https://localhost:3333/api/${route}/${id}/post`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(post),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function uploadGroupImage(image) {
  try {
    const res = await fetch(`https://localhost:3333/api/upload/GroupPictures`, {
      method: "POST",
      body: image,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getRides(currentPage, itemsPerPage) {
  try {
    const res = await fetch(
      `https://localhost:3333/api/rides?page=${currentPage}&itemsperpage=${itemsPerPage}`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getRoutes(currentPage, itemsPerPage) {
  try {
    const res = await fetch(
      `https://localhost:3333/api/routes?page=${currentPage}&itemsperpage=${itemsPerPage}`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserData(id) {
  try {
    const res = await fetch(
      `https://localhost:3333/api/user/${id}?selectedData=true`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getRide(id) {
  try {
    const res = await fetch(`https://localhost:3333/api/rides/${id}`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getRoute(id) {
  try {
    const res = await fetch(`https://localhost:3333/api/routes/${id}`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPostsForFeed() {
  try {
    const res = await fetch("https://localhost:3333/api/feed/1/post", {
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createNewPostsForFeed(post) {
  try {
    const res = await fetch("https://localhost:3333/api/feed/1/post", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(post),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function createUser(user) {
  try {
    const res = await fetch(`https://localhost:3333/api/users/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function loginUser(user) {
  try {
    const res = await fetch(`https://localhost:3333/api/users/login`, {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify(user),
    });
    const resposne = await res.text();
    if (resposne.length > 96) {
      localStorage.setItem("token", resposne);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function testLogin() {
  try {
    let res = await fetch("https://localhost:3333/api/users/logged", {
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.text();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function addUserToGroup(groupId) {
  try {
    const res = await fetch(
      `https://localhost:3333/api/groups/${groupId}/participants/logged`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function addUserToGroupsPendingUsers(groupId) {
  try {
    const res = await fetch(
      `https://localhost:3333/api/groups/${groupId}/pendingusers/1`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function addUserToPrivateGroup(groupId, userId) {
  try {
    const res = await fetch(
      `https://localhost:3333/api/groups/${groupId}/participants/${userId}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function deleteLoggedUserFromGroup(groupId) {
  try {
    const res = await fetch(
      `https://localhost:3333/api/groups/${groupId}/participants/logged`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function addLoggedUserToRide(rideId) {
  try {
    const res = await fetch(
      `https://localhost:3333/api/rides/${rideId}/participants/logged`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function deleteLoggedUserFromRide(rideId) {
  try {
    const res = await fetch(
      `https://localhost:3333/api/rides/${rideId}/participants/logged`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function deleteGroupImage(imageName) {
  try {
    const res = await fetch(`https://localhost:3333/api/upload/${imageName}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUserFromGroup(groupId, userId) {
  try {
    const res = await fetch(
      `https://localhost:3333/api/groups/${groupId}/participants/${userId}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUserFromPendingUsers(groupId, userId) {
  try {
    const res = await fetch(
      `https://localhost:3333/api/groups/${groupId}/pendingusers/${userId}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function getLoggedUserData() {
  try {
    let res = await fetch("https://localhost:3333/api/users/logged", {
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function ProfileData(id) {
  try {
    let res = await fetch(
      `https://localhost:3333/api/users/${id}?profile=true`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createNewEvent(newEvent) {
  try {
    const res = await fetch("https://localhost:3333/api/events", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newEvent),
    });
    const data = await res.json();
    return data.id;
  } catch (error) {
    console.log(error);
  }
}

export async function getEvents(currentPage, itemsPerPage) {
  try {
    const res = await fetch(
      `https://localhost:3333/api/events?page=${currentPage}&itemsperpage=${itemsPerPage}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getEvent(id) {
  try {
    const res = await fetch(`https://localhost:3333/api/events/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
