document.getElementById("checklistForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const checklistResults = [];

  // Duyệt qua tất cả các checkbox trong form
  const checkboxes = document.querySelectorAll("#checklistForm input[type='checkbox']");

  checkboxes.forEach((checkbox) => {
    const label = checkbox.closest("label").innerText.trim(); // Lấy nội dung mô tả checkbox
    checklistResults.push({
      [label]: checkbox.checked
    });
  });

  // Tạo danh sách kết quả
  const resultList = document.getElementById("resultList");
  resultList.innerHTML = ""; // Xóa danh sách cũ

  checklistResults.forEach(item => {
    for (const key in item) {
      const listItem = document.createElement("li");
      listItem.textContent = `${key}: ${item[key] ? 'Có' : 'Không'}`;
      resultList.appendChild(listItem);
    }
  });

  // Hiển thị kết quả
  document.getElementById("result").style.display = "block";
});
