// Add AR state and functionality
let arState = 'scanning';
let points = 615;

function handleArClick() {
    showPage('ar-page');
}

function handleARAction() {
    switch (arState) {
        case 'scanning':
            arState = 'detected';
            updateARView();
            break;
        case 'detected':
            arState = 'interaction';
            updateARView();
            break;
        case 'interaction':
            arState = 'completed';
            updatePoints(points + 50);
            updateARView();
            break;
    }
}

function updatePoints(newPoints) {
    points = newPoints;
    document.querySelectorAll('.points-badge, .ar-points').forEach(element => {
        element.textContent = `${points} pts`;
    });
}

function updateARView() {
    const viewport = document.querySelector('.ar-viewport');
    const instruction = document.querySelector('.ar-instruction');
    
    switch (arState) {
        case 'scanning':
            viewport.innerHTML = `
                <img src="https://images.pexels.com/photos/1011300/pexels-photo-1011300.jpeg" alt="AR View" class="ar-image">
                <div class="ar-overlay">
                    <div class="scanning-animation"></div>
                    <p class="tap-hint">Tap to activate AR</p>
                </div>
            `;
            break;
        case 'detected':
            viewport.innerHTML = `
                <img src="https://images.pexels.com/photos/2608516/pexels-photo-2608516.jpeg" alt="Historical Building" class="ar-image">
                <div class="ar-overlay">
                    <div class="detection-marker">Historical Site Detected</div>
                    <p class="tap-hint">Tap to interact</p>
                </div>
            `;
            instruction.innerHTML = `
                <div class="instruction-card">
                    <div class="dino-icon">🏛️</div>
                    <h3>Temple of Time</h3>
                    <p>Built in 1892, this historical temple was a central gathering place.</p>
                </div>
            `;
            break;
        case 'interaction':
            viewport.innerHTML = `
                <img src="https://images.pexels.com/photos/772689/pexels-photo-772689.jpeg" alt="Historical Figure" class="ar-image">
                <div class="ar-overlay">
                    <div class="interaction-prompt">
                        <p>"Hello traveler! I am the temple guardian."</p>
                        <p>Tap to complete the challenge</p>
                    </div>
                </div>
            `;
            break;
        case 'completed':
            //showPage('scavenger4-page');
            break;
    }
}


//function handleArClick() {
    //const arButton = document.querySelector('.ar-button');
    //arButton.style.backgroundColor = '#1976D2';
    //setTimeout(() => {
        //arButton.style.backgroundColor = '#2196F3';
    //}, 200);
//}

document.getElementById('other').addEventListener('change', function() {
    const otherInput = document.getElementById('other-text');
    otherInput.disabled = !this.checked;
    if (this.checked) {
        otherInput.focus();
    }
});
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active-page');
    });
    
    // Show the selected page
    document.getElementById(pageId).classList.add('active-page');
    
    // 控制加号按钮的显示
    const floatingBtn = document.querySelector('.floating-post-btn');
    if (pageId === 'main-page') {
        floatingBtn.style.display = 'flex';
    } else {
        floatingBtn.style.display = 'none';
    }
    
    // Reset all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        item.style.backgroundColor = 'white';
        item.querySelector('.nav-icon').style.color = '#666';
        item.querySelector('.nav-label').style.color = '#666';
    });
    
    // Set the active nav item
    let activeNavItem = null;
    const pageToNavMap = {
        'main-page': 'home-item',
        'trip1-page': 'trip-item',
        'trip2-page': 'trip-item', 
        'trip3-page': 'trip-item',  
        'scavenger1-page': 'hunt-item',
        'scavenger2-page': 'hunt-item',
        'scavenger3-page': 'hunt-item',
        'scavenger4-page': 'hunt-item',
        'store-page': 'store-item1',
        'settings-page': 'settings-item1',
        'create-post-page': 'home-item',
        'chat-room-page': 'chat-item',
        'private-chat-page': 'chat-item'
    };
    activeNavItem = document.querySelector(`.${pageToNavMap[pageId]}`);
    
    if (activeNavItem) {
        activeNavItem.classList.add('active');
        activeNavItem.style.backgroundColor = 'var(--primary-color)';
        activeNavItem.querySelector('.nav-icon').style.color = 'white';
        activeNavItem.querySelector('.nav-label').style.color = 'white';
    }
}
function showAgendaDetail() {
    showPage('agenda-detail-page');
}
function showAgendaDetail1() {
    showPage('agenda-b-page');
}
function showAgendaDetail2() {
    showPage('agenda-c-page');
}
function addToPersonal() {
    alert('Added to your personal agenda!');
    document.querySelector('.save-agenda-btn').textContent = '✅ Added';
}

