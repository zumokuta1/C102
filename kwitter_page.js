
const firebaseConfig = {

    apiKey: "AIzaSyAIaYRvxrvPjq6Y0BYJYa_Eb4b-P5hmhjg",

    authDomain: "kwitter-3510c.firebaseapp.com",

    databaseURL: "https://kwitter-3510c-default-rtdb.firebaseio.com",

    projectId: "kwitter-3510c",

    storageBucket: "kwitter-3510c.appspot.com",

    messagingSenderId: "714365339171",

    appId: "1:714365339171:web:7038fd8b45a6d17c82d396"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.setItem('user_name')

room_name = document.getElementById('room_name').value;

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}