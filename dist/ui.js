function updateProgress() {
  const tasks = document.querySelectorAll('.task-section [data-status]');
  const totalTasks = tasks.length;

  let completedCount = 0;
  let inProgressCount = 0;
  let waitingCount = 0;

  // 각 작업의 상태에 따라 카운트 증가
  tasks.forEach((task) => {
    const status = task.getAttribute('data-status');
    if (status === 'complete') {
      completedCount++;
    } else if (status === 'ing') {
      inProgressCount++;
    } else if (status === 'wait') {
      waitingCount++;
    }
  });

  // 퍼센트 계산
  const completedPercent = (completedCount / totalTasks) * 100;
  const inProgressPercent = (inProgressCount / totalTasks) * 100;
  const waitingPercent = (waitingCount / totalTasks) * 100;

  // DOM에 퍼센트 및 개수 업데이트
  document.getElementById('wait-tasks').innerHTML = `<em class="type-wait">대기</em>: <strong>${waitingCount}건 (${waitingPercent.toFixed(0)}%)</strong>`;
  document.getElementById('ing-tasks').innerHTML = `<em class="type-ing">진행중:</em> <strong>${inProgressCount}건 (${inProgressPercent.toFixed(0)}%)</strong>`;
  document.getElementById('complete-tasks').innerHTML = `<em class="type-complete">완료</em>: <strong>${completedCount}건 (${completedPercent.toFixed(0)}%)</strong>`;

  // 진행 바 업데이트
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = `${completedPercent}%`;

}
// 페이지 로드 시 업데이트 함수 실행
window.onload = updateProgress;
