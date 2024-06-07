console.log(`salam`)
// var edu=document.getElementById(`edu`)
// var education=edu.value;
// console.log(education)

// function inter(){
//     var inter=document.getElementById()
//     if(inter)
//     console.log(`intermediate`)
// }

// function matric(){
//     console.log(`matriculation`)
// }

// function bachelors(){
//     console.log(`bachelors`)
// }

// function masters(){
//     console.log(`masters`)
// }


// //if you want to do through a button 
// var btn=document.getElementById(`button`)
// btn.addEventListener(`click`, function () {
//     var education = document.getElementById(`edu`)
// var qualification=education.value;
// if(qualification===`inter`){
//     console.log(`pakistan`)
// }
// else if(qualification===`matric`){
// console.log(qualification)
// }
// else if(qualification===`bachelors`){
// console.log(qualification)
// }
// else if(qualification===`masters`){
// console.log(qualification)
// }
// }
// )

// another CODE FOR CARD;
// function mobilePhone() {
//     var mobilephones = document.getElementById(`mobilephones`)
//     var brand = mobilephones.value;
//     if (brand === `Qmobile`) {
//         var something=`<img src="./mobile.jpg" alt="">
//         <p>QWmobikke: cnasdbcudilsc</p>
//         `
//         var mobile=document.getElementById(`mobile`)
//         mobile.innerHTML=something
//     }
//     else if (brand === `Iphone`) {
//         console.log(`steve jobs`)
//     }
//     else if (brand === `Samsung`) {
//         console.log(`yahudi`)
//     }
//     // console.log(brand)
// }



// new code copied from chatgpt;
let mobileBrands = {
    Iphone: {
        Models: {
            Iphone11: {
                ScreenSize: "6.4 Inches",
                Ram: ["4GB", "6GB"],
                Storage: ["32GB", "64GB", "128Gb"],
                Camera: " 50MP",
                Battery: "3400 MAH",
            },
            Iphone11pro: {
                ScreenSize: `7.0 Inches`,
                Ram: [`4GB`, `8GB`],
                Storage: [`32GB`, `48GB`, `128GB`],
                Camera: `48MP`,
                Battery: `4000MAH`,
            },
            Iphone14pro: {
                ScreenSize: `7.2 Inches`,
                Ram: [`4GB`, `12GB`],
                Storage: [`128GB`, `277GB`],
                Camera: `72MP`,
                Battery: `4400MAH`,
            },



        }
    },

    GooglePixel: {
        Models: {
            Googlepixel6pro: {
                ScreenSize: "6.4 Inches",
                Ram: ["4GB", "6GB"],
                Storage: ["32GB", "64GB", "128Gb"],
                Camera: " 50MP",
                Battery: "3400 MAH",
            },
            GooglePixel4: {
                ScreenSize: `7.0 Inches`,
                Ram: [`4GB`, `8GB`],
                Storage: [`32GB`, `48GB`, `128GB`],
                Camera: `48MP`,
                Battery: `4000MAH`,
            },
            GooglePixel8pro: {
                ScreenGSize: `7.2 Inches`,
                Ram: [`4GB`, `12GB`],
                Storage: [`128GB`, `277GB`],
                Camera: `72MP`,
                Battery: `4400MAH`,
            },

        }

    },

    Samsung: {
        Models: {
            SamsungS20: {
                ScreenSize: "6.4 Inches",
                Ram: ["4GB", "6GB"],
                Storage: ["32GB", "64GB", "128Gb"],
                Camera: " 50MP",
                Battery: "3400 MAH",
            },
            SamsungS10: {
                ScreenSize: `7.0 Inches`,
                Ram: [`4GB`, `8GB`],
                Storage: [`32GB`, `48GB`, `128GB`],
                Camera: `48MP`,
                Battery: `4000MAH`,
            },
            SamsungNote10: {
                ScreenGSize: `7.2 Inches`,
                Ram: [`4GB`, `12GB`],
                Storage: [`128GB`, `277GB`],
                Camera: `72MP`,
                Battery: `4400MAH`,
            },

        }

    },

    Vivo: {
        Models: {
            VivoA32: {
                ScreenSize: "6.4 Inches",
                Ram: ["4GB", "6GB"],
                Storage: ["32GB", "64GB", "128Gb"],
                Camera: " 50MP",
                Battery: "3400 MAH",
            },
            VivoA42: {
                ScreenSize: `7.0 Inches`,
                Ram: [`4GB`, `8GB`],
                Storage: [`32GB`, `48GB`, `128GB`],
                Camera: `48MP`,
                Battery: `4000MAH`,
            },
            VivoS1pro: {
                ScreenSize: `7.2 Inches`,
                Ram: [`4GB`, `12GB`],
                Storage: [`128GB`, `277GB`],
                Camera: `72MP`,
                Battery: `4400MAH`,
            },

        }

    },

    Realme: {
        Models: {
            realme32: {
                ScreenSize: "6.4 Inches",
                Ram: ["4GB", "6GB"],
                Storage: ["32GB", "64GB", "128Gb"],
                Camera: " 50MP",
                Battery: "3400 MAH",
            },
            realmeC12: {
                ScreenSize: `7.0 Inches`,
                Ram: [`4GB`, `8GB`],
                Storage: [`32GB`, `48GB`, `128GB`],
                Camera: `48MP`,
                Battery: `4000MAH`,
            },
            realmeC30: {
                ScreenSize: `7.2 Inches`,
                Ram: [`4GB`, `12GB`],
                Storage: [`128GB`, `277GB`],
                Camera: `72MP`,
                Battery: `4400MAH`,
            },




        }

    },


}

// ye object ka andar objects bnaya hai iska aagha kal sa code likhanga ;
var selectBrand = document.getElementById(`mobileBrand`)
var selectModel = document.getElementById(`model`)
var specsDiv = document.getElementById(`specs`)



selectBrand.addEventListener(`change`, function (event) {
    let brandvalue = event.target.value;
    console.log(brandvalue)
    // selectModel.innerHTML = `<optiom value="" >--select model--</option>`; if we use this statment the empty select option will not show

    if (brandvalue) {
        selectModel.innerHtml=``;
        let models = mobileBrands[brandvalue].Models;
        console.log(models)
        for (let model in models) {
            let option = document.createElement(`option`)
            option.value = model;
            option.text = model;
            selectModel.appendChild(option)
        }
        selectModel.disabled = false;
        selectModel.innerHTML=``;
    } else {
        selectModel.disabled = true;
        // selectModel.innerHTML = ``
    }

    selectModel.addEventListener(`change`, function (event) {
        let brand = selectBrand.value;
        let model = event.target.value;
        console.log(model)
        if (model) {
            let specs = mobileBrands[brand].Models[model];
            console.log(specs)
            specsDiv.innerHTML =
                `<div id="styling">
                <h1>Mobile Brand: ${brand} </h1>
          <h2>Mobile model: ${model} </h2>
        <h3>Mobile Ram: ${specs.Ram} </h3>
        <h3>Mobile ScreenSize: ${specs.ScreenSize} </h3>
        <h3>Mobile Storage: ${specs.Storage} </h3>
        <h3>Mobile Camera: ${specs.Camera} </h3>
        <h3>Mobile Battery: ${specs.Battery} </h3>
        </div>`


        }
        else {
            specsDiv.innerHTML = ``;
        }
    })

})
