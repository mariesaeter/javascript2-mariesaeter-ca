import { deletePost } from "../api/posts/deleteposts.mjs";
import { loadLocal } from "../storage/index.mjs";
import { formatDate } from "../tools/dateFormat.mjs";
import { noAvatar } from "../tools/noAvatar.mjs";

/**
 *
 * @param {Object} postData - from api
 * @returns - html template
 */
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

  const { author, created, title, body, id } = postData;
  const { name, avatar } = author;

  // create main div element
  const mainDiv = document.createElement("div");
  mainDiv.className = "card shadow p-3 my-4";

  // Child with profile image and second child div, parent of secondChildDivOne
  const childDivOne = document.createElement("div");
  childDivOne.className = "d-flex";

  // create avatar image

  const avatarImg = document.createElement("img");
  avatarImg.className = "rounded-circle medium-profile-img";
  avatarImg.src = `${avatar}`;
  noAvatar(avatar, avatarImg);

  // child of childDivOne, parent of thirdChildDivOne
  const secondChildDivOne = document.createElement("div");
  secondChildDivOne.className = "ms-2 w-100";

  const thirdChildDivOne = document.createElement("div");
  thirdChildDivOne.className = "d-flex justify-content-between";

  const profileName = document.createElement("a");
  profileName.innerText = `${name}`;

  profileName.setAttribute("href", `/../profile/?name=${name}`);

  const postDateContainer = document.createElement("small");
  postDateContainer.className = "fw-light";

  postDateContainer.innerText = `${formatDate(created)}`;

  const thirdChildDivTwo = document.createElement("div");
  thirdChildDivTwo.className = "d-flex align-items-center";

  const postTitleContainer = document.createElement("small");
  postTitleContainer.className = "fw-light ps-1";

  const postTitle = document.createTextNode(`${title}`);
  postTitleContainer.appendChild(postTitle);

  const bodyContainer = document.createElement("p");
  bodyContainer.className = "pt-4 px-2";

  const bodyContent = document.createTextNode(`${body}`);

  // add body text to body container
  bodyContainer.appendChild(bodyContent);

  const childDivTwo = document.createElement("div");
  childDivTwo.className = "d-flex justify-content-between";

  const linkChildDivOne = document.createElement("div");
  const likeLink = document.createElement("button");
  likeLink.className = "btn btn-link";
  const likeLinkText = document.createTextNode("like");
  const commentLink = document.createElement("button");
  commentLink.className = "ms-3 btn btn-link";
  const commentLinkText = document.createTextNode("comment");
  const viewLink = document.createElement("button");
  viewLink.className = "ms-3 btn btn-link";
  const viewLinkText = document.createTextNode("view post");

  // action to send to single post page
  viewLink.addEventListener("click", () => {
    window.location = `/post/?id=${id}`;
  });

  likeLink.appendChild(likeLinkText);
  commentLink.appendChild(commentLinkText);
  viewLink.appendChild(viewLinkText);
  linkChildDivOne.append(likeLink, commentLink, viewLink);

  // only show delete and update for the person who has created the post
  const profile = loadLocal("profile");

  if (name === profile.name) {
    const linkChildDivTwo = document.createElement("div");
    const updateLink = document.createElement("button");
    updateLink.className = "btn btn-link";
    const updateLinkText = document.createTextNode("update");
    // action to send to update post page
    updateLink.addEventListener("click", () => {
      window.location = `/post/edit/?id=${id}`;
    });

    const deleteLink = document.createElement("button");
    deleteLink.className = "ms-3 btn btn-link";
    const deleteLinkText = document.createTextNode("delete");
    deleteLink.addEventListener("click", () => {
      deletePost(id);
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
  childDivOne.append(avatarImg, secondChildDivOne);

  // add everything to the main div
  mainDiv.append(childDivOne, bodyContainer, childDivTwo);

  return mainDiv;
}

/**
 * Render template for a singular post and appends to html container
 * @param {Object} postData - post data from api
 * @param {Object} parent - html container
 */
export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData));
}

/**
 * Render template for 21 post and appends to html container
 * @param {Object} postData - post data from api
 * @param {Object} parent - html container
 */
export function renderPostTemplates(postData, parent) {
  postData.every((postData, index) => {
    if (index > 25) {
      return false;
    }
    parent.append(postTemplate(postData));
    return true;
  });
}
/**
 * Render template for all posts and appends to html container
 * @param {Object} postData
 * @param {Object} parent
 */
export function renderAllPostsTemplate(postData, parent) {
  postData.forEach((postData) => {
    parent.append(postTemplate(postData));
  });
}
