console.log("我是main.js 2");

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onload = () => {
    console.log("request.response");
    console.log(request.response);

    //创建 style 标签
    const style = document.createElement("style");
    //填写 style 内容
    style.innerHTMl = request.response;
    //将 style 标签插到头里面
    document.head.appendChild(style);
  };

  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};
