// Set items in LocalStorage

const isOnline = true;
sessionStorage.setItem('isOnline', isOnline);


if (sessionStorage.getItem('isOnline')) {
    document.getElementById('online').innerHTML = 'Vous êtes connecté !';
} else {
    document.getElementById('online').innerHTML = 'Hors ligne';
}

const skills = ['Javascript', 'React', 'Node', 'Mongo', 'AWS'];

localStorage.setItem('skills', skills);

// before store an abject in LocalStorage, we have to stringify it in json
let skills = [{
        tech: 'HTML',
        level: 10
    },
    {
        tech: 'CSS',
        level: 9
    },
    {
        tech: 'JS',
        level: 8
    },
    {
        tech: 'React',
        level: 9
    },
    {
        tech: 'Redux',
        level: 10
    },
    {
        tech: 'Node',
        level: 8
    },
    {
        tech: 'MongoDB',
        level: 8
    }
]

let skillJSON = JSON.stringify(skills);
localStorage.setItem('skills', skillJSON);