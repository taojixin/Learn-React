import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";
import IconAvatar from "@/assets/svg/icon_avatar";
import IconMenu from "@/assets/svg/icon_menu";
import IconGlobal from "@/assets/svg/icon_global";

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false);
    }
    window.addEventListener("click", windowHandleClick, true);
    return () => {
      window.removeEventListener("click", windowHandleClick, true);
    };
  }, []);
  function profileClickHandle() {
    setShowPanel(true);
  }
  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">开展帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;