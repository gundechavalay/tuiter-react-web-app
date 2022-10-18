const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item wd-update-bg">
            <div class="grid">
                <div class="row">
                    <div class="col col-md-2">
                        <img src=${who.avatarIcon} class="wd-sidebar-image">
                    </div>
                    <div class="col col-md-6">
                        <h6 class="wd-header">${who.userName}<i class="fa-solid fa-circle-check"></i>
                        </h6>
                        <h6 class="wd-title-tag">@${who.handle} </h6>
                    </div>
                    <div class="col col-md-4">
                        <button class="wd-round-button" style="background-color: white; color: black; font-weight: bold">Follow</button>
                    </div>
                </div>
            </div>
        </li>
    `);
   }
   export default WhoToFollowListItem;