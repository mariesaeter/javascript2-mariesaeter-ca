import { deletePost } from "../api/posts/deleteposts.mjs";
import { readPost } from "../api/posts/readposts.mjs";
import { loadLocal } from "../storage/index.mjs";
import { formatDate } from "../tools/dateFormat.mjs";
import { noAvatar } from "../tools/noAvatar.mjs";
// access author properties
// export function getAuthor(authorData) {
//   for (let i = 0; i < authorData.length; i++) {
//     return authorData[i].author;
//   }
// }

export function postTemplate(postData) {
  // HTML post structure
  // //// End result
  // <div> mainDiv
  //     <div> childDivOne
  //         <a> userAvatar </a>
  //         <div> secondChildDivOne
  //             <div> thirdChildDivOne
  //                 <a> userName </a>
  //                 <small> postDate </small>
  //             </div>
  //             <div> thirdChildDivTwo
  //                 <i> statusIcon </i>
  //                 <small> postTitle </small>
  //             </div>
  //         </div>
  //     </div>
  //     <p> bodyContainer </p>
  //     <div> childDivTwo
  //         <div> linkChildDivOne
  //             <a> likeLink </a>
  //             <a> commentLink </a>
  //         </div>
  //         <div> linkChildDivTwo
  //             <a> updateLink </a>
  //             <a> deleteLink </a>
  //         </div>
  //     </div>
  // </div>

  // create main div element
  const mainDiv = document.createElement("div");
  mainDiv.className = "card shadow p-3 my-4";

  // Child with profile image and second child div, parent of secondChildDivOne
  const childDivOne = document.createElement("div");
  childDivOne.className = "d-flex";

  // create avatar image

  const avatar = document.createElement("img");
  avatar.className = "rounded-circle medium-profile-img";
  // avatar.setAttribute("alt", `${postData.author.name}'s profile image`);
  avatar.src = `${postData.author.avatar}`;
  noAvatar(postData.author.avatar, avatar);

  // create h1

  // child of childDivOne, parent of thirdChildDivOne
  const secondChildDivOne = document.createElement("div");
  secondChildDivOne.className = "ms-2 w-100";

  const thirdChildDivOne = document.createElement("div");
  thirdChildDivOne.className = "d-flex justify-content-between";

  const profileName = document.createElement("a");
  profileName.innerText = `${postData.author.name}`;

  profileName.setAttribute("href", `/../profile/?name=${postData.author.name}`);

  const postDateContainer = document.createElement("small");
  postDateContainer.className = "fw-light";

  postDateContainer.innerText = `${formatDate(postData.created)}`;

  const thirdChildDivTwo = document.createElement("div");
  thirdChildDivTwo.className = "d-flex align-items-center";
  // Add status icon
  const postTitleContainer = document.createElement("small");
  postTitleContainer.className = "fw-light ps-1";

  const postTitle = document.createTextNode(`${postData.title}`);
  postTitleContainer.appendChild(postTitle);

  const bodyContainer = document.createElement("p");
  bodyContainer.className = "pt-4 px-2";

  const bodyContent = document.createTextNode(`${postData.body}`);

  // add body text to body container
  bodyContainer.appendChild(bodyContent);

  const childDivTwo = document.createElement("div");
  childDivTwo.className = "d-flex justify-content-between";
  // childDivTwo links

  const linkChildDivOne = document.createElement("div");
  const likeLink = document.createElement("button");
  likeLink.className = "btn btn-link";
  const likeLinkText = document.createTextNode("like");
  const commentLink = document.createElement("button");
  commentLink.className = "ms-3 btn btn-link";
  const commentLinkText = document.createTextNode("commment");

  likeLink.appendChild(likeLinkText);
  commentLink.appendChild(commentLinkText);
  linkChildDivOne.append(likeLink, commentLink);

  // only show delete and update for the person who has created the post ( write it more simple? )
  const profile = loadLocal("profile");

  if (postData.author.name === profile.name) {
    const linkChildDivTwo = document.createElement("div");
    const updateLink = document.createElement("button");
    updateLink.className = "btn btn-link";
    const updateLinkText = document.createTextNode("update");
    // action to send to update post page
    updateLink.addEventListener("click", () => {
      window.location = `/post/edit/?id=${postData.id}`;
    });

    const deleteLink = document.createElement("button");
    deleteLink.className = "ms-3 btn btn-link";
    const deleteLinkText = document.createTextNode("delete");
    deleteLink.addEventListener("click", () => {
      deletePost(postData.id);
    });

    updateLink.appendChild(updateLinkText);
    deleteLink.appendChild(deleteLinkText);

    linkChildDivTwo.append(updateLink, deleteLink);
    childDivTwo.append(linkChildDivOne, linkChildDivTwo);
  } else {
    childDivTwo.appendChild(linkChildDivOne);
  }

  //

  thirdChildDivOne.append(profileName, postDateContainer);
  thirdChildDivTwo.appendChild(postTitleContainer);
  secondChildDivOne.append(thirdChildDivOne, thirdChildDivTwo);
  childDivOne.append(avatar, secondChildDivOne);

  // add everything to the main div
  mainDiv.append(childDivOne, bodyContainer, childDivTwo);

  return mainDiv;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData));
}

export function renderPostTemplates(postData, parent) {
  postData.every((postData, index) => {
    if (index > 20) {
      return false;
    }
    parent.append(postTemplate(postData));
    return true;
  });
}
export function renderAllPostsTemplate(postData, parent) {
  postData.forEach((postData) => {
    parent.append(postTemplate(postData));
  });
}

// export function renderSearchPosts(postData, parent) {
//   const searchPosts = postData.map((postData) => postTemplate(postData));
//   parent.innerHTML = "";
//   parent.append(postTemplate(searchPosts));
// }

// for (let i = 0; i < postData.length; i++) {
//   parent.append(postTemplate(postData));
//   if (i === 20) {
//     break;
//   }

// postData.forEach(element, index => {
//   parent.append(postTemplate(element));
//   if(index > 20) {
//     break;
//   }
// });
// postData.every((index) => {
//   if (index > 20) {
//     return false;
//   } else {
//     parent.append(postTemplate(postData));
//     return true;
//   }
// });

//     parent.append(postTemplate(postData));
//     return true;
//   });
// }

// if (postData.array < 20) {
//   postData.every((postData) => {
//     parent.append(postTemplate(postData));
//     return true;
//   });
// } else {
//   postData.every((postData, index) => {
//     if (index > 20) {
//       return false;
//     }
//     parent.append(postTemplate(postData));
//     return true;
//   });
// }
