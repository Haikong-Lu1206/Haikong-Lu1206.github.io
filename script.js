function handleArClick() {
    const arButton = document.querySelector('.ar-button');
    arButton.style.backgroundColor = '#1976D2';
    setTimeout(() => {
        arButton.style.backgroundColor = '#2196F3';
    }, 200);
}
 // 添加其他选项输入框的交互
document.getElementById('other').addEventListener('change', function() {
    const otherInput = document.getElementById('other-text');
    otherInput.disabled = !this.checked;
    if (this.checked) {
        otherInput.focus();
    }
});
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active-page');
    });
    document.getElementById(pageId).classList.add('active-page');
}

function showTrip2() {
    showPage('trip2-page');
}

function handleBookNow() {
    const button = document.querySelector('.book-now');
    button.style.backgroundColor = '#1976D2';
    setTimeout(() => {
        button.style.backgroundColor = '#2196F3';
    }, 200);
    alert('Booking place A for 10am-12am');
}

document.querySelectorAll('.item-image, .more-items').forEach(item => {
    item.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

//加载页面
document.querySelector('.plan-button2').addEventListener('click', function() {
    // 显示加载页面
    document.getElementById('loading-page').style.display = 'flex';
    
    // 3秒后跳转到Trip Planner3页面
    setTimeout(function() {
        document.getElementById('loading-page').style.display = 'none';
        showPage('trip3-page');
    }, 3000);
});
// 在您现有的JavaScript中添加以下功能
// 地图全屏切换
function toggleFullMap() {
const fullMap = document.getElementById('full-map');
fullMap.classList.toggle('hidden');

// ESC键关闭支持
if (!fullMap.classList.contains('hidden')) {
    document.addEventListener('keydown', function handleEsc(e) {
    if (e.key === 'Escape') {
        fullMap.classList.add('hidden');
        document.removeEventListener('keydown', handleEsc);
    }
    });
}
}

// 在底部导航栏初始化代码中添加Scavenger按钮绑定
document.querySelector('.nav-item.hunt-item').addEventListener('click', function() {
showPage('scavenger1-page');
});

document.querySelectorAll('.sex-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelector('.sex-option.selected').classList.remove('selected');
        this.classList.add('selected');
    });
});

function shareAchievement() {
// 这里可以添加实际的分享功能
alert('成就已分享到社交平台！');
document.querySelector('.share-button').textContent = '已分享 ✓';
}
// 添加设置按钮点击效果
document.querySelectorAll('.settings-button').forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
        // 这里可以添加具体的设置功能
        alert('Settings option clicked');
    });
});

// 初始化点击效果
document.querySelectorAll('.agenda-box, .nav-item, .trip-card').forEach(item => {
    item.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});