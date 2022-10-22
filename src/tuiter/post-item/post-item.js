import React from "react";
import './index.css';
const PostItem = (
 {
   post = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
     "image": "tesla.jpg"
   }
 }
) => {
  const floatLeft = {
        "float": "left"
  }
  const colorLightGrey = {
    "color": "lightgrey"
  }
  const titleWeight = {
    "fontWeight": "lighter"
  }  
  const borderStyling = {
    "borderStyle": "solid",
    "borderRadius":"20px",
    "borderWidth": "0.5px",
    "borderColor": "grey"
  }
  const imageBorder = {
    "border-radius": "3%"
  }
return(
  <li className="list-group-item">
      <div className="row">
        <div className="col-1 mt-1 mb-1 me-2">
          <img className="rounded-circle" height={48} width={48} src={`/images/${post.image}`}/>
        </div>
        <div className="col-8 mt-1 mb-1">
          <div className="fw-bold">{post.userName}</div>
          <div>@{post.handleName} . {post.time}</div>
        </div>
        <div className="col-12 ps-5">
          <div>{post.title}</div>
          <div className="mt-2 mb-2"><img style={imageBorder} height={'80%'} width={'90%'} src={`/images/${post.image}`}/></div>
        </div>
        <div className="ps-5">
          <a href="#"><i className="fa-regular fa-comment"></i></a>
          &nbsp;{post.comments}&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#"><i className="fa-solid fa-retweet"></i></a>
          &nbsp;{post.retweets}&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#"><i className="fa-regular fa-heart"></i></a>
          &nbsp;{post.likes}&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#"><i className="fa-solid fa-download"></i></a>            
        </div>
      </div>
  </li>
);
//  return(
//         <li className="list-group-item">
//                     <div className="grid">
//                     <div className="col-12 col-md-12">
//                     <div className="row">
//                             <div className = "col-1 col-sm-1 col-md-1">
//                                         <img src={`/images/${post.image}`} className="sidebar-images"/>
//                             </div>
//                             <div className="col-8 col-sm-8 col-md-8">
//                                 <div className="row different-width">
//                                     <p className="text-title">
//                                        {post.userName} <i className="fa-solid fa-circle-check"></i>
//                                     </p>
//                                 </div>
//                                 <p className="text-header" style={floatLeft}>@{post.handleName} {post.time}
//                                     </p>
//                                 <div className="row" style={floatLeft}>
                                    
//                                 </div>
//                                 <div className="row text-news">
//                                     <p style={titleWeight}>{post.title}<br/><br/></p>
//                                 </div>
//                                 <div className="row">
//                                     <div className="col-8 col-md-8" style={borderStyling}>
//                                     <div className="row"> 
//                                     <img src={`/images/${post.image}`} className = "text-item-image"/>
//                                     </div>
//                                     <hr/>
//                                     <div className="row">
//                                     <p style={titleWeight}>{post.title}<br/><br/></p>
//                                     </div>
// </div>
// <div className="row" style={marginTop}>
//                                     <span style={colorLightGrey}>
//                                     <a href="#" style={colorLightGrey}><i className="fa-regular fa-comment" style={colorLightGrey} ></i></a>
//                                     &nbsp;&nbsp;{post.comments}&nbsp;&nbsp;
//                                     <a href="#" style={colorLightGrey}><i className="fa-solid fa-retweet" style={colorLightGrey}></i></a>
//                                     &nbsp;&nbsp;{post.retweets}&nbsp;&nbsp;
//                                     <a href="#" style={colorLightGrey}><i className="fa-regular fa-heart" style={colorLightGrey}></i></a>
//                                     &nbsp;&nbsp;{post.likes}&nbsp;&nbsp;
//                                     <a href="#" style={colorLightGrey}><i className="fa-solid fa-download" style={colorLightGrey}></i></a>
// </span>
//                                     </div>         
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
// </div>
//                 </li>
//  );
};
export default PostItem;