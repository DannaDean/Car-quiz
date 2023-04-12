const questions = [
    {
        question: "Here's an easy one. Can you recognise this premium SUV?",
        answers: [
            "Jaguar E-Pace", "Porche Cayenne", "Mercedes GLA"
        ],
        correct: "Jaguar E-Pace",
        img: "img/JaguarE.jpg"
    },
    {
        question: "Do you think you can recognise what BMW series is this?",
        answers: [
            "BMW 6 Series", "BMW 3 Series", "BMW 8 Series"
        ],
        correct: "BMW 8 Series",
        img: "img/BMV8.jpg"
    },
    {
        question: "Time for another SUV...",
        answers: [
            "Dacia Duster", "MINI Countryman", "Jeep Renegade"
        ],
        correct: "Dacia Duster",
        img: "img/dacia-duster.jpg"
    },
    {
        question: "Do you recognise this new saloon?",
        answers: [
            "MG HS", "Genesis G80", "Audi A7"
        ],
        correct: "Genesis G80",
        img: "img/genesis-g80.jpg"
    },
    {
        question: "Can you recognise this family SUV?",
        answers: [
            "Hyundai Santa Fe", "Kia Sorento", "Misubishi Outlander PHEV"
        ],
        correct: "Misubishi Outlander PHEV",
        img: "img/misubischi-outlander.jpg"
    },
    {
        question: "Now for a compact SUV...",
        answers: [
            "Ford Puma", "Porche Macan", "Nissan Juke"
        ],
        correct: "Ford Puma",
        img: "img/ford-puma.jpg"
    },
    {
        question: "Can you guess what German hatchback this is?",
        answers: [
            "Mercedes A Class", "Audi A3 Sportback", "MBW 1 Series"
        ],
        correct: "Audi A3 Sportback",
        img: "img/audi-a3.jpg"
    },
    {
        question: "Hmmm, how about this one...",
        answers: [
            "Renault Zoe", "DS 3", "Nissan Micra"
        ],
        correct: "Renault Zoe",
        img: "img/renault-zoe.jpg"
    },
    {
        question: "Which Hyundai is this?",
        answers: [
            "Hyundai i10", "Hyundai loniq", "Hyundai Kona"
        ],
        correct: "Hyundai Kona",
        img: "img/hyundai-kona.jpg"
    },
    {
        question: "What hatchback is this?",
        answers: [
            "Ford Focus", "Mazda 2", "Nissan Micra"
        ],
        correct: "Mazda 2",
        img: "img/mazda-2.jpg"
    },
    {
        question: "Can you recognise this premium saloon?",
        answers: [
            "Jaguar XE", "BMW 3 Series", "Mercedes E Class"
        ],
        correct: "Jaguar XE",
        img: "img/jaguar-xe.jpg"
    },
    {
        question: "What SUV is this?",
        answers: [
            "Landrover Discovery Sport", "Jeep Compass", "Kia Sorento"
        ],
        correct: "Jeep Compass",
        img: "img/jeep-compass.jpg"
    },
    {
        question: "What Ford Model is this?",
        answers: [
            "Puma", "Kuga", "Fiesta ST"
        ],
        correct: "Fiesta ST",
        img: "img/fiesta-st.jpg"
    },
    {
        question: "Do you recognise this Maserati?",
        answers: [
            "Ghibli", "Levante", "Quattroporte"
        ],
        correct: "Ghibli",
        img: "img/ghibli.jpg"
    },
    {
        question: "Can you guess what Landrover this is?",
        answers: [
            "Range Rover", "Evoque", "Defender"
        ],
        correct: "Range Rover",
        img: "img/range-rover.jpg"
    },
    {
        question: "What new Hybrid super mini this is?",
        answers: [
            "MINI Hatchback", "Fiat 500", "Renault Twingo"
        ],
        correct: "Fiat 500",
        img: "img/fiat-500.jpg"
    },
    {
        question: "How about this Skoda model?",
        answers: [
            "Octavia", "Kamiq", "Superb"
        ],
        correct: "Octavia",
        img: "img/octavia.jpg"
    },
    {
        question: "Can you recognise this Volvo?",
        answers: [
            "XC 40", "XC 90", "XC 60"
        ],
        correct: "XC 40",
        img: "img/xc40.jpg"
    },
    {
        question: "Which Volkswagen model is this?",
        answers: [
            "Arteon", "Golf", "T-Roc"
        ],
        correct: "Golf",
        img: "img/golf.jpg"
    },
    {
        question: "What is this hatchback?",
        answers: [
            "Vauxhall Corsa", "Vauxhall Astra", "Vauxhall Adam" 
        ],
        correct: "Vauxhall Corsa",
        img: "img/vauxhall-corsa.jpg"
    }
]

