function filterPosts(category) {
  const posts = document.querySelectorAll('.post');
  
  posts.forEach(post => {
      if (category === 'all') {
          post.style.display = 'block'; // 모든 포스터 표시
      } else if (post.classList.contains(category)) {
          post.style.display = 'block'; // 선택된 카테고리의 포스터만 표시
      } else {
          post.style.display = 'none'; // 나머지는 숨김
      }
  });
}
