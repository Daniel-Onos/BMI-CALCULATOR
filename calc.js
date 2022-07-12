// const calculateBMI = () => {
//     const height = document.querySelector('#height').value

//     const weight = document.querySelector('#weight').value

//     if(weight == ''){
//         alert('Fill in your weight')
//     }else if(height == ''){
//         alert('Fill in your height')
    // }else if(isNaN(parseInt(weight)) || isNaN(parseInt(height))){
    //     alert('You must fill in numbers only!')
//     }else{
//         const BMI = weight / (height * height)
    
//         document.querySelector('.output').innerText = BMI
//     }

// }     

const calculateBMI = () => {
    const height = document.querySelector('#height').value

    const weight = document.querySelector('#weight').value

    if (weight == ''){
        alert('fill i your weight')
    }else if(height == ''){
        alert('Fill in your height')
    }else if(isNaN(parseInt(weight)) || isNaN(parseInt(height))){
        alert('You must fill in numbers only')
    }else{
        const BMI = weight / (height * height)

        document.querySelector('.output').innerText = BMI
    }
}