function handlePayment() {
    if(confirm('Confirm to use 1 credit for full access?')) {
        alert('Payment successful! Full content unlocked.');
        document.querySelector('.pay-badge').style.display = 'none';
    }
}

// 交互功能
function sendInvite(button) {
    button.style.backgroundColor = '#48D1CC';
    button.textContent = '✓ Invited';
    setTimeout(() => {
        button.style.backgroundColor = '#40E0D0';
    }, 2000);
}

function createGroupChat() {
    document.querySelectorAll('.member-card').forEach(card => {
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 300);
    });
    alert('Group chat created!');
}
// 交互功能
function handleBookNow() {
    const btn = document.querySelector('.book-now');
    btn.textContent = 'Booking...';
    setTimeout(() => {
        btn.textContent = '✓ Booked';
        btn.style.background = '#4CAF50';
    }, 1000);
}

function addEvent() {
    alert('Event creation dialog will open here');
}

function connectCalendar(service) {
    alert(`Connecting to ${service}...`);
}

function createGroupChat() {
    alert('Group chat created with all members!');
}

// 确保点击相关议程跳转
function showAgendaDetail() {
    showPage('agenda-detail-page');
}

// 推荐用户卡片点击效果
document.querySelectorAll('.suggestion-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'translateY(-3px)';
        setTimeout(() => {
            this.style.transform = 'none';
        }, 200);
    });
});

// 安全指南跳转
document.querySelector('.safety-guidelines').addEventListener('click', function(e) {
    e.preventDefault();
    showPage('safety-guidelines-page');
});
document.querySelector('.agenda-box:first-child').addEventListener('click', showAgendaDetail);
document.querySelector('.agenda-box:nth-child(2)').addEventListener('click', showAgendaDetail1);
document.querySelector('.agenda-box:nth-child(3)').addEventListener('click', showAgendaDetail2);


// Initialize
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.floating-post-btn').style.display = 'none';
    showPage('main-page');
}); 



// 在script2.js中添加以下功能
let currentChatUser = null;

function openChat(userId) {
    //currentChatUser = userId;
    showPage('private-chat-page');
}

function toggleEmojiPicker() {
    const picker = document.getElementById('emoji-picker');
    if (picker.style.display === 'flex') {
        picker.style.display = 'none';
    } else {
        // 创建单个emoji按钮
        picker.innerHTML = '';
        const emojis = ["😀","😃","😄","😁","😆","😅","😂","🤣","😊","😇","🙂","🙃","😉","😌","😍","🥰","😘","😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐"];
        emojis.forEach(emoji => {
            const span = document.createElement('span');
            span.textContent = emoji;
            span.style.cursor = 'pointer';
            span.style.fontSize = '1.5em';
            span.addEventListener('click', () => insertEmoji(emoji));
            picker.appendChild(span);
        });
        picker.style.display = 'flex';
    }
}

function insertEmoji(emoji) {
    const input = document.getElementById('message-input');
    input.value += emoji;
}

document.getElementById('emoji-picker').addEventListener('click', (e) => {
    if (e.target.textContent.trim()) {
        insertEmoji(e.target.textContent);
    }
});

