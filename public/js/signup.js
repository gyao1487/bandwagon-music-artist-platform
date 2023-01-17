//javascript connected
console.log("JS connected")

//accessing inputs and submit button
const username = document.getElementById("username")
const password = document.getElementById("password")
const email = document.getElementById("email")
const artist_name = document.getElementById("name")
const bio = document.getElementById("bio")
const socials = document.getElementById("socials")
const profile_picture = document.getElementById("profile_picture")
const submitButton = document.getElementById("submit")

//converter function to convert image to base-64 format
const convertBase64 = (file) => {
    //if it's successful or if there's an error
    return new Promise((resolve, reject) => {
        //similar to node fs but for JS; will just read through the image file
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        //on load eventListener - particular to file readers
        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}

const submitUser = (data) => {
    axios.post("http://localhost:3001/signup", data)
    .then((results) => {
        console.log(results.data)
        //if the results are okay redirect to the dashboard
        document.location.replace("/dashboard")
    }).catch((error) => {
        alert("There was a problem with the signup. Try again later.")
        console.log(error)
    })
}

submitButton.addEventListener("click", async (e) => {
    e.preventDefault()
    const file = profile_picture.files
    // console.log(file)
    if (file.length === 1) {
        const profile_pic = await convertBase64(file[0])
        // console.log(profile_pic)
        const data = {username: username.value, password: password.value, email: email.value, name: artist_name.value, bio: bio.value, socials: socials.value, user_image: profile_pic}
        submitUser(data);
    }
})