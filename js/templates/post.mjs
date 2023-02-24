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

  const userAvatar = document.createElement("a");
  userAvatar.setAttribute("href", "#");

  // child of childDivOne, parent of thirdChildDivOne
  const secondChildDivOne = document.createElement("div");
  secondChildDivOne.className = "ms-2 w-100";

  const thirdChildDivOne = document.createElement("div");
  thirdChildDivOne.className = "d-flex justify-content-between";

  const userName = document.createElement("a");
  userName.setAttribute("href", "#");

  const postDateContainer = document.createElement("small");
  postDateContainer.className = "fw-light";

  postDateContainer.innerText = `${postData.date}`;

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
  const likeLink = document.createElement("a");
  likeLink.setAttribute("href", "#");
  const likeLinkText = document.createTextNode("like");
  const commentLink = document.createElement("a");
  commentLink.setAttribute("href", "#");
  commentLink.className = "ms-3";
  const commentLinkText = document.createTextNode("commment");

  likeLink.appendChild(likeLinkText);
  commentLink.appendChild(commentLinkText);
  linkChildDivOne.append(likeLink, commentLink);

  //   if () {
  const linkChildDivTwo = document.createElement("div");
  const updateLink = document.createElement("a");
  updateLink.setAttribute("href", `/post/edit/?id=${postData.id}`);
  const updateLinkText = document.createTextNode("update");
  const deleteLink = document.createElement("a");
  deleteLink.setAttribute("href", "#");
  deleteLink.className = "ms-3";
  const deleteLinkText = document.createTextNode("delete");

  updateLink.appendChild(updateLinkText);
  deleteLink.appendChild(deleteLinkText);

  linkChildDivTwo.append(updateLink, deleteLink);
  childDivTwo.append(linkChildDivOne, linkChildDivTwo);
  // } else {
  childDivTwo.appendChild(linkChildDivOne);
  // }

  thirdChildDivOne.append(userName, postDateContainer);
  thirdChildDivTwo.appendChild(postTitleContainer);
  secondChildDivOne.append(thirdChildDivOne, thirdChildDivTwo);
  childDivOne.append(userAvatar, secondChildDivOne);

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
