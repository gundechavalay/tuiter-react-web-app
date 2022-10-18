const PostListItem = (post) => {
    return(`
        <li class="list-group-item background wd-border-style">
            <div class="grid">
                <div class="row">
                    <div class="col-9 col-sm-9 col-md-10">
                        <div class="row wd-irregular-width">
                            <p class="wd-content-header" style="float: left">${post.topic}
                            </p>
                        </div>
                        <div class="row" style="float: left">
                            <p class="wd-content-title">
                                ${post.userName}<i class="fa-solid fa-circle-check"></i>
                            </p>
                        </div>
                        <div class="row wd-tuit-content">
                            <p class="text-content">${post.title}
                            </p>
                        </div>
                    </div>
                    <div class = "col-3 col-sm-3 col-md-2">
                        <img src=${post.image} class="wd-image">
                    </div>
                </div>
            </div>
        </li>
    `);
   }
   export default PostListItem;