import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`

    <!-- <div class="ms-1 me-1"> -->
    <ul class="list-group">
                    <li class="list-group-item wd-update-bg">
                        <b style="float: left; font-size: medium">Who to follow</b>
                    </li>
                ${
                    who.map(w => {
                        return(WhoToFollowListItem(w));
                    }).join('')
                }
                </ul>
                <!-- </div> -->
    `);
}
export default WhoToFollowList;