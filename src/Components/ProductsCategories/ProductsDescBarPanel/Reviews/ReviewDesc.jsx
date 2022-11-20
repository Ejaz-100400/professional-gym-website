import React from 'react';
export default function ReviewDesc(props){
    // like dislike states
    const [like,setlike]=React.useState(props.likes);
    const [dislike,setdislike]=React.useState(props.dislike); //like dislike data 
    const [likeactive,setlikeactive]=React.useState(false);
    const[dislikeactive,setdislikeactive]=React.useState(false); //like active state
    const[likebg,setlikebg]=React.useState(false);
    const [dislikebg,setdislikebg]=React.useState(); //like background state
    
    function likebtn(){
        if(likeactive){
            setlikeactive(false);
            setlike(like-1)
            setlikebg(false);
        }
        else{
            setlikeactive(true);
            setlike(like+1)
            setlikebg(true);
        }
    }
    function dislikebtn(){
        if(dislikeactive){
            setdislikeactive(false);
            setdislike(dislike-1)
            setdislikebg(false);
        }
        else{
            setdislikeactive(true);
            setdislike(dislike+1)
            setdislikebg(true);
        }
    }
    return(
        <div className="prouct--review--desc m-2 p-3">
            <div className="prouct--review--panel">
            <div className="review--desc d-grid">
                <h2 className="text-light">{props.Reviewer_Name}</h2>
            </div>
            <div className="product--user--rating d-flex">
                 <i class="fa-solid p-1 fa-star fa-1x"></i>
                <span className="" style={{color:'yellow',fontWeight:'bold'}}>{props.Rating}/5</span>
            </div>
            <p className="text-warning">{props.ReviewMsg}</p>
            <div className="like-dislike d-flex text-light">
            <i class="fa-regular fa-thumbs-up " 
            style={{color:likebg?'blue':'white'}} onClick={likebtn}>
                <span className="p-2">{like}</span>
            </i>
            <i class="fa-regular fa-thumbs-down"
            style={{color:dislikebg?'red':'white'}} 
            onClick={dislikebtn}><span className="p-2">{dislike}</span>
            </i>
            </div>
            <div className="new1 mt-4"></div>
            </div>
        </div>
    )
}