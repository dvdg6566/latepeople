document.getElementById('res').addEventListener('click', (e) => {
    e.preventDefault()
    let tempData = new FormData()
    let tempFile = document.querySelector('input[type="file"]').files[0]
    tempData.append('studentdb', tempFile)
    fetch('http://localhost:5000/uploads', {
        method: 'POST',
        body: tempData
    }).then((res) => {
        alert("Student Database has been updated.")
    }).catch((err) => {
        console.log(err)
    })
})