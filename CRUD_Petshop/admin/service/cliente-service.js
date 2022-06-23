const http = new XMLHttpRequest()

http.open('GET', 'http://localhot:3000/profile')

http.send()

http.onload = () => {
    const data = http.response
    console.log(data)
}