setInterval(() => {
  const warps = document.querySelectorAll(".xywarp");
  if (warps && warps.length > 0) {
    const warp = warps[0];
    if (warp["style"].display == "none") {
      return;
    }
    const btns = document.querySelectorAll(".xywarp .zfb_btns1 a");
    if (btns && btns.length > 0) {
      const btn = btns[0]; // 获取第一个按钮
      if (btn) {
        btn.click(); // 触发点击
        console.log("已自动点击签到按钮");
      }
    }
  }
}, 10000);
setInterval(()=>{
    const warps = document.querySelectorAll("#ccH5jumpInto");
    if(warps && warps.length > 0){
        const warp = warps[0];
        warp.click();
        console.log("已自动点击跳转播放时间段");
    }
},1000)
setInterval(() => {
  const warps = document.querySelectorAll("#replaybtn");
  if (warps && warps.length > 0) {
    const warp = warps[0];
    if (warp["style"].display == "none") {
      return;
    }
    if (warp.className == "adrPlayBtn") {
      const urlRoots = document.querySelectorAll("#s_r_ml");
      if (urlRoots && urlRoots.length > 0) {
        const urlRoot = urlRoots[0];
        if (urlRoot.children && urlRoot.children.length > 0) {
          const urls = urlRoot.children;
          let index = -1;
          for (let i = 0; i < urls.length; i++) {
            const item = urls[i];
            if (item.className == "active") {
              if (i + 1 < urls.length) {
                index = i + 1;
                break;
              }
            }
          }
          if (index >= 0) {
            const nextUrl = urls[index];
            if (nextUrl) {
              nextUrl.children[0].click();
              console.log("已自动点击下一集放按钮");
            } else {
              console.log("未找到下一回放按钮");
              alert("当前已播放完全");
            }
          }
        }
      }
    }else if(warp.className == "ccH5PlayBtn"){
        warp.click();
        console.log("已自动播放");
    }
  }
}, 10000);