const quiz = document.getElementById('car-quiz')
const image = document.getElementById('image')
const question = document.getElementById('question')
const answers = document.getElementById('answers')
const calcul = document.getElementById('calc')
const messageContiner = document.getElementById('message-container')
const right = document.getElementById('well-done')
const wrong = document.getElementById('wrong')
const containerTwo = document.querySelector('.container-2')
const container = document.querySelector('.container')
const restartQuiz = document.getElementById('restart-quiz')
const startQuiz = document.getElementById('start-quiz')
const startContainer = document.getElementById('start-container')
const info = document.getElementById('info')

messageContiner.style.display = 'none'
right.style.display = 'none'
wrong.style.display = 'none'
containerTwo.style.display = 'none'

let curentQuestion = 1
let percentageScore = 0


function setQuestion(questionNumber) {
    if(questionNumber >= questions.length) {
        container.style.display = 'none'
        containerTwo.style.display = 'flex'
        return
        
    }

    if(percentageScore >= 75) {
        info.innerHTML = `This quiz could have earned you a spin in our "Spin the Speedo", <a href="#">login to your account</a> `
    } else {
        info.innerHTML = `<a href="#">Login to your account</a> and complete the quiz with a score > 75% to earn a spin in our "Spin the Speedo"`
    }

    question.innerHTML = questions[questionNumber].question
    image.src = questions[questionNumber].img
    answers.innerHTML = ''
    questions[questionNumber].answers.forEach(answer => {
        answers.innerHTML += `<button class='answer'>${answer}</button>`
    })
    calcul.innerHTML = `Question ${curentQuestion} / ${questions.length}`

    const btns = document.getElementsByClassName('answer')
    const next = document.getElementById("next")

    Array.from(btns).forEach(btn => {
        btn.addEventListener('click', () => {
            if(btn.textContent === questions[questionNumber].correct) {
                messageContiner.style.display = 'flex'
                right.style.display = 'flex'
                next.style.display = 'block'
                answers.style.opacity = '0'
                answers.style.pointerEvents = "none"

                const rightAnswer = document.getElementById("right-answer")

                rightAnswer.innerHTML = `The answer is: ${questions[questionNumber].correct}`

                percentageScore += 5

                const percentage = document.getElementById('percentage')
                percentage.innerHTML = `${percentageScore}`

            } else {
                messageContiner.style.display = 'flex'
                wrong.style.display = 'flex'
                next.style.display = 'block'
                answers.style.opacity = '0'
                answers.style.pointerEvents = "none"

                const actualAnswer = document.getElementById('actual-answer')

                actualAnswer.innerHTML = `The answer actually is: ${questions[questionNumber].correct}`
            }
        })

        percentage.textContent = percentageScore
    })
}

next.addEventListener('click', () => {
        curentQuestion += 1
        questionN += 1
        setQuestion(questionN)
    
    
    messageContiner.style.display = 'none'
    right.style.display = 'none'
    wrong.style.display = 'none'
    next.style.display = 'none'
    answers.style.opacity = '1'
    answers.style.pointerEvents = "auto"
})

startQuiz.addEventListener('click', () => {
    container.style.display = 'flex'
    startContainer.style.display = 'none'
})

restartQuiz.addEventListener('click', () => {
    container.style.display = 'flex'
    containerTwo.style.display = 'none'
    questionN = 0
    curentQuestion = 1
    percentageScore = 0
    setQuestion(questionN)
})


let questionN = 0

setQuestion(questionN)