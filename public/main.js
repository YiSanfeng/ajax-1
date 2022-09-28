getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const object = JSON.parse(request.response);
      myName.textContent = object.name;
    }
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onload = () => {
    //创建 div 标签
    const div = document.createElement("div");
    //写入 div 内容
    div.innerHTML = request.response;
    //将 div 插入到身体里
    document.body.appendChild(div);
  };
  request.onerror = () => {
    console.log("出错了");
  };
  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    //创建script 标签
    const script = document.createElement("script");
    //填写 script 内容
    script.innerHTML = request.response;
    //将 script 内容插到身体里
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css"); // readyStatus = 1
  request.onreadystatechange = () => {
    // 下载完成，但不知道是成功 2XX 还是失败 4XX 5XX
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        // //创建 style 标签
        const style = document.createElement("style");
        // //填写 style 内容
        style.innerHTML = request.response;
        // //将 style 标签插到头里面
        document.head.appendChild(style);
      } else {
        alert("加载 CSS 失败");
      }
    }
  };
  request.send();
};
