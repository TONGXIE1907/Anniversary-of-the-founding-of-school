function showContent(contentId) {
    // 首先隐藏所有内容
    var contents = document.getElementsByClassName("da");
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }

    // 显示所选项目的内容
    var selectedContent = document.getElementById(contentId);
    selectedContent.style.display = "block";
}

// 获取所有的li元素
var listItems = document.querySelectorAll('.image .ds li');

// 为每个li元素添加点击事件监听器
listItems.forEach(function(item) {
    item.addEventListener('click', function() {
        // 移除之前所有li元素的字体颜色
        listItems.forEach(function(li) {
            li.style.color = '';
        });
        
        // 设置当前点击的li元素的字体颜色为红色
        this.style.color = '#03e2ff';
    });
});

