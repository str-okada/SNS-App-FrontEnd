import React from 'react'
import "./Rightbar.css"
import { Users } from "../../dummyData"
import Online from '../online/Online'

export default function Rightbar({ user }) {
  const REACT_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const Homerightbar = () => {
    return (
      <>
        <div className="eventContainer">
          <img src="/assets/star.png" alt="" className="starImg" />
          <span className="eventText">Event for<b>Only Followings</b></span>
        </div>
        <img src="/assets/ad.jpeg" alt="" className='eventImg' />
        <h4 className='rightbarTitle'>Online friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
        </ul>
        <p className="promotionTitle">Advertisments</p>
        <img src="/assets/promotion/promotion1.jpeg" alt="" className="rightbarPromotionImg" />
        <p className='promotionName'>Shopping</p>
        <img src="/assets/promotion/promotion2.jpeg" alt="" className="rightbarPromotionImg" />
        <p className='promotionName'>Car shop</p>
        <img src="/assets/promotion/promotion3.jpeg" alt="" className="rightbarPromotionImg" />
        <p className='promotionName'>Shotaro Inc</p>
      </>
    )
  }

  const ProfileRightbar = ({}) => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From : </span>
            <span className="rightbarInfoKey">Japan</span>
          </div>
          <h4 className="rightbarTitle">Your followers</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src={REACT_FOLDER+"/person/1.jpeg"} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingsName">Shotaro</span>
            </div>
            <div className="rightbarFollowing">
              <img src={REACT_FOLDER+"/person/2.jpeg"} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingsName">Yamaki</span>
            </div>
            <div className="rightbarFollowing">
              <img src={REACT_FOLDER+"/person/3.jpeg"} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingsName">Koga</span>
            </div>
            <div className="rightbarFollowing">
              <img src={REACT_FOLDER+"/person/4.jpeg"} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingsName">Matsukubo</span>
            </div>
            <div className="rightbarFollowing">
              <img src={REACT_FOLDER+"/person/5.jpeg"} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingsName">Kikukawa</span>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <Homerightbar />}
      </div>
    </div>
  );
}
