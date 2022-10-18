import posts from "./posts.js";
import PostListItem from "./PostListItem.js";

const PostList = () => {
    return(`

    <!-- <div class="ms-1 me-1"> -->
                ${
                    posts.map(p => {
                        return(PostListItem(p));
                    }).join('')
                }
                <!-- </div> -->
    `);
}
export default PostList;