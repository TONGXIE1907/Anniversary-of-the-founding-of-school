function showContent(contentId) {
    // 首先隐藏所有内容
    var contents = document.getElementsByClassName("content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }

    // 显示所选项目的内容
    var selectedContent = document.getElementById(contentId);
    selectedContent.style.display = "block";
}