document.getElementById('image-upload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = document.createElement('img');
            img.src = event.target.result;
            img.classList.add('message-image');
            appendMessage(img, true);
        }
        reader.readAsDataURL(file);
    }
});

function appendMessage(content, isImage = false) {
    const container = document.getElementById('message-container');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'sent');
    
    if (isImage) {
        messageDiv.appendChild(content);
    } else {
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('message-content');
        contentDiv.textContent = content;
        messageDiv.appendChild(contentDiv);
    }
    
    const timeDiv = document.createElement('div');
    timeDiv.classList.add('message-time');
    timeDiv.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    messageDiv.appendChild(timeDiv);
    
    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value.trim();
    
    if (message) {
        // 创建消息元素
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'sent');
        
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('message-content');
        contentDiv.innerHTML = message.replace(/\n/g, '<br>');
        
        const timeDiv = document.createElement('div');
        timeDiv.classList.add('message-time');
        timeDiv.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        messageDiv.appendChild(contentDiv);
        messageDiv.appendChild(timeDiv);
        
        // 添加到消息容器
        const container = document.getElementById('message-container');
        container.appendChild(messageDiv);
        
        // 清空输入框并滚动到底部
        input.value = '';
        container.scrollTop = container.scrollHeight;
        
        // 添加发送动画
        messageDiv.style.animation = 'messageSent 0.3s ease-out';
    }
}

// 按Enter键发送消息
document.getElementById('message-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});


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

function handleScavengerClick(button) {
    button.style.transform = 'scale(0.97)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
        alert(button.textContent.trim() + ' clicked!');
    }, 200);
}

function handleInviteClick() {
    const btn = document.querySelector('.turquoise-btn');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
        alert('Invitation sent!');
    }, 200);
}

document.querySelectorAll('.item-image, .more-items').forEach(item => {
    item.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});
// 添加checkbox点击动画
document.querySelectorAll('.styled-checkbox').forEach(checkbox => {
    checkbox.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// Personality选项点击效果
document.querySelectorAll('.personality-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.personality-option').forEach(opt => {
            opt.style.background = '#e3f2fd';
        });
        this.style.background = '#bbdefb';
    });
});

// Store链接点击动画
document.querySelector('.store-link').addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 200);
});

document.querySelector('.plan-button2').addEventListener('click', function() {
    document.getElementById('loading-page').style.display = 'flex';
    
    setTimeout(function() {
        document.getElementById('loading-page').style.display = 'none';
        showPage('trip3-page');
    }, 3000);
});

// script2.js 新增函数
function toggleLike(button, initialCount) {
    const likeCount = button.querySelector('.like-count');
    const isLiked = button.classList.contains('liked');
    
    if (!isLiked) {
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
        button.classList.add('liked');
    } else {
        likeCount.textContent = parseInt(likeCount.textContent) - 1;
        button.classList.remove('liked');
    }
}

function sharePost() {
    alert('Post shared successfully!');
}

function toggleFullMap() {
    const fullMap = document.getElementById('full-map');
    fullMap.classList.toggle('hidden');

    if (!fullMap.classList.contains('hidden')) {
        document.addEventListener('keydown', function handleEsc(e) {
            if (e.key === 'Escape') {
                fullMap.classList.add('hidden');
                document.removeEventListener('keydown', handleEsc);
            }
        });
    }
}

document.querySelectorAll('.sex-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelector('.sex-option.selected').classList.remove('selected');
        this.classList.add('selected');
    });
});

function shareAchievement() {
    alert('成就已分享到社交平台！');
    document.querySelector('.share-button').textContent = '已分享 ✓';
}

document.querySelectorAll('.settings-button').forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
        alert('Settings option clicked');
    });
});

document.querySelectorAll('.agenda-box, .nav-item, .trip-card').forEach(item => {
    item.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});
// Initialize active page
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.home-item').classList.add('active');
    document.querySelector('.home-item').style.backgroundColor = 'var(--primary-color)';
});