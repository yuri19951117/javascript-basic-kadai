const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
    setTimeout(() => {
        const addBtn = document.getElementById('text');
        addBtn.innerHTML = 'ボタンをクリックしました'
        }, 2000);
});